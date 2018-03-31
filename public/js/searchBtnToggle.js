$(function () {
    var courseSearchSection = $('.courseSearch');
    $('.searchToggleBtn').click(function(e) {
        e.preventDefault();
        courseSearchSection.slideToggle();
    });
});