/**
 * Created by Duy_Minh_Le on 1/15/2016.
 */
define(["jquery",
        "lodash",
        "perfectScrollbar",
        "utils",
        "SuggestionView",
        "CityCollection",
        "CityCollectionView",
        "CityController",
        "SidebarController"],
    function ($, _, ps, utils, SuggestionView, CityCollection, CityCollectionView, CityController, SidebarController) {

        "use strict";

        describe("SidebarController", function () {
            var sidebarController = new SidebarController(),
                paris = {
                    cityName: "Paris",
                    placeId: "ChIJD7fiBh9u5kcRYJSMaMOCCwQ"
                };

            //sidebarController.initialize();

            it("should inherit cityCollection and settings from CityController", function () {
                expect(sidebarController.cityCollection).toBeDefined();

                expect(sidebarController.cityCollection instanceof CityCollection).toBe(true);
            });

            it("should also consist of SuggestionView and CityCollectionView", function () {
                expect(sidebarController.cityCollectionView instanceof CityCollectionView).toBe(true);
                expect(sidebarController.suggestionView instanceof SuggestionView).toBe(true);
            });

            it("should change property selected of CityCollectionView and toggleBtnStyle when event suggestionChanged is triggered", function () {
                spyOn(sidebarController.cityCollectionView, "toggleBtnStyle");

                sidebarController.suggestionChange([paris, paris]);

                expect(sidebarController.cityCollectionView.selected.length).toEqual(2);
                expect(sidebarController.cityCollectionView.toggleBtnStyle).toHaveBeenCalled();

                sidebarController.cityCollectionView.resetSelected();
            });

            it("should toggle suggestionView on when event addCityModeOn is triggered", function () {
                spyOn(sidebarController.suggestionView, "on");

                sidebarController.addCityModeOn();

                expect(sidebarController.suggestionView.on).toHaveBeenCalled();
            });

            it("should toggle suggestionView off when event addCityModeOff is triggered", function () {
                spyOn(sidebarController.suggestionView, "off");

                sidebarController.addCityModeOff();

                expect(sidebarController.suggestionView.off).toHaveBeenCalled();
            });

            it("should update cityCollectionView when a cityModel in collection is updated", function () {
                spyOn(sidebarController.cityCollectionView, "update");

                sidebarController.cityCollectionUpdate(paris);

                expect(sidebarController.cityCollectionView.update).toHaveBeenCalledWith(paris, sidebarController.settings);
            });

            it("should add item to cityCollectionView when item is added to collection", function () {
                spyOn(sidebarController.cityCollectionView, "addOne");

                sidebarController.cityCollectionAdd(paris);

                expect(sidebarController.cityCollectionView.addOne).toHaveBeenCalledWith(paris, sidebarController.settings);
            });

            it("should add items to cityCollectionView when items is added to collection", function () {
                spyOn(sidebarController.cityCollectionView, "addAll");

                sidebarController.cityCollectionAddAll([paris, paris]);

                expect(sidebarController.cityCollectionView.addAll).toHaveBeenCalledWith([paris, paris], sidebarController.settings);
            });

            it('should change tempUnit if its tempUnit setting is updated', function () {
                spyOn(sidebarController.cityCollectionView, "addAll");

                sidebarController.settingChange({
                    tempUnit: "F"
                });

                expect(sidebarController.cityCollectionView.addAll).toHaveBeenCalled();

                sidebarController.cityCollectionView.addAll.calls.reset();

                sidebarController.settingChange({
                    showDays: "C"
                });

                expect(sidebarController.cityCollectionView.addAll).not.toHaveBeenCalled();
            });

            it("should add all neccessary event listener when initialize", function () {
                spyOn(sidebarController.cityCollectionView, "initialize");
                spyOn(sidebarController.suggestionView, "initialize");

                sidebarController.initialize();

                expect(utils.EventBus._events["suggestSelection:change"]).toBeDefined();
                expect(utils.EventBus._events["addCityMode:on"]).toBeDefined();
                expect(utils.EventBus._events["addCityMode:off"]).toBeDefined();
                expect(utils.EventBus._events["CityModel:update"]).toBeDefined();
                expect(utils.EventBus._events["cityCollection:add"]).toBeDefined();
                expect(utils.EventBus._events["cityCollection:addAll"]).toBeDefined();
                expect(utils.EventBus._events["cityController:setting:change"]).toBeDefined();

                expect(sidebarController.cityCollectionView.initialize).toHaveBeenCalled();
                expect(sidebarController.suggestionView.initialize).toHaveBeenCalled();

            });

        });
    });