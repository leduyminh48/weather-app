define(["jquery",
        "lodash",
        "utils",
        "text!suggestionTmpl",
        "text!noResultTmpl",
        "autocomplete"],
    function ($, _, utils, suggestionTmpl, noResultTmpl, autocomplete) {
        "use strict";
        var SuggestionView = function () {

            _.extend(this, {
                $input: $("#searchCity"),

                $placeholder: $("#suggestion-list"),

                cityTmpl: _.template(suggestionTmpl),

                searchItem: ".added-cities__item",

                selected: []
            })

        };

        SuggestionView.prototype = {

            constructor: SuggestionView,

            getSelected: function () {
                var self = this;
                self.selected = [];
                _.each(self.$placeholder.find(":checked"), function (el) {
                    self.selected.push({
                        cityName: $(el).attr("data-city-name"),
                        placeId: $(el).attr("data-city-placeId")
                    });
                });

                return self.selected;
            },

            showNoResult: function () {
                var self = this;

                self.$placeholder.html(noResultTmpl);
            },

            render: function (suggestions) {
                var self = this;

                self.$placeholder.empty();

                if (!suggestions.length) {
                    self.showNoResult();
                    return false;
                }

                _.each(suggestions, function (model) {
                    self.$placeholder.append(self.cityTmpl(model));
                });

                self.$placeholder.find("input").on("change", function () {
                    utils.EventBus.trigger("suggestSelection:change", self.getSelected());
                });
            },

            on: function () {
                this.$input.val("");
                this.showNoResult();
                this.$input.show().focus();
            },

            off: function () {
                var self = this;
                self.$input.hide();
            },

            initialize: function () {
                var self = this;

                self.$input.on("keyup", _.debounce(function () {
                    var $input = $(this);
                    if ($input.val()) {
                        autocomplete.fetch($input.val(), self.render, self);
                    } else {
                        self.showNoResult();
                    }
                }, 100));

                self.$placeholder.on("click", self.searchItem, function (event) {
                    if ($(this).is(event.target)) {
                        $(this).find("input").click();
                    }
                });

                self.$input.hide();
            }
        };

        return SuggestionView;
    });