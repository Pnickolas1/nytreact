//include the main react dependencies
var React = require("react");
var ReactDOM = require("react-dom");

//Include the form component
var Form = require("./components/children/Form");
var routes = require('./config/routes.js')

//this code here allows us to render our main component
// this is the form we need to see

ReactDOM.render( Form , document.getElementById("app"));