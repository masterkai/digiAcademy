$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()>150){
            $('#freetry').fadeIn();
        } else {
            $('#freetry').fadeOut();
        }
    });
    if($(window).width()<767){
        $('#tryform.collapse').removeClass('in');
        $('#tryform.collapse').addClass('out');
    } else {
        $('#tryform.collapse').removeClass('out');
        $('#tryform.collapse').addClass('in');
    }
});