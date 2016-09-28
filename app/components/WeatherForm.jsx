var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit : function(evt) {
    evt.preventDefault();
    var location = this.refs.location.value;
    if (location.length > 0) {
      //clear input
      this.refs.location.value = "";
      //call parent function (Weather.jsx) connected to comp onSearch fx
      this.props.onSearch(location);
    }
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <input type="text" ref="location" placeholder="Enter City Name"></input>
          </div>
          <div>
            <button className="button expanded hollow">Get Weather</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
