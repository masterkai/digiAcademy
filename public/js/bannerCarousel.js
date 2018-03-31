$(function () {
    $('#bannerCarousel').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 8000,
        dots: true,
    });
    if(screen.width > 768 || screen.height > 768){
        $('#bannerCarousel .banner img[data-bimg]').each(function (idx, pobj) {
            $(pobj).attr('src', $(pobj).attr('data-bimg'));
        });
    }
    $('.tabs-panel').slick({
        laztLoad: 'progressive',
        arrows: true,
        autoplay: false,
        slidesToShow: 4,
        slidesPerRow: 4,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.topCourse__panel').slick({
        laztLoad: 'progressive',
        arrows: true,
        autoplay: false,
        slidesToShow: 4,
        slidesPerRow: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.latestNews__track').slick({
        laztLoad: 'ondemand',
        arrows: true,
        autoplay: false,
        slidesToShow: 2,
        slidesPerRow: 2,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    // $('.tabs-panel').slick('slickPlay');
});