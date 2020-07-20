$(document).ready(function() {

	// attack is the initial attack for the pony as a hero
	// incrementAttack is how much the hero's attack goes up
	// counterAttack is the counter for the enemy ponies.

function Pony (row, visibility, ponyHealth, attack, incrementAttack, counterAttack, nameOfPony){
	this.row = row;
	this.visibility = visibility;
	this.ponyHealth = ponyHealth;
	this.attack = attack;
	this.incrementAttack = incrementAttack;
	this.counterAttack = counterAttack;
	this.nameOfPony = nameOfPony
}

var pinkie = new Pony("1",true,125,10,12,8,"Pinkie");
var rainbow = new Pony("1",true,100,10,25,5,"Rainbow");
var twilight = new Pony("1",true,150,20,5,20,"Twilight");
var muffins = new Pony("1",true,180,5,5,20,"Muffins");

	// gameOver is a boolean that shows whether the game is over or begun
	var isGameOver = false;
	var isGameBegun = false;
	// heroName and defenderName display the names of the ponies actively being played in the game
	var heroName = "";
	var defenderName = "";
	// ponyClicked tells which pony is being clicked
	var ponyClicked = "";
	// gamePausedForAnotherDefender is when the game waits for you to pick another defender
	var gamePausedForAnotherDefender = false;
	// function to update the game board
	function updateGameBoard() {
		// go through each row
		// and display the tile if it is in that row and visible
		// otherwise make it invisible
		// do this by targeting the id for that particular div
		// then implanting css display elements into that id.
		// row 1:	
		if (pinkie.row === "1" && pinkie.visibility === true) {
			$("#rowOnePinkie").css("display", "inline-block")
		} else {
			$("#rowOnePinkie").css("display", "none");
		}
		if (rainbow.row === "1" && rainbow.visibility === true) {
			$("#rowOneRainbow").css("display", "inline-block")
		} else {
			$("#rowOneRainbow").css("display", "none");
		}
		if (twilight.row === "1" && twilight.visibility === true) {
			$("#rowOneTwilight").css("display", "inline-block")
		} else {
			$("#rowOneTwilight").css("display", "none");
		}
		if (muffins.row === "1" && muffins.visibility === true) {
			$("#rowOneMuffins").css("display", "inline-block")
		} else {
			$("#rowOneMuffins").css("display", "none");
		}
		// row 2:
		if (pinkie.row === "2" && pinkie.visibility === true) {
			$("#rowTwoPinkie").css("display", "inline-block")
		} else {
			$("#rowTwoPinkie").css("display", "none");
		}
		if (rainbow.row === "2" && rainbow.visibility === true) {
			$("#rowTwoRainbow").css("display", "inline-block")
		} else {
			$("#rowTwoRainbow").css("display", "none");
		}
		if (twilight.row === "2" && twilight.visibility === true) {
			$("#rowTwoTwilight").css("display", "inline-block")
		} else {
			$("#rowTwoTwilight").css("display", "none");
		}
		if (muffins.row === "2" && muffins.visibility === true) {
			$("#rowTwoMuffins").css("display", "inline-block")
		} else {
			$("#rowTwoMuffins").css("display", "none");
		}
		// row 3:
		if (pinkie.row === "3" && pinkie.visibility === true) {
			$("#rowThreePinkie").css("display", "inline-block")
		} else {
			$("#rowThreePinkie").css("display", "none");
		}
		if (rainbow.row === "3" && rainbow.visibility === true) {
			$("#rowThreeRainbow").css("display", "inline-block")
		} else {
			$("#rowThreeRainbow").css("display", "none");
		}
		if (twilight.row === "3" && twilight.visibility === true) {
			$("#rowThreeTwilight").css("display", "inline-block")
		} else {
			$("#rowThreeTwilight").css("display", "none");
		}
		if (muffins.row === "3" && muffins.visibility === true) {
			$("#rowThreeMuffins").css("display", "inline-block")
		} else {
			$("#rowThreeMuffins").css("display", "none");
		}
		// row 4:
		if (pinkie.row === "4" && pinkie.visibility === true) {
			$("#rowFourPinkie").css("display", "inline-block")
		} else {
			$("#rowFourPinkie").css("display", "none");
		}
		if (rainbow.row === "4" && rainbow.visibility === true) {
			$("#rowFourRainbow").css("display", "inline-block")
		} else {
			$("#rowFourRainbow").css("display", "none");
		}
		if (twilight.row === "4" && twilight.visibility === true) {
			$("#rowFourTwilight").css("display", "inline-block")
		} else {
			$("#rowFourTwilight").css("display", "none");
		}
		if (muffins.row === "4" && muffins.visibility === true) {
			$("#rowFourMuffins").css("display", "inline-block")
		} else {
			$("#rowFourMuffins").css("display", "none");
		}
		// This updates the health inside the character boxes
		// .xhealth is the selector and .html is the action
		$(".pinkieHealth").html(pinkie.ponyHealth);
		$(".rainbowHealth").html(rainbow.ponyHealth);
		$(".twilightHealth").html(twilight.ponyHealth);
		$(".muffinsHealth").html(muffins.ponyHealth);
	}
	// function to select pony when tile is clicked and
	function selectpony() {
		if (heroName === "" && defenderName === "" && isGameOver === false) {
		// If we have no hero name or defender name,
			heroName = ponyClicked;
		// ponyClicked is being assigned to heroName.
			switch (heroName) {
		// If heroName is Pinkie, she becomes visible in row 2
		// Everypony else is visible in row 3
				case "Pinkie":
					pinkie.row = "2";
					rainbow.row = "3";
					twilight.row = "3";
					muffins.row = "3";
					break;
		// If heroName is Rainbow, she becomes visible in row 2
		// Everypony else is visible in row 3
				case "Rainbow":
					pinkie.row = "3";
					rainbow.row = "2";
					twilight.row = "3";
					muffins.row = "3";
					break;
		// If heroName is Twilight, she becomes visible in row 2
		// Everypony else is visible in row 3
				case "Twilight":
					pinkie.row = "3";
					rainbow.row = "3";
					twilight.row = "2";
					muffins.row = "3";
					break;
		// If heroName is Muffins, she becomes visible in row 2
		// Everypony else is visible in row 3
				case "Muffins":
					pinkie.row = "3";
					rainbow.row = "3";
					twilight.row = "3";
					muffins.row = "2";
					break;
			}
		}
	}

	// function to select defender when tile is clicked and
	// we already have a hero (heroName is not blank) but we do not have a defender
	function selectDefender() {
		if (((heroName != "" && defenderName === "") || gamePausedForAnotherDefender === true) && isGameOver === false && ponyClicked!=heroName) {
			defenderName = ponyClicked;
			switch (defenderName) {
			// When a pony is clicked to be the defender, their row assignment value becomes "4"
			// Also, the game starts and is not paused anymore for another defender
				case "Pinkie":
					pinkie.row = "4";
					isGameBegun = true;
					gamePausedForAnotherDefender = false;
					break;
				case "Rainbow":
					rainbow.row = "4";
					isGameBegun = true;
					gamePausedForAnotherDefender = false;
					break;
				case "Twilight":
					twilight.row = "4";
					isGameBegun = true;
					gamePausedForAnotherDefender = false;
					break;
				case "Muffins":
					muffins.row = "4";
					isGameBegun = true;
					gamePausedForAnotherDefender = false;
					break;
			};
			ponyClicked = "";
		}
		// At the end we call the updateGameBoard function to change
		// the row in the pony objects.
		updateGameBoard();
	}

	// function to see if pony or defender have lost
	function haveHeroOrDefenderLost() {
		if (heroName === "Pinkie" && pinkie.ponyHealth <= 0) {
			// the pony is Pinkie and her health <= 0
			// call the user pony lost function
			ponyLost();
		} else if (heroName === "Rainbow" && rainbow.ponyHealth <= 0) {
			// the pony is Rainbow and her health <= 0
			// call the user pony lost function
			ponyLost();
		} else if (heroName === "Twilight" && twilight.ponyHealth <= 0) {
			// the pony is Twilight and her health <= 0
			// call the user pony lost function
			ponyLost();
		} else if (heroName === "Muffins" && muffins.ponyHealth <= 0) {
			// the pony is Muffins and his health <= 0
			// call the user pony lost function
			ponyLost();
		} else if (defenderName === "Pinkie" && pinkie.ponyHealth <= 0) {
			// the defender is Pinkie and her health <= 0
			pinkie.visibility = false;
			if (gamePausedForAnotherDefender === false) {
				$("#updates").html("You have brought harmony back to " + defenderName + ".<br>You can choose to help another friend.");	
				$(".restoredPonyContainer1").css("display", "inline-block");
			}
			gamePausedForAnotherDefender = true;
		} else if (defenderName === "Rainbow" && rainbow.ponyHealth <= 0) {
			// the defender is Rainbow and her health <= 0
			rainbow.visibility = false;
			if (gamePausedForAnotherDefender === false) {
				$("#updates").html("You have brought harmony back to " + defenderName + ".<br>You can choose to help another friend.");
				$(".restoredPonyContainer2").css("display", "inline-block");
			}
			gamePausedForAnotherDefender = true;
		} else if (defenderName === "Twilight" && twilight.ponyHealth <= 0) {
			// the defender is Twilight and her health <= 0
			twilight.visibility = false;
			if (gamePausedForAnotherDefender === false) {
				$("#updates").html("You have brought harmony back to " + defenderName + ".<br>You can choose to help another friend.");
				$(".restoredPonyContainer3").css("display", "inline-block");
			}
			gamePausedForAnotherDefender = true;
		} else if (defenderName === "Muffins" && muffins.ponyHealth <= 0) {
			// the defender is Muffins and her health <= 0
			muffins.visibility = false;
			if (gamePausedForAnotherDefender === false) {
				$("#updates").html("You have brought harmony back to " + defenderName + ".<br>You can choose to help another friend.");
				$(".restoredPonyContainer4").css("display", "inline-block");
			}
			gamePausedForAnotherDefender = true;
		} else {
			// blank else statement, which means that nothing happens, in THIS function, if
			// nopony has been defeated.
		}
	updateGameBoard();
	}
	// function that keeps track of points during attacks
	function friendshipTracking() {
		// attack cycle of points adjustment
		// only run if game has begun and it is not over
		if (isGameBegun === true && isGameOver != true && gamePausedForAnotherDefender === false) {
			switch (heroName) {
				case "Pinkie":
					if (defenderName === "Rainbow") {
						console.log("your attack: " + pinkie.attack + " counter recd: " + rainbow.counterAttack);
						// pony health decreases by defender's counterAttack
						pinkie.ponyHealth -= rainbow.counterAttack;
						// defender health decreases by pony's attack
						rainbow.ponyHealth -= pinkie.attack;
						$("#updates").html("You attacked Discorded " + defenderName + " for " + pinkie.attack + " damage. <br>" + "Discorded " + defenderName + " attacked you for " + rainbow.counterAttack + " damage");
						// pony's attack increases by incrementAttack
						pinkie.attack += pinkie.incrementAttack;
						console.log("your attack power: " + pinkie.attack);
					} else if (defenderName === "Twilight") {
						console.log("your attack: " + pinkie.attack + " counter recd: " + twilight.counterAttack);
						// pony health decreases by defender's counterAttack
						pinkie.ponyHealth -= twilight.counterAttack;
						// defender health decreases by pony's attack
						twilight.ponyHealth -= pinkie.attack;
						$("#updates").html("You attacked Discorded " + defenderName + " for " + pinkie.attack + " damage. <br>" + "Discorded " + defenderName + " attacked you for " + twilight.counterAttack + " damage");
						// pony's attack increases by incrementAttack
						pinkie.attack += pinkie.incrementAttack;
						console.log("your attack power: " + pinkie.attack);
					} else if (defenderName === "Muffins") {
						console.log("your attack: " + pinkie.attack + " counter recd: " + muffins.counterAttack);
						// pony health decreases by defender's counterAttack
						pinkie.ponyHealth -= muffins.counterAttack
						// defender health decreases by pony's attack
						muffins.ponyHealth -= pinkie.attack;
						$("#updates").html("You attacked Discorded " + defenderName + " for " + pinkie.attack + " damage. <br>" + "Discorded " + defenderName + " attacked you for " + muffins.counterAttack + " damage");
						// pony's attack increases by incrementAttack
						pinkie.attack += pinkie.incrementAttack;
						console.log("your attack power: " + pinkie.attack);
					} else {
						console.log("error");
					}
					break;
				case "Rainbow":
					if (defenderName === "Pinkie") {
						console.log("your attack: " + rainbow.attack + " counter recd: " + pinkie.counterAttack);
						// pony health decreases by defender's counterAttack
						rainbow.ponyHealth -= pinkie.counterAttack;
						// defender health decreases by pony's attack
						pinkie.ponyHealth -= rainbow.attack;
						$("#updates").html("You attacked Discorded " + defenderName + " for " + rainbow.attack + " damage. <br>" + "Discorded " + defenderName + " attacked you for " + pinkie.counterAttack + " damage");
						// pony's attack increases by incrementAttack
						rainbow.attack += rainbow.incrementAttack;
						console.log("your attack power: " + rainbow.attack);
					} else if (defenderName === "Twilight") {
						console.log("your attack: " + rainbow.attack + " counter recd: " + twilight.counterAttack);
						// pony health decreases by defender's counterAttack
						rainbow.ponyHealth -= twilight.counterAttack;
						// defender health decreases by pony's attack
						twilight.ponyHealth -= rainbow.attack;
						$("#updates").html("You attacked Discorded " + defenderName + " for " + rainbow.attack + " damage. <br>" + "Discorded " + defenderName + " attacked you for " + twilight.counterAttack + " damage");
						// pony's attack increases by incrementAttack
						rainbow.attack += rainbow.incrementAttack;
						console.log("your attack power: " + rainbow.attack);
					} else if (defenderName === "Muffins") {
						console.log("your attack: " + rainbow.attack + " counter recd: " + muffins.counterAttack);
						// pony health decreases by defender's counterAttack
						rainbow.ponyHealth -= muffins.counterAttack;
						// defender health decreases by pony's attack
						muffins.ponyHealth -= rainbow.attack;
						$("#updates").html("You attacked Discorded " + defenderName + " for " + rainbow.attack + " damage. <br>" + "Discorded " + defenderName + " attacked you for " + muffins.counterAttack + " damage");
						// pony's attack increases by incrementAttack
						rainbow.attack += rainbow.incrementAttack;
						console.log("your attack power: " + rainbow.attack);
					} else {
						console.log("error");
					}
					break;
				case "Twilight":
					if (defenderName === "Pinkie") {
						console.log("your attack: " + twilight.attack + " counter recd: " + pinkie.counterAttack);
						// pony health decreases by defender's counterAttack
						twilight.ponyHealth -= pinkie.counterAttack;
						// defender health decreases by pony's attack
						pinkie.ponyHealth -= twilight.attack;
						$("#updates").html("You attacked Discorded " + defenderName + " for " + twilight.attack + " damage. <br>" + "Discorded " + defenderName + " attacked you for " + pinkie.counterAttack + " damage");
						// pony's attack increases by incrementAttack
						twilight.attack += twilight.incrementAttack;
						console.log("your attack power: " + twilight.attack);
					} else if (defenderName === "Rainbow") {
						console.log("your attack: " + twilight.attack + " counter recd: " + rainbow.counterAttack);
						// pony health decreases by defender's counterAttack
						twilight.ponyHealth -= rainbow.counterAttack;
						// defender health decreases by pony's attack
						rainbow.ponyHealth -= twilight.attack;
						$("#updates").html("You attacked Discorded " + defenderName + " for " + twilight.attack + " damage. <br>" + "Discorded " + defenderName + " attacked you for " + rainbow.counterAttack + " damage");
						// pony's attack increases by incrementAttack
						twilight.attack += twilight.incrementAttack;
						console.log("your attack power: " + twilight.attack);
					} else if (defenderName === "Muffins") {
						console.log("your attack: " + twilight.attack + " counter recd: " + muffins.counterAttack);
						// pony health decreases by defender's counterAttack
						twilight.ponyHealth -= muffins.counterAttack;
						// defender health decreases by pony's attack
						muffins.ponyHealth -= twilight.attack;
						$("#updates").html("You attacked Discorded " + defenderName + " for " + twilight.attack + " damage. <br>" + "Discorded " + defenderName + " attacked you for " + muffins.counterAttack + " damage");
						// pony's attack increases by incrementAttack
						twilight.attack += twilight.incrementAttack;
						console.log("your attack power: " + twilight.attack);
					} else {
						console.log("error");
					}
					break;
				case "Muffins":
					if (defenderName === "Pinkie") {
						console.log("your attack: " + muffins.attack + " counter recd: " + pinkie.counterAttack);
						// pony health decreases by defender's counterAttack
						muffins.ponyHealth -= pinkie.counterAttack;
						// defender health decreases by pony's attack
						pinkie.ponyHealth -= muffins.attack;
						$("#updates").html("You attacked Discorded " + defenderName + " for " + muffins.attack + " damage. <br>" + "Discorded " + defenderName + " attacked you for " + pinkie.counterAttack + " damage");
						// pony's attack increases by incrementAttack
						muffins.attack += muffins.incrementAttack;
						console.log("your attack power: " + muffins.attack);
					} else if (defenderName === "Rainbow") {
						console.log("your attack: " + muffins.attack + " counter recd: " + rainbow.counterAttack);
						// pony health decreases by defender's counterAttack
						muffins.ponyHealth -= rainbow.counterAttack;
						// defender health decreases by pony's attack
						rainbow.ponyHealth -= muffins.attack;
						$("#updates").html("You attacked Discorded " + defenderName + " for " + muffins.attack + " damage. <br>" + "Discorded " + defenderName + " attacked you for " + rainbow.counterAttack + " damage");
						// pony's attack increases by incrementAttack
						muffins.attack += muffins.incrementAttack;
						console.log("your attack power: " + muffins.attack);
					} else if (defenderName === "Twilight") {
						console.log("your attack: " + muffins.attack + " counter recd: " + twilight.counterAttack);
						// pony health decreases by defender's counterAttack
						muffins.ponyHealth -= twilight.counterAttack;
						// defender health decreases by pony's attack
						twilight.ponyHealth -= muffins.attack;
						$("#updates").html("You attacked Discorded " + defenderName + " for " + muffins.attack + " damage. <br>" + "Discorded " + defenderName + " attacked you for " + twilight.counterAttack + " damage");
						// pony's attack increases by incrementAttack
						muffins.attack += muffins.incrementAttack;
						console.log("your attack power: " + muffins.attack);
					} else {
						console.log("error");
					}
					break;
					updateGameBoard()
			}
			// check if pony or defender have lost
			haveHeroOrDefenderLost();
		}
		updateGameBoard();
	}

	// function to deal with loss
	function ponyLost() {
		isGameOver === true;
		$("#updates").html("Harmony was not restored to your friends. Try again.");
		$(".resetButton").css("display", "block");
	}

	// function to deal with win
	function ponyWon() {
		isGameOver === true;
		$("#updates").html("Harmony has been restored! Play again.");
		$(".resetButton").css("display", "block");
	}

	// function to play friendship button sound when game running
	// friendship button plays chime when we have pony and
	// defender and isGameBegun is true and isGameOver is false
	function playAttackSound() {
		if (isGameBegun === true && isGameOver === false && gamePausedForAnotherDefender === false) {
			var audio = new Audio("sounds/magic-chime-02.mp3");
			audio.play();
		}		
	}

	// function to see if the pony has won
	function hasPonyWon() {
		if (heroName==="Pinkie" && (rainbow.visibility===false && twilight.visibility===false && muffins.visibility===false)) {
			// pony has won if the visibility of all three other ponies is false.
			ponyWon();
		} else if (heroName==="Rainbow" && (pinkie.visibility===false && twilight.visibility===false && muffins.visibility===false)) {
			// pony has won if the visibility of all three other ponies is false.
			ponyWon();
		} else if (heroName==="Twilight" && (pinkie.visibility===false && rainbow.visibility===false && muffins.visibility===false)) {
			// pony has won if the visibility of all three other ponies is false.
			ponyWon();
		} else if (heroName==="Muffins" && (pinkie.visibility===false && rainbow.visibility===false && twilight.visibility===false)) {
			// pony has won if the visibility of all three other ponies is false.
			ponyWon();
		}
	}

	// Here is where all the functions finally get called.

	// Setup our gameboard. I noticed that if there is a little lag in the speed, all the
	// tiles show up briefly, then only the first row is visible.
	updateGameBoard();
	// This plays the My Little Pony theme once when there is no assiged value to heroName. 
	if (heroName === "") {
		var audio = new Audio("sounds/MLP-Theme.mp3");
		audio.play();
	};
	// Here is the on.click function in jQuery for the characters
	$(".pony").on("click", function() {
		
		// record what pony tile the user clicked
		// based off of value attribute on html
		// "this" is the object with the class .pony which has been clicked.
		console.log("clicked: " + $(this).attr("title"));
		ponyClicked = $(this).attr("title");
		// if we don't have a pony yet, get one
		selectpony();
		// if we don't have a defender yet, get one
		selectDefender();
		// end always by making sure game board is updated
		updateGameBoard();
	});

	// Here is the on.click function for the friendship button
	$(".friendshipButton").on("click", function() {

		// play friendship button sound when game is running
		// and the friendship button is clicked
		playAttackSound();

		// if game is paused for another defender to be picked
		// we don't want our friendship button to continuously
		// run up our main character's attack, or have it attack
		// an enemy that is not there.
		if (gamePausedForAnotherDefender === true) {
			$("#updates").html("There is nopony here to help.");
		}
		// function to adjust points during attacks
		friendshipTracking();
		// check if pony has won
		hasPonyWon();
		// end by  making sure game board is updated
		updateGameBoard();
	});

	// Refreshes page when reset button is clicked.
	$(".resetButton").on("click", function() {
		location.href=location.href;
	});

});