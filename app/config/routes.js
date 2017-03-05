//Include the react library
var react = require('react');

//include the react router module
var router = require('react-router');

//include the route component for displaying individual routes
var Route = router.Route;

//include the router component to contain al our routes
//here where we can pass in some configuration as props
var Router = router.Router;

//include the hashHistory prop to handle routing client side without a server
var hashHistory = router.hashHistory;

var IndexRoute = router.IndexRoute;

//Reference the high level components
var Main = require('../components/Main.js')
var Form = require('../components/children/Form.js')


module.exports = (
    // the high level component is the Router component
    <Router history={hashHistory}> 
        <Route path="/" component={Main} />
            <Route path="Form" component={Form} />
    </Router>

);