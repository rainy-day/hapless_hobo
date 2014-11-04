/** @jsx React.DOM */
var React = require('react');

var Welcome = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="small-12 columns">
          <h1>Hapless Hobo</h1>
          <p>I'm going on a trip and I'm going to bring ...you know, for kids!</p>
        </div>
      </div>
    )
  }
});

module.exports = Welcome;
