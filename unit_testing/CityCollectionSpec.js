/**
 * Created by Duy_Minh_Le on 1/15/2016.
 */
define(["jquery",
        "lodash",
        "CityCollection",
        "CityModel"], function ($, _, CityCollection, CityModel) {
    "use strict";

    describe("CityCollection", function () {
        var cityCollection = new CityCollection();
        it("should have expected properties", function () {
            expect(cityCollection.collection).not.toBeUndefined();
            expect(cityCollection.updateInterval).not.toBeUndefined();
            expect(cityCollection.getCollection).not.toBeUndefined();
            expect(cityCollection.getInstance).not.toBeUndefined();
            expect(cityCollection.add).not.toBeUndefined();
            expect(cityCollection.addAll).not.toBeUndefined();
            expect(cityCollection.updateAll).not.toBeUndefined();
            expect(cityCollection.remove).not.toBeUndefined();
            expect(cityCollection.getCityByUid).not.toBeUndefined();
            expect(cityCollection.setUpdateInterval).not.toBeUndefined();
            expect(cityCollection.cancelUpdateInterval).not.toBeUndefined();
        });

        it("should always return instance of CityModel with method getInstance properly", function() {
            var paris = cityCollection.getInstance({
                cityName: "Paris",
                placeId: "ChIJD7fiBh9u5kcRYJSMaMOCCwQ"
            });

            expect(paris instanceof CityModel).toBe(true);
        });

        it("should add city to collection properly", function () {
            cityCollection.add({
                cityName: "Paris",
                placeId: "ChIJD7fiBh9u5kcRYJSMaMOCCwQ"
            });

            expect(cityCollection.collection.length).toBe(1);
            expect(cityCollection.collection[0] instanceof CityModel).toBe(true);
        });

        it("should be able to add an array of cities properly", function () {
            cityCollection.addAll([
                {
                    cityName: "Hanoi",
                    placeId: "ChIJD7fiBh9u5kcRYJSMaMOCCwQ"
                },
                {
                    cityName: "Kharkiv",
                    placeId: "ChIJiw-rY5-gJ0ERCr6kGmgYTC0"
                }
            ]);

            expect(cityCollection.collection.length).toBe(3);
            _.each(cityCollection.collection, function (el) {
                expect(el instanceof CityModel).toBe(true);
            });
        });

        it("should return Collection properly", function () {
            expect(cityCollection.getCollection().length).toBe(3);
        });

        it("should update every cityModel instance when updateAll is called", function () {
            var collection = cityCollection.getCollection();
            _.each(collection, function (el) {
                spyOn(el, "updateForecast");
            });

            cityCollection.updateAll();

            _.each(collection, function (el) {
                expect(el.updateForecast).toHaveBeenCalled();
            });
        });

        it("should remove element using array of uids properly", function () {
            var collection = cityCollection.getCollection(),
                firstUid = collection[0].uid,
                secondUid = collection[1].uid;
            cityCollection.remove([firstUid, secondUid]);

            expect(cityCollection.getCollection().length).toBe(1);
            expect(cityCollection.getCityByUid(firstUid)).toBeUndefined();
            expect(cityCollection.getCityByUid(secondUid)).toBeUndefined();
        });

        it("should setUpdateInterval properly", function () {
            spyOn(cityCollection, "updateAll");
            jasmine.clock().install();
            cityCollection.setUpdateInterval(80000);
            jasmine.clock().tick(80001);
            expect(cityCollection.updateAll).toHaveBeenCalled();
            jasmine.clock().uninstall();
            cityCollection.cancelUpdateInterval();
        });

        it("should clearInterval properly", function () {
            cityCollection.cancelUpdateInterval();

            expect(cityCollection.updateInterval).toBe(null);
        });
    })
});