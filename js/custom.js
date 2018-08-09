(function ($) {

    $('document').ready(function () {
        $('.slider .owl-carousel').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            dots: false,
            animateOut: 'fadeOut',
            autoplay: false,
            autoplayTimeout: 5000,
            smartSpeed: 2000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })
    });



    // nav fixed 
    $("document").ready(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 200) {
                $('.header').addClass('fixed-top');
            } else {
                $('.header').removeClass('fixed-top');
            }
        });
    });



    /* nav scrolling */
    $(document).ready(function () {
        $('.nav-link').on('click', function (e) {
            e.preventDefault();
            var id = $(e.currentTarget).attr('href');
            var $dest = $(id);

            $('html,body').animate({
                scrollTop: ($dest.offset().top)
            }, 1000);
        });

    });


})(jQuery)
