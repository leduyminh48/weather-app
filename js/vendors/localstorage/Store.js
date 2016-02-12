define(["lodash"], function (_) {
    var store;

    function Store(name) {
        var self = this;
        this._CollectionName = name;

        this._settingName = "setting_" + name;

        if (!localStorage.getItem(name)) {

            localStorage.setItem(self._CollectionName, JSON.stringify([]));
            localStorage.setItem(self._settingName, JSON.stringify({
                activeDashboard: null,
                tempUnit: "C",
                updateInterval: 15,
                showDays: 7
            }));

        }
    }

    Store.prototype = {
        constructor: Store,

        saveCollection: function (collection) {
            var self = this;

            localStorage.setItem(self._CollectionName, JSON.stringify(collection));

        },

        getCollection: function () {
            var self = this;

            return JSON.parse(localStorage.getItem(self._CollectionName));
        },

        //I know this two next method will be slower than just simply use saveCollection when changes occur to CityCollection, but I implement it anyway, because imagine if this is not localStorage but some kind of database, then these two method will help because we dont have to re-write the whole databse but just only part of it

        updateByIdx: function (idx, changesObj) {
            var self = this,
                collection = JSON.parse(localStorage.getItem(self._CollectionName));

            _.forOwn(changesObj, function (value, key) {
                collection[idx][key] = value
            });

            self.saveCollection(collection);
        },

        addCity: function (cityModel) {
            var self = this,
                collection = JSON.parse(localStorage.getItem(self._CollectionName));

            collection.push(cityModel);

            self.saveCollection(collection);
        },

        updateSetting: function (changes) {
            var self = this,
                settings = JSON.parse(localStorage.getItem(self._settingName));

            _.forOwn(changes, function (value, key) {
                settings[key] = value;
            });

            localStorage.setItem(self._settingName, JSON.stringify(settings));
        },

        getSetting: function () {
            var self = this;
            return JSON.parse(localStorage.getItem(self._settingName));

        }
    };

    return new Store("WeatherApp");
})
;