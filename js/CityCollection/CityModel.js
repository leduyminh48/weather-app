/*jslint nomen: true*/
define(["lodash",
    "forecast",
    "utils",
    "autocomplete"], function (_, forecast, utils, autocomplete) {
    "use strict";
    var CityModel = function (options) {
        _.extend(this, options);
        if (!this.uid) {
            this.uid = this.placeId + (new Date()).getTime();
        }
    };

    CityModel.prototype = {

        constructor: CityModel,

        fetchForecast: function () {
            var self = this,
                d = $.Deferred();
            autocomplete.getGeocode(self.placeId, function (coords) {
                self.coords = coords;
                self.updateForecast();
            });
            return d.promise();
        },

        //a faster version of fetchForecast, providing that we already knew coords
        updateForecast: function () {
            var self = this,
                d = $.Deferred();
            forecast.fetch(self.coords, function (data) {
                var now = new Date();

                self.forecast = data;
                self.updateTime = now.getTime() / 1000;

                utils.EventBus.trigger("CityModel:update", self);
            });

            return d.promise();
        }
    };

    return CityModel;
});