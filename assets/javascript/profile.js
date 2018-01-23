$(document).ready(function(){

function checkWidth() {
    if ($(window).width() < 641) {
        $("#portfolio").removeClass('wrapper').addClass('btn-group').addClass('btn-group-justified');
        $("#prt").removeClass('wrapper').addClass('btn-group').addClass('btn-group-vertical');
    }
    else {
        $('#portfolio').addClass('wrapper').removeClass('btn-group').removeClass('btn-group-justified');
        $("#prt").addClass('wrapper').removeClass('btn-group').removeClass('btn-group-vertical');
}

}
$(window).ready(checkWidth);
$(window).resize(checkWidth);

});