var React = require('react');
var {Link} = require('react-router');

// var Examples = React.createClass({
//   render: function() {
//     return (
//       <h3>Examples Component</h3>
//     );
//   }
// });
// see comments at About.jsx
var Examples = ((props) =>
  <div>
    <h1 className="text-center page-title">Examples</h1>
    <p className="before-list">Here are a few example locations to try out:</p>
    <ol>
      <li><Link to="/?location=columbus, ohio">Columbus, OH</Link></li>
      <li><Link to="/?location=pinehurst, NC">Pinehurst, NC</Link></li>
      <li><Link to="/?location=temecula, california">Temecula, CA</Link></li>
    </ol>
  </div>
);

module.exports = Examples;
