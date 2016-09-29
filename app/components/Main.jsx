var React = require('react');
var Nav = require('Nav');

//refactored for => function, but used {}
var Main = (props) => {
  return (
    <div>
      <Nav />
      <div className="row">
        <div className="small-2 medium-6 large-4 columns">
          {props.children}
        </div>
      </div>

    </div>
  );
}

module.exports = Main;
