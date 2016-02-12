/**
 * Created by Minh on 1/7/2016.
 * This controller will listen and handle events which directly change Collection and Model (adding, updating and removing)
 */

/*jslint nomen: true*/
define(["jquery",
        "lodash",
        "utils",
        "CityModel",
        "CityCollection",
        "store"],
    function ($, _, utils, CityModel, CityCollection, Store) {
        "use strict";

        /**
         *
         * @constructor
         */

        var CityController = function () {

                this.cityCollection = new CityCollection();

                this.CityModel = CityModel;

                this.settings = {};
            },
            EventBus = utils.EventBus;

        CityController.prototype = {
            constructor: CityController,

            /**
             *
             * @param selected
             */
            addSelectedCities: function (selected) {
                var self = this;

                _.each(selected, function (el) {
                    var city = new self.CityModel(el);
                    city.fetchForecast();
                });
            },

            /**
             *
             * @param cityModel
             */
            cityModelUpdate: function (cityModel) {
                var self = this,
                    idx = _.findIndex(self.cityCollection.getCollection(), function (el) {
                        return el.uid === cityModel.uid;
                    }),
                    changes;
                if (idx === -1) {
                    self.cityCollection.add(cityModel);
                } else {
                    changes = {
                        updateTime: cityModel.updateTime,
                        forecast: cityModel.forecast
                    };
                    Store.updateByIdx(idx, changes);
                }
            },

            /**
             *
             * @param uid
             */
            dashboardUpdateRequest: function (uid) {
                var self = this;
                /*var city = self.cityCollection.getCityByUid(uid);

                city.updateForecast();*/
                self.cityCollection.updateAll();
            },


            cityCollectionAdd: function () {
                var self = this;
                Store.saveCollection(self.cityCollection.getCollection());
            },

            /**
             *
             * @param selected
             */
            deleteCities: function (selected) {
                var self = this;
                self.cityCollection.remove(selected);
                Store.saveCollection(self.cityCollection.getCollection());
            },

            loadFromStorage: function () {
                var self = this,
                    collection = Store.getCollection();

                _.extend(self.settings, Store.getSetting());

                self.cityCollection.addAll(collection);

                self.cityCollection.setUpdateInterval(self.settings.updateInterval * 60000);

                EventBus.trigger("cityController:loadFromStorage");
            },

            /**
             *
             * @param changes
             */
            settingModelChange: function (changes) {
                var self = this;

                _.forOwn(changes, function (value, key) {

                    self.settings[key] = value;

                });

                if (_.has(changes, "updateInterval")) {
                    self.cityCollection.setUpdateInterval(changes.updateInterval * 60000);
                }

                EventBus.trigger("cityController:setting:change", changes);
            },

            initialize: function () {
                var self = this;


                EventBus.on("cityCollectionView:add", self.addSelectedCities, self);
                EventBus.on("CityModel:update", self.cityModelUpdate, self);
                EventBus.on("cityCollection:add", self.cityCollectionAdd, self);
                EventBus.on("cityCollectionView:remove", self.deleteCities, self);
                EventBus.on("dashboard:updateRequest", self.dashboardUpdateRequest, self);
                EventBus.on("SettingModel:change", self.settingModelChange, self);


                self.loadFromStorage();
            }
        };

        return new CityController();
    });