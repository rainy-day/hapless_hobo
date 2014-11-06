/** @jsx React.DOM */
var React       = require('react');
var Reflux			= require('reflux');
var Game        = require('../../lib/word-game');
var GameActions = require('../../actions/game-actions');
var GameStore   = require('../../stores/game-store');


var Question = React.createClass({
	mixins: [Reflux.ListenerMixin],
	componentDidMount: function() {
		this.listenTo(GameStore, this.someFunction)
	},
	someFunction: function(data) {
		console.log(data);
	},
	handleAnswer: function(event) {
		event.preventDefault();
		var answerValue = this.refs.answer.getDOMNode().value.trim();
		GameActions.userResponse(answerValue);
	},
  render: function() {		
		var item = "flashlight";
		return (
      <div id="phrase">
				<h1>I'm going on a trip, and I'm bringing a {item}</h1>	
				<form onSubmit={this.handleAnswer}>
					<input type="text" ref="answer" placeholder="What are you bringing?" />
				</form>
			</div>
    )
  }
});

module.exports = Question;
