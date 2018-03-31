$(function () {
    $('.menuToggle').on('click mouseenter', function (e) {
        e.preventDefault();
        e.stopPropagation();
        // console.log($(this));
        $(this).addClass('actived').next().show().addClass('actived');
    });$('.menuToggle').on('mouseleave', function (e) {
        var tobj = $(this), teobj = $(e.relatedTarget);
        // console.log(teobj);
        // if ($.trim($(teobj).attr('href')) != '' && typeof ($(teobj).attr('href')) != 'undefined' && !$(teobj).hasClass('lv1Menu')) {
        //     return;
        // }
        //
        if (!($(teobj).hasClass('actived') || $(teobj).hasClass('nav-menu-2') || $(teobj).parent().hasClass('nav-menu-2'))) {
            $(tobj).removeClass('actived').next().hide().removeClass('actived');
        }

    });

    $('.nav-menu-2').on('mouseleave', function(e) {
        var tobj = $(this), teobj = $(e.relatedTarget);
        if (!$(teobj).hasClass('actived')) {
            $(tobj).removeClass('actived').hide().prev().removeClass('actived');
        }
    });



});