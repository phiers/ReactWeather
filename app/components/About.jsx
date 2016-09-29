var React = require('react');

// var About = React.createClass({
//   render: function() {
//     return (
//       <h3>About Component</h3>
//     );
//   }
// });

// Because this is presentational, and doesn't have state, you can refactor as follows:
var About = (props) => {
  return (
     <div>
       <h1 className="text-center page-title">About</h1>
        <p>This React app was built using React as part of the curriculum of
          <a href="https://www.udemy.com/the-complete-react-web-app-developer-course/" target="_blank">The
            Complete React Web App Developer Course</a>.</p>
          <p>Here are some of the tools used:</p>
          <ul>
            <li><a href="https://facebook.github.io/react" target="_blank">React</a></li>
            <li><a href="https://nodejs.org/en/" target="_blank">Node.js</a></li>
            <li><a href="http://openweathermap.org" target="_blank">Open Weather Map (API)</a></li>
          </ul>
      </div>
   );
 };


module.exports = About;
