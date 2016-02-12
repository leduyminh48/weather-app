/**
 * Created by Duy_Minh_Le on 1/15/2016.
 */
/**
 * Created by Duy_Minh_Le on 1/15/2016.
 */
define(["jquery",
    "lodash",
    "CityController",
    "CityCollection",
    "CityModel",
    "utils",
    "store"], function ($, _, CityController, CityCollection, CityModel, utils, Store) {
    "use strict";

    describe("CityController", function () {
        var paris = {
            cityName: "Paris",
            placeId: "ChIJD7fiBh9u5kcRYJSMaMOCCwQ"
        };
        Store.saveCollection([]);
        CityController.initialize();

        it("should have cityCollection and cityModel as properties", function () {
            expect(CityController.cityCollection instanceof  CityCollection).toBe(true);
            expect(CityController.CityModel).toEqual(CityModel);
        });

        it("should create CityModel and fetch data when event cityCollectionView:add is triggered", function () {
            spyOn(CityController, "CityModel").and.returnValue(new CityModel(paris));
            spyOn(CityModel.prototype, "fetchForecast");

            utils.EventBus.trigger("cityCollectionView:add", [paris]);
            expect(CityController.CityModel).toHaveBeenCalled();
            expect(CityModel.prototype.fetchForecast).toHaveBeenCalled();
        });

        it("should update or add CityModel when event CityModel:update is triggered", function () {
            spyOn(Store, "updateByIdx");
            spyOn(CityController.cityCollection, "add").and.callThrough();

            utils.EventBus.trigger("CityModel:update", paris);

            expect(CityController.cityCollection.add).toHaveBeenCalled();

            utils.EventBus.trigger("CityModel:update", CityController.cityCollection.getCollection()[0]);

            expect(Store.updateByIdx).toHaveBeenCalled();

        });

        it("should update all cityModel incityCollection when updateRequest is called", function () {
            spyOn(CityController.cityCollection, "updateAll");

            utils.EventBus.trigger("dashboard:updateRequest");

            expect(CityController.cityCollection.updateAll).toHaveBeenCalled();
        });

        it("should save Collection to Storage when event cityCollection:add is triggered", function () {
            spyOn(Store, "saveCollection");

            utils.EventBus.trigger("cityCollection:add");

            expect(Store.saveCollection).toHaveBeenCalled();
        });


        it("should delete cities from collection when event cityCollectionView:remove is triggered", function () {
            spyOn(CityController.cityCollection, "remove");
            spyOn(Store, "saveCollection");

            utils.EventBus.trigger("cityCollectionView:remove", [paris]);

            expect(CityController.cityCollection.remove).toHaveBeenCalled();

            expect(Store.saveCollection).toHaveBeenCalled();

        });

        it("should execute neccessary functions when loadFromStorage", function () {
            spyOn(CityController.cityCollection, "addAll");
            spyOn(CityController.cityCollection, "setUpdateInterval").and.callThrough();
            spyOn(CityController.cityCollection, "cancelUpdateInterval");


            CityController.loadFromStorage();
            expect(CityController.cityCollection.addAll).toHaveBeenCalled();
            expect(CityController.cityCollection.setUpdateInterval).toHaveBeenCalled();
            expect(CityController.cityCollection.cancelUpdateInterval).toHaveBeenCalled();
            CityController.cityCollection.cancelUpdateInterval();
        });

        it("should react properly when event setting change is trigger", function () {
            utils.EventBus.trigger("SettingModel:change", {
                showDays: 10
            });

            expect(CityController.settings.showDays).toBe(10);
            spyOn(CityController.cityCollection, "setUpdateInterval");
            utils.EventBus.trigger("SettingModel:change", {
                updateInterval: 30
            });

            expect(CityController.cityCollection.setUpdateInterval).toHaveBeenCalled();

            CityController.cityCollection.cancelUpdateInterval();
        });
    });
});