// Requires various packages, makes express app.
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var PORT = process.env.PORT || 3000;


//Connects to mongoose locally
mongoose.connect("mongodb://localhost/nytreact");

var db= mongoose.connection;
db.on('error', console.error.bind(console, 'connection failed: '));
db.once('open', function () {
  console.log("MongoDB connected")
});

//Middleware connectivity
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type:"application/vnd.api+json"
}));
app.use(express.static(__dirname + '/public/'));

//Requiresthe routes from the controller files
var routes = require("./app/controllers/controller.js");
app.use('/', routes);

app.listen(PORT, function () {
    console.log('Listening on port: ' + PORT);
});