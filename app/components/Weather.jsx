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
      var arr = str.split(",");
      var cityArr = arr[0].split(" ");
      var city = "";
      var state = "";
      //handle each word in city
      for (var i = 0; i < cityArr.length; i++) {
        city += " " + cityArr[i].charAt(0).toUpperCase() + cityArr[i].substring(1);
      }
      //if no state given (or no comma), return city; else, return city, state
      if (arr.length === 1) {
        return city;
      } else if (arr[1].length === 3){
        state = arr[1].toUpperCase();
      } else {
        state = arr[1].charAt(1).toUpperCase() + arr[1].substring(2);
      }
      return city + ", " + state;
    }

    this.setState({
      //clear out location and temp so old message doesn't show
      location: undefined,
      temp: undefined,
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
        errorMessage: errorMessage.message
      });

    });
  },
  //to handle searches from other components (which switch to this one and cause mount)
  componentDidMount: function() {
    //location.query refers to the browser navigation bar
    var location = this.props.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = "#/";
    }
  },
  //to handle search box from this page (because component is already mounted)
  componentWillReceiveProps: function(newProps) {
    //location.query refers to the browser navigation bar
    var location = newProps.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = "#/";
    }
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
          <ErrorModal message={ errorMessage }/>
          <h3 className="text-center">Error fetching weather</h3>
        </div>
        );
      }
    }
    return (
      <div>
        <h1 className="text-center page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
