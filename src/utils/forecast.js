const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=09fef50ddeae495331a4aac132af5c1f&query=" +
    latitude +
    "," +
    longitude +
    "&units=m";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Check your Internet Connection!", undefined);
    } else if (response.body.error) {
      callback("unable to find location", undefined);
    } else {
      callback(
        undefined,
        response.body.current.weather_descriptions[0] +
          " it is " +
          response.body.current.temperature +
          " degrees outside and it feels like " +
          response.body.current.feelslike +
          " degrees out. Humidity is " +
          response.body.current.humidity
      );
    }
  });
};

module.exports = forecast;
