$(document).ready(function() {

	function formatNumber(num) {
		return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
	}

	function priceDJIA(){

		var queryURL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=DJI&outputsize=full&apikey=YPLTOTP8UB6S7C3K";
		// Creating an AJAX call for the specific topic button being clicked
		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(res) {

			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth() + 1; //January is 0!
			var yyyy = today.getFullYear();
			var hours = today.getHours();
			var minutes = today.getMinutes();
			var date;

			var yesterday = new Date();
			yesterday = (function(d){ d.setDate(d.getDate()-1); return d})(new Date);
			var ydd = yesterday.getDate();
			var ymm = yesterday.getMonth() + 1;
			var yyyyy = yesterday.getFullYear();
			var ydate

			function date() {
				if (mm<10) {
					date = yyyy+"-0"+mm+"-"+dd;
				} else	{
					date = yyyy+"-"+mm+"-"+dd;
				}
			}

			function ydate() {
				if (ymm<10) {
					ydate = yyyyy + "-0" + ymm + "-" + ydd;
				} else	{
					ydate = yyyyy + "-" + ymm + "-" + ydd;
				}
			}

			date();
			ydate();

			var price;
			var yprice;

			if (hours < 9 || (hours === 9 && minutes < 30)) {
				price = res["Time Series (Daily)"][ydate]["4. close"];
			}
			else {
				price = res["Time Series (Daily)"][date]["4. close"];
			}

			yprice = res["Time Series (Daily)"][ydate]["4. close"];

			priceDisplay = Number(price).toFixed(2);
			ypriceDisplay = Number(yprice).toFixed(2);
			change = Number(priceDisplay-ypriceDisplay).toFixed(2);

			changePercent = Number(((price-yprice)/yprice) * 100).toFixed(2);

			$("#djia-price").text(formatNumber(priceDisplay));
			
			if (change > 0) {
				$("#djia-change").text("+ " + change);
				$("#djia-percent").text("+ " + changePercent + "%");
				$("#dow").addClass("green");
				$("#dow").removeClass("red");
			}
			else if (change < 0) {
				$("#djia-change").text(change);
				$("#djia-percent").text(changePercent + "%");
				$("#dow").removeClass("green");
				$("#dow").addClass("red");
			}
			else {
				$("#djia-change").text(change);
				$("#djia-percent").text(changePercent + "%");
			}
		})
	}

		function priceIXIC(){

		var queryURL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=IXIC&outputsize=full&apikey=YPLTOTP8UB6S7C3K";
		// Creating an AJAX call for the specific topic button being clicked
		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(res) {

			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth() + 1; //January is 0!
			var yyyy = today.getFullYear();
			var hours = today.getHours();
			var minutes = today.getMinutes();
			var date;

			var yesterday = new Date();
			yesterday = (function(d){ d.setDate(d.getDate()-1); return d})(new Date);
			var ydd = yesterday.getDate();
			var ymm = yesterday.getMonth() + 1;
			var yyyyy = yesterday.getFullYear();
			var ydate

			function date() {
				if (mm<10) {
					date = yyyy+"-0"+mm+"-"+dd;
				} else	{
					date = yyyy+"-"+mm+"-"+dd;
				}
			}

			function ydate() {
				if (ymm<10) {
					ydate = yyyyy + "-0" + ymm + "-" + ydd;
				} else	{
					ydate = yyyyy + "-" + ymm + "-" + ydd;
				}
			}

			date();
			ydate();

			var price;
			var yprice;

			if (hours < 9 || (hours === 9 && minutes < 30)) {
				price = res["Time Series (Daily)"][ydate]["4. close"];
			}
			else {
				price = res["Time Series (Daily)"][date]["4. close"];
			}

			yprice = res["Time Series (Daily)"][ydate]["4. close"];

			priceDisplay = Number(price).toFixed(2);
			ypriceDisplay = Number(yprice).toFixed(2);
			change = Number(priceDisplay-ypriceDisplay).toFixed(2);

			changePercent = Number(((price-yprice)/yprice) * 100).toFixed(2);

			$("#ixic-price").text(formatNumber(priceDisplay));
			
			if (change > 0) {
				$("#ixic-change").text("+ " + change);
				$("#ixic-percent").text("+ " + changePercent + "%");
				$("#nasdaq").addClass("green");
				$("#nasdaq").removeClass("red");
			}
			else if (change < 0) {
				$("#ixic-change").text(change);
				$("#ixic-percent").text(changePercent + "%");
				$("#nasdaq").removeClass("green");
				$("#nasdaq").addClass("red");
			}
			else {
				$("#ixic-change").text(change);
				$("#ixic-percent").text(changePercent + "%");
			}
		})
	}

		function priceINX(){

		var queryURL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=INX&outputsize=full&apikey=YPLTOTP8UB6S7C3K";
		// Creating an AJAX call for the specific topic button being clicked
		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(res) {

			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth() + 1; //January is 0!
			var yyyy = today.getFullYear();
			var hours = today.getHours();
			var minutes = today.getMinutes();
			var date;

			var yesterday = new Date();
			yesterday = (function(d){ d.setDate(d.getDate()-1); return d})(new Date);
			var ydd = yesterday.getDate();
			var ymm = yesterday.getMonth() + 1;
			var yyyyy = yesterday.getFullYear();
			var ydate

			function date() {
				if (mm<10) {
					date = yyyy+"-0"+mm+"-"+dd;
				} else	{
					date = yyyy+"-"+mm+"-"+dd;
				}
			}

			function ydate() {
				if (ymm<10) {
					ydate = yyyyy + "-0" + ymm + "-" + ydd;
				} else	{
					ydate = yyyyy + "-" + ymm + "-" + ydd;
				}
			}

			date();
			ydate();

			var price;
			var yprice;

			if (hours < 9 || (hours === 9 && minutes < 30)) {
				price = res["Time Series (Daily)"][ydate]["4. close"];
			}
			else {
				price = res["Time Series (Daily)"][date]["4. close"];
			}

			yprice = res["Time Series (Daily)"][ydate]["4. close"];

			priceDisplay = Number(price).toFixed(2);
			ypriceDisplay = Number(yprice).toFixed(2);
			change = Number(priceDisplay-ypriceDisplay).toFixed(2);

			changePercent = Number(((price-yprice)/yprice) * 100).toFixed(2);

			$("#inx-price").text(formatNumber(priceDisplay));
			
			if (change > 0) {
				$("#inx-change").text("+ " + change);
				$("#inx-percent").text("+ " + changePercent + "%");
				$("#sandp").addClass("green");
				$("#sandp").removeClass("red");
			}
			else if (change < 0){
				$("#inx-change").text(change);
				$("#inx-percent").text(changePercent + "%");
				$("#sandp").removeClass("green");
				$("#sandp").addClass("red");
			}
			else {
				$("#inx-change").text(change);
				$("#inx-percent").text(changePercent + "%");
			}
		})
	}

		function priceVIX(){

		var queryURL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=VIX&outputsize=full&apikey=YPLTOTP8UB6S7C3K";
		// Creating an AJAX call for the specific topic button being clicked
		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(res) {

			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth() + 1; //January is 0!
			var yyyy = today.getFullYear();
			var hours = today.getHours();
			var minutes = today.getMinutes();
			var date;

			var yesterday = new Date();
			yesterday = (function(d){ d.setDate(d.getDate()-1); return d})(new Date);
			var ydd = yesterday.getDate();
			var ymm = yesterday.getMonth() + 1;
			var yyyyy = yesterday.getFullYear();
			var ydate;

			function date() {
				if (mm<10) {
					date = yyyy+"-0"+mm+"-"+dd;
				} else	{
					date = yyyy+"-"+mm+"-"+dd;
				}
			}

			function ydate() {
				if (ymm<10) {
					ydate = yyyyy + "-0" + ymm + "-" + ydd;
				} else	{
					ydate = yyyyy + "-" + ymm + "-" + ydd;
				}
			}

			date();
			ydate();

			var price;
			var yprice;

			if (hours < 9 || (hours === 9 && minutes < 30)) {
				price = res["Time Series (Daily)"][ydate]["4. close"];
			}
			else {
				price = res["Time Series (Daily)"][date]["4. close"];
			}

			yprice = res["Time Series (Daily)"][ydate]["4. close"];

			priceDisplay = Number(price).toFixed(2);
			ypriceDisplay = Number(yprice).toFixed(2);
			change = Number(priceDisplay-ypriceDisplay).toFixed(2);

			changePercent = Number(((price-yprice)/yprice) * 100).toFixed(2);

			$("#vix-price").text(formatNumber(priceDisplay));
			
			if (change > 0) {
				$("#vix-change").text("+ " + change);
				$("#vix-percent").text("+ " + changePercent + "%");
				$("#vol").addClass("green");
				$("#vol").removeClass("red");
			}
			else if (change < 0) {
				$("#vix-change").text(change);
				$("#vix-percent").text(changePercent + "%");
				$("#vol").removeClass("green");
				$("#vol").addClass("red");
			}
			else {
				$("#vix-change").text(change);
				$("#vix-percent").text(changePercent + "%");
			}
		})
	}

	priceDJIA();
	priceIXIC();
	priceINX();
	priceVIX();

	var tdy = new Date();
	hrs = tdy.getHours();
	min = tdy.getMinutes();

	if (hrs < 9 || hrs >= 16 || (hrs === 9 && min < 30)) {
		console.log("Done");
		clearInterval(window);
	}
	else {
		console.log("Refreshing");

		window.setInterval(priceDJIA, 50000);
		window.setInterval(priceIXIC, 50000);
		window.setInterval(priceINX, 50000);
		window.setInterval(priceVIX, 50000);
	}
});