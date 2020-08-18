$(document).ready(function() {

	function start () {
		$("#start").on("click", function() {
			console.log("Let's Begin!");
			$("#catch-char").css("display", "inline-block");
			$("#char").css("display", "inline-block");
			$("#char-p").css("display", "inline-block");
			$("#a").css("display", "inline-block");
			$("#b").css("display", "inline-block");
			$("#start").css("display", "none");
			$("#title").css("display", "none");
			var audio = new Audio("sounds/Pokemon.mp3");
			audio.volume = 0.2;
			audio.play();
		});
	}

	function shake () {
		$("#catch-char").css("display", "none");
		$("#catch-squirt").css("display", "none");
		$("#catch-pika").css("display", "none");
		$("#catch-snom").css("display", "none");
		$("#char-p").css("display", "none");
		$("#squirt-p").css("display", "none");
		$("#pika-p").css("display", "none");
		$("#snom-p").css("display", "none");
		$("#char").css("display", "none");
		$("#pika").css("display", "none");
		$("#squirt").css("display", "none");
		$("#snom").css("display", "none");
		$("#a").css("display", "none");
		$("#b").css("display", "none");
		$("#c").css("display", "none");
		$("#d").css("display", "none");
		$("#e").css("display", "none");
		$("#f").css("display", "none");
		$("#g").css("display", "none");
		$("#h").css("display", "none");
		$("#shake").css("display", "inline-block");

	}

	function char () {
		shake();
		setTimeout(
			function () {
				$("#shake").css("display", "none");
				$("#catch-char").css("display", "inline-block");
				$("#char").css("display", "inline-block");
				$("#char-p").css("display", "inline-block");
				$("#a").css("display", "inline-block");
				$("#b").css("display", "inline-block");
			}, 4000);
	}

	function squirt () {
		shake();
		setTimeout(
			function () {
				$("#shake").css("display", "none");
				$("#catch-squirt").css("display", "inline-block");
				$("#squirt").css("display", "inline-block");
				$("#squirt-p").css("display", "inline-block");
				$("#caught").css("display", "none");
				$("#caught1").css("display", "inline-block");
				$("#c").css("display", "inline-block");
				$("#d").css("display", "inline-block");
			}, 4000);
	}

	function pika () {
		shake();
		setTimeout(
			function () {
				$("#shake").css("display", "none");
				$("#catch-pika").css("display", "inline-block");
				$("#pika").css("display", "inline-block");
				$("#pika-p").css("display", "inline-block");
				$("#caught1").css("display", "none");
				$("#caught2").css("display", "inline-block");
				$("#e").css("display", "inline-block");
				$("#f").css("display", "inline-block");
			}, 4000);
	}

	function snom () {
		shake();
		setTimeout(
			function () {
				$("#shake").css("display", "none");
				$("#catch-snom").css("display", "inline-block");
				$("#snom").css("display", "inline-block");
				$("#snom-p").css("display", "inline-block");
				$("#caught2").css("display", "none");
				$("#caught3").css("display", "inline-block");
				$("#g").css("display", "inline-block");
				$("#h").css("display", "inline-block");
			}, 4000);
	}

	function master () {
		shake();
		setTimeout(
			function () {
				$("#shake").css("display", "none");
				$("#caught3").css("display", "none");
				$("#caught4").css("display", "inline-block");
				$("#master").css("display", "inline-block");
			}, 4000);
	}

	function a () {
		$("#a").on("click", function () {
			console.log("is it caught?");
			squirt();
			setTimeout(
				function() {
				alert("Congratulations! Charmander was caught!");
			}, 4100);
		});
	}

	function b () {
		$("#b").on("click", function () {
			console.log("is it caught?");
			char();
			setTimeout(
				function() {
				alert("Charmander broke free from the Pokeball. Try again.");
			}, 4100);
		});
	}

	function c () {
		$("#c").on("click", function () {
			console.log("is it caught?");
			squirt();
			setTimeout(
				function() {
				alert("Squirtle broke free from the Pokeball. Try again.");
			}, 4100);
		});
	}

	function d () {
		$("#d").on("click", function () {
			console.log("is it caught?");
			pika();
			setTimeout(
				function() {
				alert("Congratulations! Squirtle was caught!");
			}, 4100);
		});
	}

	function e () {
		$("#e").on("click", function () {
			console.log("is it caught?");
			pika();
			setTimeout(
				function() {
				alert("Pikachu broke free from the Pokeball. Try again.");
			}, 4100);
		});
	}

	function f () {
		$("#f").on("click", function () {
			console.log("is it caught?");
			snom();
			setTimeout(
				function() {
				alert("Congratulations! Pikachu was caught!");
			}, 4100);
		});
	}

	function g () {
		$("#g").on("click", function () {
			console.log("is it caught?");
			master();
			setTimeout(
				function() {
				alert("Congratulations! You are a Pokemon Rhythm Master!");
			}, 4100);
		});
	}

	function h () {
		$("#h").on("click", function () {
			console.log("is it caught?");
			snom();
			setTimeout(
				function() {
				alert("snom broke free from the Pokeball. Try again.");
			}, 4100);
		});
	}

	start();
	a();
	b();
	c();
	d();
	e();
	f();
	g();
	h();
});
