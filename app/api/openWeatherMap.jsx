var axios = require('axios');
//create a variable that can't be changed
const API_KEY = '82e02fd159dd14c912ac4d3a3b0e4ff2'
const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=" + API_KEY;


module.exports = {
  getTemp: function (location) {
    //encode location to make sure it's good for URL string
    var endocodedLocation = encodeURIComponent(location);
    //build URL using ES6 query string functionality (it's between back-ticks)
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${endocodedLocation}`;
    //get data using axios library (which uses promises)
    return axios.get(requestUrl).then(function (res) {
      // first handle OWM edge cases (which won't look like errors)
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message)
      } else {
        var conditions = [];
        //get data we need on success and return it from the function
        conditions.push(res.data.main.temp);
        conditions.push(res.data.weather[0].description);
        
        return conditions;
        //return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
};
