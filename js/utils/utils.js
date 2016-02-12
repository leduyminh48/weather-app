define(["lodash", "backbone"], function (_, Backbone) {
    "use strict";

    function getDayFromIdx(idx) {
        var dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        return dayArr[idx];
    }

    function getMonthFromIdx(idx) {
        var monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"];

        return monthArr[idx];
    }

    function convertToDate(time) { //time: SECONDS from January 1st, 1970
        var date = new Date(parseFloat(time) * 1000);

        return getDayFromIdx(date.getDay()) + ", " + getMonthFromIdx(date.getMonth()) + " " + date.getDate();
    }

    function convertToTime(time) {
        var date = new Date(parseFloat(time) * 1000),
            hours = date.getHours(),
            minutes = date.getMinutes();

        if (hours < 10) {
            hours = "0" + hours;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return hours + ":" + minutes;
    }

    function convertToWeekday(time) {
        var date = new Date(parseFloat(time) * 1000),
            dayArr = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

        return dayArr[date.getDay()];
    }

    function convertToF(temp) {
        return (parseFloat(temp) * 1.8 + 32).toFixed(0);
    }

    function getTimeByOffset(time, offset) {
        var myOffset = -(new Date()).getTimezoneOffset() / 60,
            localTime = time + (offset - myOffset) * 3600;

        return convertToTime(localTime);
    }

    function getWindDirection(windBearing) {
        windBearing = parseFloat(windBearing);

        if ((350 <= windBearing && windBearing < 359.999) || (0 <= windBearing && windBearing < 10)) {
            return "N";
        } else if (10 <= windBearing && windBearing < 80) {
            return "NE"
        } else if (80 <= windBearing && windBearing < 100) {
            return "E";
        } else if (100 <= windBearing && windBearing < 170) {
            return "SE"
        } else if (170 <= windBearing && windBearing < 190) {
            return "S";
        } else if (190 <= windBearing && windBearing < 260) {
            return "SW"
        } else if (260 <= windBearing && windBearing < 280) {
            return "W";
        }

        return "NW";
    }

    function getSunPosition(sunRadius, currentTime, sunriseTime, sunsetTime) {
        var W = innerWidth, //browser width
            H = innerHeight, //browser height
            h = W > H ? H * 0.5 : W / 2,//highest point of the sun at noon
            R = W * W / (8 * h) + h / 2, //circle trajectory radius
            alpha = 2 * Math.acos((R - h) / R), //angle created by two furthest radius at the edge of screen
            gamma = 2 * Math.asin(sunRadius / (2 * R)), // angle created by two furthest radius at the edge of screen plus radius of the sun
            phi = alpha + 2 * gamma,
            t = (currentTime - sunriseTime) / (sunsetTime - sunriseTime), //portion between passed time from sunrise vs whole day time
            phiDeg = phi / Math.PI * 180; //convert phi to degree

        return 180 - (phiDeg * t - phiDeg / 2);
    }

    /**
     * Get static options and cache all the value to DashboardView
     * @param sunRadius
     * @returns {{Xc: number, Yc: number, R: number, sunSetDeg: number, sunRiseDeg: number}}
     */

    function getSunOptions(sunRadius) {
        var W = innerWidth, //browser width
            H = innerHeight, //browser height
            h = H * 0.5,//highest point of the sun at noon
            R = W * W / (8 * h) + h / 2, //circle trajectory radius
            Xc = W / 2 - sunRadius, //circle trajectory center X-coordinate
            Yc = H * 0.5 + R - sunRadius, //circle trajectory center Y-coordinate
            alpha = 2 * Math.acos((R - h) / R), //angle created by two furthest radius at the edge of screen
            gamma = 2 * Math.asin(sunRadius / (2 * R)), // angle created by two furthest radius at the edge of screen plus radius of the sun
            phi = alpha + 2 * gamma,
            phiDeg = phi / Math.PI * 180;

        return {
            Xc: Xc,
            Yc: Yc,
            R: R,
            sunSetDeg: 180 - phiDeg / 2, //angle at which sun set relative to SOUTH
            sunRiseDeg: 180 + phiDeg / 2 //angle at which sun rise relative to SOUTH
        }
    }

    /**
     * Return angle relative to SOUTH
     * @param currentCoords
     * @param centerCoords
     * @returns {number}
     */

    function getCurrentPosition(currentCoords, centerCoords) {
        var angle = Math.atan((centerCoords.left - currentCoords.left) / (centerCoords.top - currentCoords.top));

        return 180 + angle / Math.PI * 180;
    }

    function getMoonPhase(moonPhase) {
        if (moonPhase < 0.1 || 0.9 <= moonPhase) {
            return "empty-moon";
        } else if (0.1 <= moonPhase && moonPhase < 0.25) {
            return "young-moon";
        } else if (0.25 <= moonPhase && moonPhase < 0.45) {
            return "almost-full";
        } else if (0.45 <= moonPhase && moonPhase < 0.55) {
            return "full-moon";
        } else if (0.55 <= moonPhase && moonPhase < 0.75) {
            return "almost-old";
        } else if (0.75 <= moonPhase && moonPhase < 0.9) {
            return "old-moon";
        }
    }

    return {
        EventBus: _.extend({}, Backbone.Events),
        lodashHelper: {
            convertToDate: convertToDate,
            convertToTime: convertToTime,
            convertToWeekday: convertToWeekday,
            convertToF: convertToF,
            getTimeByOffset: getTimeByOffset,
            getWindDirection: getWindDirection,
            getMoonPhase: getMoonPhase
        },
        getSunPosition: getSunPosition,
        getSunOptions: getSunOptions,
        getCurrentPosition: getCurrentPosition
    };
});