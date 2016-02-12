/**
 * Created by Minh on 1/7/2016.
 * This controller will handle events related to dashboard, can read and render CityCollection inherited from CityController
 */
/*jslint nomen: true*/
define(["jquery",
        "lodash",
        "utils",
        "DashboardView",
        "CityController"],
    function ($, _, utils, DashboardView, CityController) {
        "use strict";

        /**
         *
         * @constructor
         */

        var DashboardController = function () {

                _.extend(this, CityController);

                this.dashboardView = new DashboardView();
            },
            EventBus = utils.EventBus;

        _.extend(DashboardController.prototype, {

            constructor: DashboardController,

            /**
             *
             * @param cityModel
             */

            cityCollectionUpdate: function (cityModel) {
                var self = this;

                self.dashboardView.updateCity(cityModel, self.settings);
                self.dashboardView.toggleDailyDisplay(self.settings.showDays);
            },

            /**
             *
             * @param cityModel
             */
            cityCollectionAdd: function (cityModel) {
                var self = this;
                self.dashboardView.addCity(cityModel, self.settings);
                self.dashboardView.toggleDailyDisplay(self.settings.showDays);
            },

            cityCollectionAddAll: function (collection) {
                var self = this;

                self.dashboardView.addCities(collection, self.settings);
            },

            /**
             *
             * @param selected
             */

            deleteCities: function (selected) {
                var self = this;
                self.dashboardView.removeSelected(selected);
                self.dashboardView.reloadPagination(self.cityCollection.getCollection());
                if (self.cityCollection.getCollection().length === 0) {
                    self.dashboardView.resetBackground();
                } else {
                    self.dashboardView.moveToSlide(1);
                }
            },

            /**
             *
             * @param uid
             */

            cityCollectionViewClick: function (uid) {
                var self = this;

                self.dashboardView.moveToSlideByUid(uid);
            },

            slideChange: function (dataSlider) {
                var self = this;

                self.settings.activeDashboard = dataSlider;

                EventBus.trigger("dashboardController:slideChange", dataSlider);
            },

            /**
             *  toggle daily display after loading from Storage
             */

            loadFromStorage: function () {
                var self = this;

                self.dashboardView.toggleDailyDisplay(self.settings.showDays);

                if (self.settings.activeDashboard) {
                    self.dashboardView.moveToSlide(self.settings.activeDashboard);
                }
            },

            /**
             *
             * @param changes
             */

            settingChange: function (changes) {
                var self = this;

                _.forOwn(changes, function (value, key) {

                    switch (key) {
                        case "showDays":
                            self.dashboardView.toggleDailyDisplay(value);
                            break;

                        case "tempUnit":
                            self.dashboardView.addCities(self.cityCollection.getCollection(), self.settings);
                            self.dashboardView.toggleDailyDisplay(self.settings.showDays);
                            if (self.settings.activeDashboard) {
                                self.dashboardView.moveToSlide(self.settings.activeDashboard);
                            } else {
                                self.dashboardView.moveToSlide(1);
                            }
                            break;
                        default:
                            return false;
                    }
                });
            },

            initialize: function () {
                var self = this;

                EventBus.on("CityModel:update", self.cityCollectionUpdate, self);
                EventBus.on("cityCollection:add", self.cityCollectionAdd, self);
                EventBus.on("cityCollection:addAll", self.cityCollectionAddAll, self);
                EventBus.on("cityCollection:remove", self.deleteCities, self);
                EventBus.on("cityCollectionViewItem:click", self.cityCollectionViewClick, self);
                EventBus.on("dashboardView:slideChange", self.slideChange, self);
                EventBus.on("cityController:setting:change", self.settingChange, self);
                EventBus.on("cityController:loadFromStorage", self.loadFromStorage, self);

                self.dashboardView.initialize();
            }
        });

        return DashboardController;
    });