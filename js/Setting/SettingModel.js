/*jslint nomen:true*/
define(["jquery",
    "lodash",
    "utils"], function ($, _, utils) {
    "use strict";

    function SettingModel(options) {

        options = _.extend({
            _maxShowDays: 7,
            _minShowDays: 1,
            _maxUpdateInterval: 60,
            _minUpdateInterval: 15,
            _stepShowDays: 1,
            _stepUpdateInterval: 15,
            activeDashboard: null,
            showDays: 7,
            tempUnit: "C",
            updateInterval: 15
        }, options);

        _.extend(this, options);
    }

    SettingModel.prototype = {

        constructor: SettingModel,

        updateSetting: function (changes) {
            var self = this;

            _.forOwn(changes, function (value, key) {
                self[key] = value;
            });

            utils.EventBus.trigger("SettingModel:change", changes);
        },

        getSetting: function (property) {
            return this[property];
        },

        getAllSetting: function () {
            var self = this;

            return {
                activeDashboard: self.activeDashboard,
                showDays: self.showDays,
                tempUnit: self.tempUnit,
                updateInterval: self.updateInterval,
                maxShowDays: self._maxShowDays,
                minShowDays: self._minShowDays,
                stepShowDays: self._stepShowDays,
                minUpdateInterval: self._minUpdateInterval,
                maxUpdateInterval: self._maxUpdateInterval,
                stepUpdateInterval: self._stepUpdateInterval
            };
        }
    };

    return SettingModel;
});