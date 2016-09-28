var React = require('react');

// var Examples = React.createClass({
//   render: function() {
//     return (
//       <h3>Examples Component</h3>
//     );
//   }
// });
// see comments at About.jsx
var Examples = ((props) => <div>
    <h3>Examples</h3>
    <p>Welcome to Examples page!</p>
    </div>);

module.exports = Examples;
