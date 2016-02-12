define(["jquery",
    "lodash",
    "async!https://maps.googleapis.com/maps/api/js?key=AIzaSyAhZrD3LuU4EuGuINJJMVxouh-LJxWb7-8&libraries=places"], function ($, _) {
    "use strict";
    var Autocomplete = function () {
        this.collection = [];

        this.queryOptions = {
            types: ["(cities)"]
        };

        this.getGeocode = function (placeId, callback) {
            var geocoder = new google.maps.Geocoder(),
                coords = "";
            geocoder.geocode({
                'placeId': placeId
            }, function (results, status) {
                if (status !== google.maps.GeocoderStatus.OK) {
                    console.log("Geocode service failed due to: " + status);
                    return;
                }
                coords = results[0].geometry.location.lat() + "," + results[0].geometry.location.lng();
                callback(coords);
            });
        };

        this.getCitiesInfo = function (predictions, callback, thisArg) {
            var self = this;
            _.each(predictions, function (el) {
                if (el.place_id && (el.types[0] === "locality" || el.types[0] === "administrative_area_level_1" || el.types[0] === "administrative_area_level_2")) {

                    var offset = el.matched_substrings[0].offset,
                        matchLength = el.matched_substrings[0].length,
                        matchedString = _.first(el.terms).value.slice(offset, offset + matchLength),
                        otherParts = [_.first(el.terms).value.slice(0, offset), _.first(el.terms).value.slice(offset + matchLength)];

                    self.collection.push({
                        placeId: el.place_id,
                        matchedSubstring: matchedString,
                        otherParts: otherParts,
                        cityName: _.first(el.terms).value,
                        countryName: _.last(el.terms).value
                    });
                }
            });
            callback.call(thisArg, self.collection);
        };

        this.fetch = function (text, callback, thisArg) {
            var self = this,
                service = new google.maps.places.AutocompleteService();

            self.collection = [];

            service.getQueryPredictions({
                input: text,
                types: self.queryOptions.types
            }, function (predictions, status) {
                if (status != google.maps.places.PlacesServiceStatus.OK) {
                    console.log("Autocomplete failed due to: " + status);
                    return;
                }
                self.getCitiesInfo(predictions, callback, thisArg);
            });
        };
    };

    return new Autocomplete();
});