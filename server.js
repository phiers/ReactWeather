var express = require('express');
var app = express();
const PORT = process.env.PORT || 3000;
// redirect all https traffic to http (so openWeatherMap api will work)
app.use(function(req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'http') {
    next(); //the next() function just processes the request
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});
//set app to use Public folders
app.use(express.static("public"));



//Start server
app.listen(PORT, function() {
    console.log("The express server is running on port " + PORT);
});
