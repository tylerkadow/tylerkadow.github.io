$(document).ready(function() {

 function checkWidth() {
    var windowWidth = $(window).width();
    if (windowWidth >= 1200) {
        $("#yellow-two").show();
        $("#yellow-three").show();
    } else {
        $("#yellow-two").hide();
        $("#yellow-three").hide();
    }
 }
 checkWidth();

 $(window).resize(checkWidth);
});


$(document).ready(function() {

 function checkWidthAgain() {
    var windowWidthtwo = $(window).width();
    if (windowWidthtwo >= 800) {
    	$("#bar-three").show();
        $("#bar-eight").show();
        $("#red-three").show();
        $("#blue-two").show();
    } else {
    	$("#bar-three").hide();
        $("#bar-eight").hide();
        $("#red-three").hide();
        $("#blue-two").hide();
    }
 }
 checkWidthAgain();

 $(window).resize(checkWidthAgain);
});