define(["jquery",
    "lodash",
    "SettingModel",
    "SettingView",
    "utils",
    "store"], function ($, _, SettingModel, SettingView, utils, Store) {

    var EventBus = utils.EventBus;

    function SettingController() {
        this.settingModel = new SettingModel();

        this.settingView = new SettingView();
    }

    SettingController.prototype = {

        constructor: SettingController,

        settingViewChange: function (changes) {
            var self = this;

            self.settingModel.updateSetting(changes);
        },

        settingModelChange: function (changes) {

            Store.updateSetting(changes);

        },

        slideChange: function (dataSlider) {
            var self = this;

            self.settingModel.updateSetting({
                activeDashboard: dataSlider
            });
        },

        initialize: function () {
            var self = this;

            EventBus.on("SettingView:change", self.settingViewChange, self);

            EventBus.on("SettingModel:change", self.settingModelChange, self);

            EventBus.on("dashboardController:slideChange", self.slideChange, self);

            self.settingModel.updateSetting(Store.getSetting());

            self.settingView.initialize(self.settingModel.getAllSetting());
        }
    };

    return SettingController;
});