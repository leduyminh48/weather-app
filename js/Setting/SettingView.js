/*jslint nomen: true*/
define(["jquery",
    "lodash",
    "utils"], function ($, _, utils) {
    "use strict";

    function SettingView() {

        _.extend(this, {
            $unitSwitch: $(".scale-sys__item"),

            $updateIntervalDragger: $("#dr-interval"),

            $forecastRangeDragger: $("#dr-forecast-range"),

            $updateIntervalLabel: $("#lb-interval"),

            $forecastRangeLabel: $("#lb-forecast-range")
        });


    }

    SettingView.prototype = {

        constructor: SettingView,
        /**
         *
         * @param options
         */

        updateView: function (options) {
            var self = this;
            self.$updateIntervalDragger.slider("value", parseFloat(options.updateInterval));

            self.$forecastRangeDragger.slider("value", parseFloat(options.showDays));

            self.$updateIntervalLabel.html(options.updateInterval);

            self.$forecastRangeLabel.html(options.showDays);

            $("[data-unit=" + options.tempUnit + "]").click();
        },

        /**
         *
         * @param options
         */

        initialize: function (options) {
            var self = this;


            self.$unitSwitch.on("click", function (event) {

                self.$unitSwitch.removeClass("scale-sys__item--active");

                $(this).addClass("scale-sys__item--active");

                utils.EventBus.trigger("SettingView:change", {
                    tempUnit: $(event.currentTarget).attr("data-unit")
                });
            });

            self.$updateIntervalDragger.slider({
                range: 'min',
                min: parseInt(options.minUpdateInterval),
                max: parseInt(options.maxUpdateInterval),
                step: parseInt(options.stepUpdateInterval)
            });

            self.$forecastRangeDragger.slider({
                range: 'min',
                min: parseInt(options.minShowDays),
                max: parseInt(options.maxShowDays),
                step: parseInt(options.stepShowDays)
            });

            self.updateView(options);

            self.$updateIntervalDragger.on("slidechange", function (event) {

                self.$updateIntervalLabel.html($(event.currentTarget).slider("value"));

                utils.EventBus.trigger("SettingView:change", {
                    updateInterval: $(event.currentTarget).slider("value")
                });
            });

            self.$forecastRangeDragger.on("slidechange", function (event) {

                self.$forecastRangeLabel.html($(event.currentTarget).slider("value"));

                utils.EventBus.trigger("SettingView:change", {
                    showDays: $(event.currentTarget).slider("value")
                });
            });
        }
    };

    return SettingView;
});