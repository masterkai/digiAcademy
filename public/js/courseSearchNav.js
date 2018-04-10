var nav = $('nav');
var searchNav = $('#courseSearchBar');
var navHeight;
var searchNavHeight;
var topOfSearchNav;

$(function () {
    navHeight = nav.innerHeight();
    searchNavHeight = searchNav.innerHeight();
    topOfSearchNav = searchNav.offset().top;

    resizeDiv();
    window.onresize = function(event) {
        resizeDiv();
    }

    function resizeDiv() {
        navHeight = nav.innerHeight();
        searchNavHeight = searchNav.innerHeight();
        topOfSearchNav = searchNav.offset().top;
        console.log('topOfSearchNav!!'+topOfSearchNav);
        console.log('searchNavHeight!!'+searchNavHeight);
        console.log('navHeight!!'+navHeight);
        fixNav();
    }

    function fixNav() {
        if($(window).scrollTop() >= (topOfSearchNav-searchNavHeight)) {
            // console.log('test!!'+topOfSearchNav);
            document.body.style.paddingTop = searchNavHeight + 'px';
            document.body.classList.add('fixed-nav');
            searchNav.css({
                // 'margin-top':navHeight+'px'
                // 'width': '100%',
                // 'background-color': 'rgba(255,255,255, .85)',
                // 'box-shadow': '0px 3px 3px rgba(0,0,0,0.15)',
                // 'position': 'fixed',
                // 'top': '0',
                // 'left': '50%',
                // 'transform': 'translateX(-50%)',
                // 'z-index': '1029',
            });
        }else {
            document.body.classList.remove('fixed-nav');
            document.body.style.paddingTop = 0;
            searchNav.css({
                'margin-top':0 +'px'
                // 'position': 'relative',
                // 'box-shadow': 'none',
            });
        }

    }


    $(window).on('scroll', fixNav);
    $(window).trigger('scroll');
});