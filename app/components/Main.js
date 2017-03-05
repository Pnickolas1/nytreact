// Include React
var React = require("react");

var Main = React.createClass({

  // Here we render the function
  render: function() {

    return (
       <div className="container">
            <a href="#/Form.js" className="btn btn-primary btn-lg">Search Form</a>
        <div className="row">
          {/* This code will dump the correct Child Component */}
          {this.props.children}
        </div>
        </div>
    );
  }
});

// Export the componen back for use in other files
module.exports = Main;
