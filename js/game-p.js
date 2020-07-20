// Creating variables to hold the number of wins, losses, and guesses.
// They start at 0.
var win = 0;
var lose = 0;
var guesses = 0;
var displayGuesses = [];

// Creates an array that lists out all of the options.
var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerPick = letterChoices[Math.floor(Math.random() * letterChoices.length)];

var reset = function() {
	guesses = 0;
	displayGuesses = [];
	computerPick = letterChoices[Math.floor(Math.random() * letterChoices.length)];
};

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

// Determines which key was pressed.
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

console.log(computerPick);

//Does not let you type non-letters
//Regular exression, tests if userGuess is within A-Z.
//i makes the search case insensitive
if (userGuess.length > 1 || !/[A-Z]/i.test(userGuess)){
	alert("Please type a letter!");
}

else if (userGuess === computerPick) {
	win++;
	reset();
	alert("Congratulations! You're psychic!");
}

else {
	displayGuesses.push(userGuess);
	guesses++;
}

if (guesses === 10) {
	lose++;
	reset();
}

var html =
	"<p>wins: " + win + "</p>" +
	"<p>Letters already chosen: " + displayGuesses.join(' ') + "</p>" +
	"<p>losses: " + lose + "</p>" +
	"<p>guesses: " + guesses + "</p>" +
	"<p>guesses left: " + (10 - guesses) + "</p>";

// Set the inner HTML contents of the #game div to our html string
document.querySelector("#game").innerHTML = html;
};