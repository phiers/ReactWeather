var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: true
    }
  },

  handleSearch: function(location) {
    //lock this down to Weather by assigning var 'that'
    var that = this;
    //this.setState({isLoading : true}); //not sure why he set default to false just to change it
    // before anything happens, so I changed it to true.
    openWeatherMap.getTemp(location).then (function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (errorMessage) {
      that.setState({isLoading: false});
      alert(errorMessage);
    });
    // this.setState({
    //   location: location,
    //   temp: 23
    // });
  },

  render: function() {
    //grab temp and location from current state
    var {isLoading, temp, location} = this.state;
    //conditionally load weather message or loading message
    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      } else {
        return <h3>Error fetching weather</h3>
      }
    }
    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
