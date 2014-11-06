var Reflux = require('reflux');
var GameActions = require('../actions/game-actions');

var GameStore = Reflux.createStore({
  init: function () {
    this.listenTo(GameActions.userResponse, this.handleResponse);
  },
  handleResponse: function(answerValue) {
    return this.trigger("FooBar");
  }
});

module.exports = GameStore;
