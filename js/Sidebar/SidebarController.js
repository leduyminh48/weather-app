/**
 * Created by Minh on 1/7/2016.
 *
 * This controller will handle events related to sidebar, can read and render CityCollection inherited from CityController
 */
/*jslint nomen: true*/
define(["jquery",
        "lodash",
        "utils",
        "SuggestionView",
        "CityCollectionView",
        "CityController"],
    function ($, _, utils, SuggestionView, CityCollectionView, CityController) {
        "use strict";

        var SidebarController = function () {

                _.extend(this, CityController);

                this.cityCollectionView = new CityCollectionView();

                this.suggestionView = new SuggestionView();
            },
            EventBus = utils.EventBus;

        _.extend(SidebarController.prototype, {

            constructor: SidebarController,

            /**
             * Handle event when auto-complete suggestion change
             * @param selected
             */

            suggestionChange: function (selected) {
                var self = this;

                self.cityCollectionView.selected = selected;
                self.cityCollectionView.toggleBtnStyle();
            },

            addCityModeOn: function () {
                var self = this;

                self.suggestionView.on();
            },

            addCityModeOff: function () {
                var self = this;

                self.suggestionView.off();
            },

            cityCollectionUpdate: function (cityModel) {
                var self = this;

                self.cityCollectionView.update(cityModel, self.settings);
            },

            /**
             *
             * @param cityModel
             */
            cityCollectionAdd: function (cityModel) {
                var self = this;

                self.cityCollectionView.addOne(cityModel, self.settings);
            },

            cityCollectionAddAll: function (collection) {
                var self = this;

                self.cityCollectionView.addAll(collection, self.settings);
            },

            /**
             *
             * @param changes
             */

            settingChange: function (changes) {
                var self = this;

                if (_.has(changes, "tempUnit")) {

                    self.cityCollectionView.addAll(self.cityCollection.getCollection(), self.settings);

                }
            },

            initialize: function () {
                var self = this;

                EventBus.on("suggestSelection:change", self.suggestionChange, self);
                EventBus.on("addCityMode:on", self.addCityModeOn, self);
                EventBus.on("addCityMode:off", self.addCityModeOff, self);
                EventBus.on("CityModel:update", self.cityCollectionUpdate, self);
                EventBus.on("cityCollection:add", self.cityCollectionAdd, self);
                EventBus.on("cityCollection:addAll", self.cityCollectionAddAll, self);
                EventBus.on("cityController:setting:change", self.settingChange, self);

                self.cityCollectionView.initialize();
                self.suggestionView.initialize();
            }
        });

        return SidebarController;
    });