/**
 * Created by Minh on 1/7/2016.
 */
/*jslint nomen:true*/
define(["jquery",
    "lodash",
    "utils",
    "store",
    "CityModel"], function ($, _, utils, store, CityModel) {
    "use strict";

    /**
     *
     * @constructor
     */
    var CityCollection = function () {

        this.collection = [];

        this.updateInterval = null;

    };

    CityCollection.prototype = {

        constructor: CityCollection,
        /**
         *
         * @returns {Array}
         */
        getCollection: function () {
            return this.collection;
        },

        getInstance: function (cityModel) {
            return cityModel instanceof CityModel ? cityModel : new CityModel(cityModel);
        },

        add: function (cityModel) {
            var self = this,
                cityInstance = self.getInstance(cityModel);
            self.collection.push(cityInstance);

            utils.EventBus.trigger("cityCollection:add", cityInstance);
        },


        /**
         *
         * @param collection
         */
        addAll: function (collection) {
            var self = this;

            _.each(collection, function (cityModel) {

                self.collection.push(self.getInstance(cityModel));

            });

            utils.EventBus.trigger("cityCollection:addAll", self.getCollection());
        },

        /**
         * update all city forecast
         */
        updateAll: function () {
            var self = this;
            _.each(self.collection, function (cityModel) {
                cityModel.updateForecast();
            });
        },

        /**
         *
         * @param uids
         */
        remove: function (uids) {
            var self = this;

            _.each(uids, function (uid) {
                var idx = _.findIndex(self.collection, function (el) {
                    return el.uid === uid;
                });

                if (idx !== -1) {
                    self.collection.splice(idx, 1);
                }
            });

            utils.EventBus.trigger("cityCollection:remove", uids);
        },

        /**
         *
         * @param uid
         */
        getCityByUid: function (uid) {
            var self = this;

            return _.find(self.collection, function (el) {
                return el.uid === uid;
            });
        },

        /**
         *
         * @param interval
         */
        setUpdateInterval: function (interval) {
            var self = this;
            console.log(interval);
            self.cancelUpdateInterval();
            self.updateInterval = setInterval(function () {
                self.updateAll.call(self);
            }, interval);

        },

        /**
         * cancel update interval
         */
        cancelUpdateInterval: function () {

            clearInterval(this.updateInterval);

        }
    };

    return CityCollection;
});