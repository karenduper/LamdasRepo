var weatherHelper = require("../lib/weatherAux.js");

module.exports.handler = function(event, context, cb) {
  weatherHelper.karenWeather(event.ciudad, function(err, data){
    cb(null, data)
  });
};
