var express = require('express');
var app = express();


app.use(express.static("Public"));



//Start server
app.listen(3000, function() {
    console.log("The express server is running on port 3000");
});
