var React = require('react');

//Refactored to use ES6 since this is stateless component
//No need to use React.createClass()
var WeatherMessage = (props) => {
  //Grab temp and location from parent props (from the <WeatherMessage/> element)
  var {temp, location} = props;
  return (
    <p>It's {temp} in {location}.</p>
  );
}

module.exports = WeatherMessage;
