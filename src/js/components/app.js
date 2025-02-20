/** @jsx React.DOM */
var React                 = require('react');
var AppLayout             = require('./layouts/app-layout');

var Router                = require('react-router-component');
var Locations             = Router.Locations;
var Location              = Router.Location;
var NotFound              = Router.NotFound;

var Welcome = require('./welcome/index');
var Game = require('./game/question');

var APP = React.createClass({
  render: function() {
     return (
       <AppLayout >
         <Locations
          onNavigation={this.handleNavigation}>
           <Location path="/" handler={Welcome} />
           <Location path="/game" handler={Game} />
           <NotFound handler={Welcome} />
         </Locations>
       </AppLayout>
     )

  }
});

module.exports = APP;
