var config = {
    apiKey: "AIzaSyBNBzz-7fH7nNJo38uD_qfUztJ87HI0wgw",
    authDomain: "tyler-kadow-contact-page.firebaseapp.com",
    databaseURL: "https://tyler-kadow-contact-page.firebaseio.com",
    projectId: "tyler-kadow-contact-page",
    storageBucket: "tyler-kadow-contact-page.appspot.com",
    messagingSenderId: "64272477907"
  };

firebase.initializeApp(config);

var contactData = firebase.database();

$("#submit").on("click", function() {

	var email = $("#inputEmail3").val().trim();
	var message = $("#text").val().trim();

	var visitor = {
		email: email,
		message: message
	};

	contactData.ref().push(visitor);

	alert("Thank you for your interest!");

	$("#inputEmail3").val("");
	$("#text").val("");

	return false;
});