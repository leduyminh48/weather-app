var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

// Get a list of all the test files to include
Object.keys(window.__karma__.files).forEach(function (file) {
    if (TEST_REGEXP.test(file)) {
        // Normalize paths to RequireJS module names.
        // If you require sub-dependencies of test files to be loaded as-is (requiring file extension)
        // then do not normalize the paths
        var normalizedTestModule = file.replace(/^\/base\/|\.js$/g, '');
        allTestFiles.push(normalizedTestModule);
    }
});

require.config({
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base',

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
        utils: 'js/utils/utils',
        async: 'js/libs/requirejs-plugins/src/async',

        jquery: 'js/libs/jquery/dist/jquery.min',
        lodash: 'js/libs/lodash/lodash.min',
        underscore: 'js/libs/underscore/underscore-min',
        backbone: 'js/libs/backbone/backbone',
        text: 'js/libs/requirejs-text/text',

        autocomplete: "js/vendors/google/searchCity",
        forecast: "js/vendors/forecast/forecast",
        store: "js/vendors/localstorage/Store",
        jqueryUi: "js/libs/jquery-ui-1.11.4.custom/jquery-ui",
        perfectScrollbar: "js/libs/perfect-scrollbar/perfect-scrollbar.jquery.min",
        hammerjs: "js/libs/hammerjs/hammer",
        jqueryPath: "js/libs/jquery-path/jquery.path",

        CityCollection: "js/CityCollection/CityCollection",
        CityModel: "js/CityCollection/CityModel",

        SuggestionView: "js/Sidebar/SuggestionView",
        CityCollectionView: "js/Sidebar/CityCollectionView",
        DashboardView: "js/Dashboard/DashboardView",

        CityController: "js/CityCollection/CityController",
        SidebarController: "js/Sidebar/SidebarController",
        DashboardController: "js/Dashboard/DashboardController",

        suggestionTmpl: "js/Sidebar/templates/citySuggestion.html",
        noResultTmpl: "js/Sidebar/templates/noResult.html",
        cityViewTmpl: "js/Sidebar/templates/cityView.html",
        galleryItemTmpl: "js/Dashboard/templates/gallery.html",
        sliderbtnTmpl: "js/Dashboard/templates/sliderBtn.html",

        SettingModel: "js/Setting/SettingModel",
        SettingView: "js/Setting/SettingView",
        SettingController: "js/Setting/SettingController"
    },


    // dynamically load all test files
    deps: allTestFiles,

    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});
