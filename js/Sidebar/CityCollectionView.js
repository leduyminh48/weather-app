/**
 * Created by Minh on 1/7/2016.
 */
/*jslint nomen:true*/
define(["lodash",
        "jquery",
        "utils",
        "text!cityViewTmpl"],
    function (_, $, utils, cityViewTmpl) {
        "use strict";

        var CityCollectionView = function () {

            _.extend(this, {
                $menuBtn: $("#btn-menu"),

                $menu: $("#menu"),

                $upperMenu: $("#menu--upper"),

                $addBtn: $("#btn-add"),

                $deleteBtn: $("#btn-delete"),

                $listHolder: $("#added-city-list"),

                cityTemplate: _.template(cityViewTmpl),

                itemNamespace: "#sb-",

                adding: false,

                deleting: false,

                selected: []
            });
        };

        CityCollectionView.prototype = {

            constructor: CityCollectionView,

            render: function (model, settings) {
                var self = this,
                    modelCopy = _.clone(model, true);

                _.extend(modelCopy, settings);

                _.extend(modelCopy, {
                    convertToF: utils.lodashHelper.convertToF
                });

                return self.cityTemplate(modelCopy);
            },
            /**
             *
             * @param model
             * @param settings
             */
            addOne: function (model, settings) {
                var self = this;

                $(self.render(model, settings)).hide().appendTo(self.$listHolder).fadeIn(500);
                //self.$listHolder.append(self.cityTemplate(model));
            },

            /**
             *
             * @param collection
             * @param settings
             */
            addAll: function (collection, settings) {
                var self = this,
                    html = [];


                _.each(collection, function (model) {
                    html.push(self.render(model, settings));
                });

                self.$listHolder.html(html.join(""));
            },

            update: function (cityModel, settings) {
                var self = this;

                $(self.itemNamespace + cityModel.uid)
                    .html($(self.render(cityModel, settings)).html());
            },

            /**
             * add selected cities into view own array
             */
            getSelected: function () {
                var self = this;

                self.selected = [];

                _.each(self.$listHolder.find(":checked"), function (el) {

                    self.selected.push($(el).val());

                });
            },

            removeSelected: function () {
                var self = this;

                _.each(self.selected, function (uid) {
                    $(self.itemNamespace + uid).remove();
                });
            },

            /**
             * toggle Button style corresponding to flag
             */
            toggleBtnStyle: function () {
                var self = this;
                self.$addBtn.toggleClass("selecting", self.adding);
                self.$deleteBtn.toggleClass("selecting", self.deleting);
                if (self.adding) {

                    self.$deleteBtn.toggleClass("has-selected", !!self.selected.length);

                } else if (self.deleting) {

                    self.$addBtn.toggleClass("has-selected", !!self.selected.length);

                } else {

                    self.$deleteBtn.toggleClass("has-selected", !!self.selected.length);
                    self.$addBtn.toggleClass("has-selected", !!self.selected.length);

                }
            },

            /**
             * toggle menu style corresponding to flag
             */

            toggleMenuStyle: function () {
                var self = this;

                self.$menu.toggleClass("menu--suggest", self.adding);
                self.$menu.toggleClass("menu--delete", self.deleting);
            },

            /**
             * undo selecting cities
             */
            resetSelected: function () {
                var self = this;

                self.selected = [];
                _.each(self.$listHolder.find("input[type='checkbox']"), function (el) {

                    $(el).attr("checked", false);

                });
            },

            initialize: function () {
                var self = this;

                self.$menuBtn.on("click", function (e) {

                    e.preventDefault();
                    self.$menu.toggleClass("menu--open");

                });

                self.$addBtn.on("click", function () {
                    if (!self.adding && !self.deleting) {

                        self.adding = true;
                        utils.EventBus.trigger("addCityMode:on");

                    } else if (self.deleting) { //if deleting, click on addBtn will confirm selection

                        self.deleting = false;

                        if (self.selected.length) {

                            self.getSelected();
                            self.removeSelected();
                            utils.EventBus.trigger("cityCollectionView:remove", self.selected);
                            self.resetSelected();

                        } else {

                            self.adding = true;
                            utils.EventBus.trigger("addCityMode:on");

                        }
                    } else if (self.adding) {

                        self.adding = false;
                        self.resetSelected();
                        utils.EventBus.trigger("addCityMode:off");

                    }
                    self.toggleMenuStyle();
                    self.toggleBtnStyle();
                });

                self.$deleteBtn.on("click", function () {

                    if (!self.adding && !self.deleting) {

                        self.deleting = true;

                    } else if (self.deleting) {

                        self.deleting = false;
                        self.resetSelected();

                    } else if (self.adding) { //if adding, click on deleteBtn will confirm selection

                        self.adding = false;
                        utils.EventBus.trigger("addCityMode:off");

                        if (self.selected.length) {

                            utils.EventBus.trigger("cityCollectionView:add", self.selected);
                            self.resetSelected();

                        } else {

                            self.deleting = true;

                        }
                    }
                    self.toggleMenuStyle();
                    self.toggleBtnStyle();
                });

                self.$listHolder.on("click", ".added-cities__item", function (event) {
                    var cityUid = $(this).attr("id").slice(3);

                    if (!self.deleting) {

                        utils.EventBus.trigger("cityCollectionViewItem:click", cityUid);

                    } else if ($(this).is(event.target)) {

                        $(this).find("input").click();

                    }
                });

                self.$listHolder.on("click", ".added-cities__item-checkbox", function () {
                    self.getSelected();
                    self.toggleBtnStyle();
                });

                self.$upperMenu.perfectScrollbar();
            }
        };

        return CityCollectionView;
    })
;