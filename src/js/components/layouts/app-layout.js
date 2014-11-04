/** @jsx React.DOM */
var React = require('react');

var AppLayout = React.createClass({
  render: function() {
    return (
      <div id="app-layout">
        <div className="row">
          <div className="small-12 columns">
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
});

module.exports = AppLayout;
