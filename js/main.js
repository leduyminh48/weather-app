/*jslint nomen:true*/
//node r.js -o build.js optimize=none
require.config({
    shim: {
        jqueryUi: ["jquery"],
        perfectScrollbar: ["jquery"],
        jqueryPath: ["jquery"],
        hammerjs: {
            exports: "Hammer"
        },
        lodash: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        }
    },

    paths: {
        utils: 'utils/utils',
        'async': 'libs/requirejs-plugins/src/async',

        jquery: 'libs/jquery/dist/jquery.min',
        lodash: 'libs/lodash/lodash.min',
        underscore: 'libs/underscore/underscore-min',
        backbone: 'libs/backbone/backbone',
        text: 'libs/requirejs-text/text',

        autocomplete: "vendors/google/searchCity",
        forecast: "vendors/forecast/forecast",
        store: "vendors/localstorage/Store",
        jqueryUi: "libs/jquery-ui-1.11.4.custom/jquery-ui",
        perfectScrollbar: "libs/perfect-scrollbar/perfect-scrollbar.jquery.min",
        hammerjs: "libs/hammerjs/hammer",
        jqueryPath: "libs/jquery-path/jquery.path",

        CityCollection: "CityCollection/CityCollection",
        CityModel: "CityCollection/CityModel",

        SuggestionView: "Sidebar/SuggestionView",
        CityCollectionView: "Sidebar/CityCollectionView",
        DashboardView: "Dashboard/DashboardView",

        CityController: "CityCollection/CityController",
        SidebarController: "Sidebar/SidebarController",
        DashboardController: "Dashboard/DashboardController",

        suggestionTmpl: "Sidebar/templates/citySuggestion.html",
        noResultTmpl: "Sidebar/templates/noResult.html",
        cityViewTmpl: "Sidebar/templates/cityView.html",
        galleryItemTmpl: "Dashboard/templates/gallery.html",
        sliderbtnTmpl: "Dashboard/templates/sliderBtn.html",


        SettingModel: "Setting/SettingModel",
        SettingView: "Setting/SettingView",
        SettingController: "Setting/SettingController"
    }
});

require(["jqueryUi",
        "perfectScrollbar",
        "jqueryPath",
        "hammerjs",
        "CityController",
        "Sidebar/SidebarController",
        "DashboardController",
        "SettingController"],

    function (jqui,
              ps,
              jqueryPath,
              hammerjs,
              cityController,
              SidebarController,
              DashboardController,
              SettingController) {

        "use strict";

        var settingController = new SettingController(),
            sidebarController = new SidebarController(),
            dashboardController = new DashboardController();

        settingController.initialize();
        sidebarController.initialize();
        dashboardController.initialize();
        cityController.initialize();

    });