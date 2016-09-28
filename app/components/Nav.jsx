var React = require('react');
var {Link, IndexLink} = require('react-router');  //this is the same as var Link = require('react-router.link')

var Nav = React.createClass({
  onSearch: function(evt) {
    evt.preventDefault();
    var searchText = this.refs.searchText.value;
    if (searchText.length > 0) {
      this.refs.searchText.value = "";
      this.props.onSearch(searchText);
    }
  },

  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu horizontal">
              <li className="menu-text">React Weather App</li>
              <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
              <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
              <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
            </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li><input type="search" ref="searchText" placeholder="Search weather.."/></li>
              <li><input type="submit" className="button" value="Get Weather"/></li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
