/**
 * Created by Minh on 1/7/2016.
 */
/*jslint nomen: true*/
define(["lodash",
    "jquery",
    "text!galleryItemTmpl",
    "text!sliderbtnTmpl",
    "utils"], function (_, $, galleryTmpl, sliderBtnTmpl, utils) {

    "use strict";

    /**
     *
     * @constructor
     */
    function DashboardView() {
        var self = this,
            sunRadius = 300,
            sunOptions =  utils.getSunOptions(sunRadius);
        _.extend(self, {
            $listHolder: $("#city-list"),

            galleryTmpl: _.template(galleryTmpl),

            $paginationHolder: $("#slider-control"),

            itemNamespace: "#db-", //for easily selecting dashboardItem

            $dailyHolder: ".daily",

            $controlBtnTmpl: _.template(sliderBtnTmpl),

            updateBtn: ".update__button",

            sunBlock: "#sun-block",

            sunRadius: sunRadius,

            sunOptions: sunOptions,

            sunArcBaseParams: {
                center: [sunOptions.Xc, sunOptions.Yc],
                radius: sunOptions.R
            },

            lastSunPosition: null,

            sunIsRunning: false,

            activeDashboard: null
        });
    }

    DashboardView.prototype = {

        constructor: DashboardView,

        /**
         *
         * @param cityModel
         * @returns {*}
         */

        getDataSun: function (cityModel) {
            var self = this,
                sunriseTime = cityModel.forecast.daily.data[0].sunriseTime,
                sunsetTime = cityModel.forecast.daily.data[0].sunsetTime,
                sunPosition = utils.getSunPosition(200, cityModel.updateTime, sunriseTime, sunsetTime);

            return parseFloat(cityModel.updateTime) < sunriseTime ? self.sunOptions.sunRiseDeg :
                parseFloat(cityModel.updateTime) > sunsetTime ? self.sunOptions.sunSetDeg : sunPosition;
        },

        getDataBackground: function (cityModel) {
            var temp = cityModel.forecast.currently.temperature,
                currentTime = parseFloat(cityModel.updateTime),
                sunsetTime = parseFloat(cityModel.forecast.daily.data[0].sunsetTime),
                sunriseTime = parseFloat(cityModel.forecast.daily.data[0].sunriseTime);

            if (currentTime > sunriseTime && currentTime < sunsetTime) {
                if (currentTime - sunriseTime < 7200) {
                    return temp > 20 ? "morning--hot-season" : "morning--cold-season";
                } else {
                    return temp > 20 ? "day--hot-season" : "day--cold-season";
                }
            } else {
                if (currentTime - sunsetTime < 7200 && currentTime - sunsetTime > 0) {
                    return temp > 20 ? "evening--hot-season" : "evening--cold-season";
                }
                return "night";
            }
        },

        renderCity: function (cityModel, settings) {
            var self = this,
                model = _.clone(cityModel, true);

            _.extend(model, utils.lodashHelper);

            _.extend(model, settings);

            return self.galleryTmpl(model);
        },

        renderPagination: function (cityModel, idx) {
            var self = this;
            return self.$controlBtnTmpl({
                uid: cityModel.uid,
                dataSlider: idx,
                dataSun: self.getDataSun(cityModel),
                dataBackground: self.getDataBackground(cityModel)
            });
        },

        addCity: function (cityModel, settings) {
            var self = this;

            self.$listHolder.append(self.renderCity(cityModel, settings));
            self.$paginationHolder.append(self.renderPagination(cityModel, self.$listHolder.children().length));
            if (self.$listHolder.children().length === 1) {
                self.moveToSlide(1);
            }
            $(self.itemNamespace + cityModel.uid).find(".hourly").perfectScrollbar();
        },

        updateCity: function (cityModel, settings) {
            var self = this;

            //update forecast data
            $(self.itemNamespace + cityModel.uid)
                .html($(self.renderCity(cityModel, settings)).html())
                .find(".hourly").perfectScrollbar();

            //update pagination
            $("[data-city-slider="+ cityModel.uid +"]")
                .attr("data-background", self.getDataBackground(cityModel))
                .attr("data-sun-position", self.getDataSun(cityModel));

            self.moveToSlide(self.activeDashboard);
        },

        /**
         *
         * @param collection
         * @param settings
         */

        addCities: function (collection, settings) {
            var self = this,
                htmlCity = [],
                htmlPagination = [];

            _.each(collection, function (el, idx) {
                htmlCity.push(self.renderCity(el, settings));
                htmlPagination.push(self.renderPagination(el, idx + 1));
            });

            self.$listHolder
                .html(htmlCity.join(""))
                .find(".hourly").perfectScrollbar();

            self.$paginationHolder.html(htmlPagination.join(""));
        },

        /**
         *
         * @param id
         */

        moveToSlide: function (id) {
            var self = this,
                indicator;

            id = id !== undefined ? id : self.$listHolder.children().length;

            indicator = $("[data-slider=" + id + "]");

            if (indicator.length) {
                indicator.click();
            } else {
                self.$listHolder[0].style.transform = "translateX(0)";
            }
        },

        /**
         *
         * @param uid
         */
        moveToSlideByUid: function (uid) {

            $("[data-city-slider=" + uid + "]").click();

        },

        moveNext: function () {
            var self = this;

            if (parseInt(self.activeDashboard) < self.$listHolder.children().length) {
                self.moveToSlide(parseInt(self.activeDashboard) + 1);
            } else {
                return false;
            }

        },

        moveBack: function () {
            var self = this;

            if (self.activeDashboard) {
                self.moveToSlide(parseInt(self.activeDashboard) - 1)
            }
        },

        /**
         *
         * @param collection
         */

        reloadPagination: function (collection) {
            var self = this,
                html = [];

            _.each(collection, function (cityModel, idx) {
                html.push(self.renderPagination(cityModel, idx + 1));
            });
            self.$paginationHolder.html(html);
        },

        /**
         *
         * @param selected
         */

        removeSelected: function (selected) {
            var self = this;

            _.each(selected, function (uid) {
                $(self.itemNamespace + uid).remove();
            });
        },

        /**
         *
         * @param showDays
         */
        toggleDailyDisplay: function (showDays) {
            var self = this;

            $(self.$dailyHolder).children().hide();
            $(self.$dailyHolder).children().removeClass("last-child");

            _.each($(self.$dailyHolder), function (el) {
                $(el).children(":lt(" + showDays + ")").show();
            });

            $(self.$dailyHolder).children(":nth-child(" + (showDays) + ")").addClass("last-child");
        },

        /**
         *
         * @param end
         */

        moveSunTo: function (end) {
            var self = this,
                direction,
                arcParams,
                lastSunPosition,
                currentCoords = {};

            end = parseFloat(end);

            if (!self.sunIsRunning) {
                self.sunIsRunning = true;
                lastSunPosition = self.lastSunPosition ? parseFloat(self.lastSunPosition) : parseFloat(self.sunOptions.sunRiseDeg);
            } else {
                $(self.sunBlock).stop(true, false);
                _.extend(currentCoords, {
                    top: parseFloat($(self.sunBlock).css("top")),
                    left: parseFloat($(self.sunBlock).css("left"))
                });
                lastSunPosition = utils.getCurrentPosition(currentCoords, {
                    left: self.sunOptions.Xc,
                    top: self.sunOptions.Yc
                });
            }

            direction = end > lastSunPosition ? 1 : -1;

            arcParams = _.extend({
                start: lastSunPosition,
                end: end,
                dir: direction
            }, self.sunArcBaseParams);

            $(self.sunBlock).animate({path: new $.path.arc(arcParams)}, 3000, "linear", function () {
                self.sunIsRunning = false;
                self.lastSunPosition = end;
            });
        },

        resetBackground: function () {
            $("body").attr("class", "");
            this.$listHolder.css({
                transform: "translateX(0)"
            });
            this.moveSunTo(this.sunOptions.sunRiseDeg);
        },

        initialize: function () {
            var self = this,
                hammerSwipe = new Hammer(self.$listHolder[0]);

            self.$listHolder.on("click", self.updateBtn, function () {
                var uid = $(this).attr("data-update");
                utils.EventBus.trigger("dashboard:updateRequest", uid);
            });

            hammerSwipe.on("swipe", function (event) {
                if (event.direction === 2) {
                    self.moveNext();
                } else if (event.direction === 4) {
                    self.moveBack();
                }
            });


            self.$paginationHolder.on("click", ".slider-control__item", function () {
                self.$paginationHolder
                    .find("i")
                    .removeClass("icon-active-window")
                    .addClass("icon-next-window");

                $(this)
                    .find("i")
                    .removeClass("icon-next-window")
                    .addClass("icon-active-window");

                var dataSlider = $(this).attr("data-slider"),
                    dataSun = $(this).attr("data-sun-position"),
                    dataBackground = $(this).attr("data-background"),
                    distance = (-(parseFloat(dataSlider) - 1) * 100) + "%";

                self.$listHolder.css({
                    transform: "translateX(" + distance + ")"
                });

                self.activeDashboard = dataSlider;

                $("body").attr("class", dataBackground);

                self.moveSunTo(dataSun);

                utils.EventBus.trigger("dashboardView:slideChange", dataSlider);
            });
        }

    };

    return DashboardView;
})
;