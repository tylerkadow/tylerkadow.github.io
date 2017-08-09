$(document).ready(function() {
	// pony objects
	// attack is the initial attack for the pony as a hero
	// incrementAttack is how much the hero's attack goes up
	// counterAttack is the counter for the enemy ponies.
	var pony1 = {
		row : "1",
		visibility : true,
		ponyHealth : 125,
		attack : 10,
		incrementAttack : 12,
		counterAttack : 8,
		nameOfPony: "Pinkie"
	};
	var pony2 = {
		row : "1",
		visibility : true,
		ponyHealth : 100,
		attack : 10,
		incrementAttack : 25,
		counterAttack : 5,
		nameOfPony: "Rainbow"
	};
	var pony3 = {
		row : "1",
		visibility : true,
		ponyHealth : 150,
		attack : 20,
		incrementAttack : 5,
		counterAttack : 20,
		nameOfPony: "Twilight"
	};
	var pony4 = {
		row : "1",
		visibility : true,
		ponyHealth : 180,
		attack : 5,
		incrementAttack : 5,
		counterAttack : 20,
		nameOfPony: "Muffins"
	};
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
		if (pony1.row === "1" && pony1.visibility === true) {
			$("#rowOnePinkie").css("display", "inline-block")
		} else {
			$("#rowOnePinkie").css("display", "none");
		}
		if (pony2.row === "1" && pony2.visibility === true) {
			$("#rowOneRainbow").css("display", "inline-block")
		} else {
			$("#rowOneRainbow").css("display", "none");
		}
		if (pony3.row === "1" && pony3.visibility === true) {
			$("#rowOneTwilight").css("display", "inline-block")
		} else {
			$("#rowOneTwilight").css("display", "none");
		}
		if (pony4.row === "1" && pony4.visibility === true) {
			$("#rowOneMuffins").css("display", "inline-block")
		} else {
			$("#rowOneMuffins").css("display", "none");
		}
		// row 2:
		if (pony1.row === "2" && pony1.visibility === true) {
			$("#rowTwoPinkie").css("display", "inline-block")
		} else {
			$("#rowTwoPinkie").css("display", "none");
		}
		if (pony2.row === "2" && pony2.visibility === true) {
			$("#rowTwoRainbow").css("display", "inline-block")
		} else {
			$("#rowTwoRainbow").css("display", "none");
		}
		if (pony3.row === "2" && pony3.visibility === true) {
			$("#rowTwoTwilight").css("display", "inline-block")
		} else {
			$("#rowTwoTwilight").css("display", "none");
		}
		if (pony4.row === "2" && pony4.visibility === true) {
			$("#rowTwoMuffins").css("display", "inline-block")
		} else {
			$("#rowTwoMuffins").css("display", "none");
		}
		// row 3:
		if (pony1.row === "3" && pony1.visibility === true) {
			$("#rowThreePinkie").css("display", "inline-block")
		} else {
			$("#rowThreePinkie").css("display", "none");
		}
		if (pony2.row === "3" && pony2.visibility === true) {
			$("#rowThreeRainbow").css("display", "inline-block")
		} else {
			$("#rowThreeRainbow").css("display", "none");
		}
		if (pony3.row === "3" && pony3.visibility === true) {
			$("#rowThreeTwilight").css("display", "inline-block")
		} else {
			$("#rowThreeTwilight").css("display", "none");
		}
		if (pony4.row === "3" && pony4.visibility === true) {
			$("#rowThreeMuffins").css("display", "inline-block")
		} else {
			$("#rowThreeMuffins").css("display", "none");
		}
		// row 4:
		if (pony1.row === "4" && pony1.visibility === true) {
			$("#rowFourPinkie").css("display", "inline-block")
		} else {
			$("#rowFourPinkie").css("display", "none");
		}
		if (pony2.row === "4" && pony2.visibility === true) {
			$("#rowFourRainbow").css("display", "inline-block")
		} else {
			$("#rowFourRainbow").css("display", "none");
		}
		if (pony3.row === "4" && pony3.visibility === true) {
			$("#rowFourTwilight").css("display", "inline-block")
		} else {
			$("#rowFourTwilight").css("display", "none");
		}
		if (pony4.row === "4" && pony4.visibility === true) {
			$("#rowFourMuffins").css("display", "inline-block")
		} else {
			$("#rowFourMuffins").css("display", "none");
		}
		// This updates the health inside the character boxes
		// .xhealth is the selector and .html is the action
		$(".pinkieHealth").html(pony1.ponyHealth);
		$(".rainbowHealth").html(pony2.ponyHealth);
		$(".twilightHealth").html(pony3.ponyHealth);
		$(".muffinsHealth").html(pony4.ponyHealth);
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
					pony1.row = "2";
					pony2.row = "3";
					pony3.row = "3";
					pony4.row = "3";
					break;
		// If heroName is Rainbow, she becomes visible in row 2
		// Everypony else is visible in row 3
				case "Rainbow":
					pony1.row = "3";
					pony2.row = "2";
					pony3.row = "3";
					pony4.row = "3";
					break;
		// If heroName is Twilight, she becomes visible in row 2
		// Everypony else is visible in row 3
				case "Twilight":
					pony1.row = "3";
					pony2.row = "3";
					pony3.row = "2";
					pony4.row = "3";
					break;
		// If heroName is Muffins, she becomes visible in row 2
		// Everypony else is visible in row 3
				case "Muffins":
					pony1.row = "3";
					pony2.row = "3";
					pony3.row = "3";
					pony4.row = "2";
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
					pony1.row = "4";
					isGameBegun = true;
					gamePausedForAnotherDefender = false;
					break;
				case "Rainbow":
					pony2.row = "4";
					isGameBegun = true;
					gamePausedForAnotherDefender = false;
					break;
				case "Twilight":
					pony3.row = "4";
					isGameBegun = true;
					gamePausedForAnotherDefender = false;
					break;
				case "Muffins":
					pony4.row = "4";
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
		if (heroName === "Pinkie" && pony1.ponyHealth <= 0) {
			// the pony is Pinkie and her health <= 0
			// call the user pony lost function
			ponyLost();
		} else if (heroName === "Rainbow" && pony2.ponyHealth <= 0) {
			// the pony is Rainbow and her health <= 0
			// call the user pony lost function
			ponyLost();
		} else if (heroName === "Twilight" && pony3.ponyHealth <= 0) {
			// the pony is Twilight and her health <= 0
			// call the user pony lost function
			ponyLost();
		} else if (heroName === "Muffins" && pony4.ponyHealth <= 0) {
			// the pony is Muffins and his health <= 0
			// call the user pony lost function
			ponyLost();
		} else if (defenderName === "Pinkie" && pony1.ponyHealth <= 0) {
			// the defender is Pinkie and her health <= 0
			pony1.visibility = false;
			if (gamePausedForAnotherDefender === false) {
				$("#updates").html("You have brought harmony back to " + defenderName + ".<br>You can choose to help another friend.");	
				$(".restoredPonyContainer1").css("display", "inline-block");
			}
			gamePausedForAnotherDefender = true;
		} else if (defenderName === "Rainbow" && pony2.ponyHealth <= 0) {
			// the defender is Rainbow and her health <= 0
			pony2.visibility = false;
			if (gamePausedForAnotherDefender === false) {
				$("#updates").html("You have brought harmony back to " + defenderName + ".<br>You can choose to help another friend.");
				$(".restoredPonyContainer2").css("display", "inline-block");
			}
			gamePausedForAnotherDefender = true;
		} else if (defenderName === "Twilight" && pony3.ponyHealth <= 0) {
			// the defender is Twilight and her health <= 0
			pony3.visibility = false;
			if (gamePausedForAnotherDefender === false) {
				$("#updates").html("You have brought harmony back to " + defenderName + ".<br>You can choose to help another friend.");
				$(".restoredPonyContainer3").css("display", "inline-block");
			}
			gamePausedForAnotherDefender = true;
		} else if (defenderName === "Muffins" && pony4.ponyHealth <= 0) {
			// the defender is Muffins and her health <= 0
			pony4.visibility = false;
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
						console.log("your attack: " + pony1.attack + " counter recd: " + pony2.counterAttack);
						// pony health decreases by defender's counterAttack
						pony1.ponyHealth -= pony2.counterAttack;
						// defender health decreases by pony's attack
						pony2.ponyHealth -= pony1.attack;
						$("#updates").html("You attacked Discorded " + defenderName + " for " + pony1.attack + " damage. <br>" + "Discorded " + defenderName + " attacked you for " + pony2.counterAttack + " damage");
						// pony's attack increases by incrementAttack
						pony1.attack += pony1.incrementAttack;
						console.log("your attack power: " + pony1.attack);
					} else if (defenderName === "Twilight") {
						console.log("your attack: " + pony1.attack + " counter recd: " + pony3.counterAttack);
						// pony health decreases by defender's counterAttack
						pony1.ponyHealth -= pony3.counterAttack;
						// defender health decreases by pony's attack
						pony3.ponyHealth -= pony1.attack;
						$("#updates").html("You attacked Discorded " + defenderName + " for " + pony1.attack + " damage. <br>" + "Discorded " + defenderName + " attacked you for " + pony3.counterAttack + " damage");
						// pony's attack increases by incrementAttack
						pony1.attack += pony1.incrementAttack;
						console.log("your attack power: " + pony1.attack);
					} else if (defenderName === "Muffins") {
						console.log("your attack: " + pony1.attack + " counter recd: " + pony4.counterAttack);
						// pony health decreases by defender's counterAttack
						pony1.ponyHealth -= pony4.counterAttack
						// defender health decreases by pony's attack
						pony4.ponyHealth -= pony1.attack;
						$("#updates").html("You attacked Discorded " + defenderName + " for " + pony1.attack + " damage. <br>" + "Discorded " + defenderName + " attacked you for " + pony4.counterAttack + " damage");
						// pony's attack increases by incrementAttack
						pony1.attack += pony1.incrementAttack;
						console.log("your attack power: " + pony1.attack);
					} else {
						console.log("error");
					}
					break;
				case "Rainbow":
					if (defenderName === "Pinkie") {
						console.log("your attack: " + pony2.attack + " counter recd: " + pony1.counterAttack);
						// pony health decreases by defender's counterAttack
						pony2.ponyHealth -= pony1.counterAttack;
						// defender health decreases by pony's attack
						pony1.ponyHealth -= pony2.attack;
						$("#updates").html("You attacked Discorded " + defenderName + " for " + pony2.attack + " damage. <br>" + "Discorded " + defenderName + " attacked you for " + pony1.counterAttack + " damage");
						// pony's attack increases by incrementAttack
						pony2.attack += pony2.incrementAttack;
						console.log("your attack power: " + pony2.attack);
					} else if (defenderName === "Twilight") {
						console.log("your attack: " + pony2.attack + " counter recd: " + pony3.counterAttack);
						// pony health decreases by defender's counterAttack
						pony2.ponyHealth -= pony3.counterAttack;
						// defender health decreases by pony's attack
						pony3.ponyHealth -= pony2.attack;
						$("#updates").html("You attacked Discorded " + defenderName + " for " + pony2.attack + " damage. <br>" + "Discorded " + defenderName + " attacked you for " + pony3.counterAttack + " damage");
						// pony's attack increases by incrementAttack
						pony2.attack += pony2.incrementAttack;
						console.log("your attack power: " + pony2.attack);
					} else if (defenderName === "Muffins") {
						console.log("your attack: " + pony2.attack + " counter recd: " + pony4.counterAttack);
						// pony health decreases by defender's counterAttack
						pony2.ponyHealth -= pony4.counterAttack;
						// defender health decreases by pony's attack
						pony4.ponyHealth -= pony2.attack;
						$("#updates").html("You attacked Discorded " + defenderName + " for " + pony2.attack + " damage. <br>" + "Discorded " + defenderName + " attacked you for " + pony4.counterAttack + " damage");
						// pony's attack increases by incrementAttack
						pony2.attack += pony2.incrementAttack;
						console.log("your attack power: " + pony2.attack);
					} else {
						console.log("error");
					}
					break;
				case "Twilight":
					if (defenderName === "Pinkie") {
						console.log("your attack: " + pony3.attack + " counter recd: " + pony1.counterAttack);
						// pony health decreases by defender's counterAttack
						pony3.ponyHealth -= pony1.counterAttack;
						// defender health decreases by pony's attack
						pony1.ponyHealth -= pony3.attack;
						$("#updates").html("You attacked Discorded " + defenderName + " for " + pony3.attack + " damage. <br>" + "Discorded " + defenderName + " attacked you for " + pony1.counterAttack + " damage");
						// pony's attack increases by incrementAttack
						pony3.attack += pony3.incrementAttack;
						console.log("your attack power: " + pony3.attack);
					} else if (defenderName === "Rainbow") {
						console.log("your attack: " + pony3.attack + " counter recd: " + pony2.counterAttack);
						// pony health decreases by defender's counterAttack
						pony3.ponyHealth -= pony2.counterAttack;
						// defender health decreases by pony's attack
						pony2.ponyHealth -= pony3.attack;
						$("#updates").html("You attacked Discorded " + defenderName + " for " + pony3.attack + " damage. <br>" + "Discorded " + defenderName + " attacked you for " + pony2.counterAttack + " damage");
						// pony's attack increases by incrementAttack
						pony3.attack += pony3.incrementAttack;
						console.log("your attack power: " + pony3.attack);
					} else if (defenderName === "Muffins") {
						console.log("your attack: " + pony3.attack + " counter recd: " + pony4.counterAttack);
						// pony health decreases by defender's counterAttack
						pony3.ponyHealth -= pony4.counterAttack;
						// defender health decreases by pony's attack
						pony4.ponyHealth -= pony3.attack;
						$("#updates").html("You attacked Discorded " + defenderName + " for " + pony3.attack + " damage. <br>" + "Discorded " + defenderName + " attacked you for " + pony4.counterAttack + " damage");
						// pony's attack increases by incrementAttack
						pony3.attack += pony3.incrementAttack;
						console.log("your attack power: " + pony3.attack);
					} else {
						console.log("error");
					}
					break;
				case "Muffins":
					if (defenderName === "Pinkie") {
						console.log("your attack: " + pony4.attack + " counter recd: " + pony1.counterAttack);
						// pony health decreases by defender's counterAttack
						pony4.ponyHealth -= pony1.counterAttack;
						// defender health decreases by pony's attack
						pony1.ponyHealth -= pony4.attack;
						$("#updates").html("You attacked Discorded " + defenderName + " for " + pony4.attack + " damage. <br>" + "Discorded " + defenderName + " attacked you for " + pony1.counterAttack + " damage");
						// pony's attack increases by incrementAttack
						pony4.attack += pony4.incrementAttack;
						console.log("your attack power: " + pony4.attack);
					} else if (defenderName === "Rainbow") {
						console.log("your attack: " + pony4.attack + " counter recd: " + pony2.counterAttack);
						// pony health decreases by defender's counterAttack
						pony4.ponyHealth -= pony2.counterAttack;
						// defender health decreases by pony's attack
						pony2.ponyHealth -= pony4.attack;
						$("#updates").html("You attacked Discorded " + defenderName + " for " + pony4.attack + " damage. <br>" + "Discorded " + defenderName + " attacked you for " + pony2.counterAttack + " damage");
						// pony's attack increases by incrementAttack
						pony4.attack += pony4.incrementAttack;
						console.log("your attack power: " + pony4.attack);
					} else if (defenderName === "Twilight") {
						console.log("your attack: " + pony4.attack + " counter recd: " + pony3.counterAttack);
						// pony health decreases by defender's counterAttack
						pony4.ponyHealth -= pony3.counterAttack;
						// defender health decreases by pony's attack
						pony3.ponyHealth -= pony4.attack;
						$("#updates").html("You attacked Discorded " + defenderName + " for " + pony4.attack + " damage. <br>" + "Discorded " + defenderName + " attacked you for " + pony3.counterAttack + " damage");
						// pony's attack increases by incrementAttack
						pony4.attack += pony4.incrementAttack;
						console.log("your attack power: " + pony4.attack);
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
			var audio = new Audio("assets/sounds/magic-chime-02.mp3");
			audio.play();
		}		
	}

	// function to see if the pony has won
	function hasPonyWon() {
		if (heroName==="Pinkie" && (pony2.visibility===false && pony3.visibility===false && pony4.visibility===false)) {
			// pony has won if the visibility of all three other ponies is false.
			ponyWon();
		} else if (heroName==="Rainbow" && (pony1.visibility===false && pony3.visibility===false && pony4.visibility===false)) {
			// pony has won if the visibility of all three other ponies is false.
			ponyWon();
		} else if (heroName==="Twilight" && (pony1.visibility===false && pony2.visibility===false && pony4.visibility===false)) {
			// pony has won if the visibility of all three other ponies is false.
			ponyWon();
		} else if (heroName==="Muffins" && (pony1.visibility===false && pony2.visibility===false && pony3.visibility===false)) {
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
		var audio = new Audio("assets/sounds/MLP-Theme.mp3");
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