var React = require('react');

// var About = React.createClass({
//   render: function() {
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });

// Because this is presentational, and doesn't have state, you can refactor as follows:
// var About = (props) => {
//   return (
//     <h3>About Component</h3>
//   );
// };

//He didn't say so, but this is shorter, and also works
var About = ((props) =>
  <div>
    <h3>About</h3>)
    <p>Welcome to the About Page</p>
  </div>)
  ;
module.exports = About;
