/**
 * Created by Minh on 1/15/2016.
 */
define(["jquery",
    "lodash",
    "CityModel",
    "autocomplete"], function ($, _, CityModel, autocomplete) {

    var paris = new CityModel({
        cityName: "Paris",
        placeId: "ChIJD7fiBh9u5kcRYJSMaMOCCwQ"
    });

    describe("CityModel", function () {
        it("should create a model with expected properties and methods", function () {
            expect(paris.cityName).not.toBeUndefined();
            expect(paris.placeId).not.toBeUndefined();
            expect(paris.fetchForecast).not.toBeUndefined();
            expect(paris.updateForecast).not.toBeUndefined();
        });

        it("should fetchForecast properly", function () {
            spyOn(paris, "updateForecast").and.callThrough();
            spyOn(autocomplete, "getGeocode").and.callThrough();
            $.when(paris.fetchForecast()).done(function () {
                expect(autocomplete.getGeocode).toHaveBeenCalled();
                expect(paris.coords).not.toBeUndefined();
                expect(paris.updateForecast).toHaveBeenCalled();
                expect(paris.forecast).not.toBeUndefined();
            });
        });

        it("should return new forecast data after calling method updateForecast", function () {
            var oldUpdateTime;
            paris.updateForecast();
            $.when(paris.fetchForecast()).done(function () {
                oldUpdatetime = paris.updateTime;
                $.when(paris.updateForecast()).done(function () {
                    expect(paris.updateTime - oldUpdateTime).toBeGreaterThan(0);
                });
            });

        })
    });
});