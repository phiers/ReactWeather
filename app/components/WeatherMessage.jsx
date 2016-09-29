var React = require('react');

//Refactored to use ES6 since this is stateless component
//No need to use React.createClass()
var WeatherMessage = (props) => {
  //Grab temp and location from parent props (from the <WeatherMessage/> element)
  var {temp, location, conditions} = props;
  return (
    <div className="callout">
      <h3 className="text-center">It's {temp} degrees with a {conditions} in {location}.</h3>
    </div>
  );
}

module.exports = WeatherMessage;
