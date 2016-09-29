var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function() {
    return {
      isLoading: false
    }
  },

  handleSearch: function(location) {
    //my custom function format location for display in message
    var formatLocation = function(str) {
      return str.charAt(0).toUpperCase() + str.substring(1);
    }
    this.setState({
        isLoading : true,
        errorMessage: undefined
      });

    //lock this down to Weather by assigning var 'that'
    var that = this;

    openWeatherMap.getTemp(location).then (function (temp) {
      that.setState({
        location: formatLocation(location),
        temp: Math.round(temp),
        isLoading: false
      });
    }, function (errorMessage) {
      that.setState({
        isLoading: false,
        errorMessage: "Error"
      });
      //alert(errorMessage);
    });
  },

  render: function() {
    //grab temp and location from current state
    var {isLoading, temp, location, errorMessage} = this.state;
    //conditionally load weather message or loading message
    function renderMessage() {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp}/>;
      } else {
        //how can i clear old info if there's an error?
      }
    }

    function renderError() {
      if (typeof errorMessage === 'string') {
        return (
          <div className="callout">
          <ErrorModal/>
          <h3 className="text-center">Error fetching weather</h3>
        </div>
        );
      }
    }
    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
