/**
 * Created by Duy_Minh_Le on 1/18/2016.
 */
({
    baseUrl: ".",
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
    },
    name: "main",
    out: "main-built.js"
})