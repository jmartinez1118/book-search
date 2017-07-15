
//using express
var express = require('express');

//start express engine
var app = express();

//look in the root to find my html page and serve that to the user
app.use(express.static(__dirname + '/'));

//listen up on port 3000 and serve my files from there
app.listen(process.env.PORT || 3000);