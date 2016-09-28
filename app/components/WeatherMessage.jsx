var React = require('react');

//Refactored to use ES6 since this is stateless component
//No need to use React.createClass()
var WeatherMessage = (props) => {
  //Grab temp and location from parent props (from the <WeatherMessage/> element)
  var {temp, location} = props;
  return (
    <h3 className="text-center">It's {temp} degrees in {location}.</h3>
  );
}

module.exports = WeatherMessage;
