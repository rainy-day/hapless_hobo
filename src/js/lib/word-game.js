var Game = {};

function getFirstChar(phrase) {
	return phrase.trim().charAt(0);
};

function getLastChar(phrase) {
	phrase = phrase.trim();
	return phrase.charAt(phrase.length - 1)
};

Game.checkPhrase = function(pattern, response) {
	var patternKeyChar = getLastChar(pattern);
	var responseKeyChar = getFirstChar(response);
	return patternKeyChar === responseKeyChar;
};
module.exports = Game;