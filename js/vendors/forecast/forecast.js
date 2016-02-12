define(["jquery",
  "lodash"], function () {
  var Forecast = function () {
    
    this.API_KEY = "26710c2ac7fef0b6d5e2f629dcb090c0";
    
    this.baseUrl = "https://api.forecast.io/forecast/" + this.API_KEY + "/";
    
    this.fetch = function (latLng, callback) {
      var self = this;
      $.getJSON(self.baseUrl + latLng + "?units=si&callback=?", function (data) {
        callback(data);
      })
    };
  }
  
  return new Forecast();
});