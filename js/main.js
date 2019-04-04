$(window).load(function() {
    $(".before-after").twentytwenty({
        before_label: 'Без скинали',
        after_label: 'С скинали'
    });

    $('.before-slider').slick({
        draggable: false,
        dots: true,
        dotsClass: 'before-slider__dots',
        prevArrow: $('.arrow-left'),
        nextArrow: $('.arrow-right')

        });
    $('.menu_button').on('click', function() {
        $('.menu').toggleClass('menu_activ')
    });

    var reviews = $('.reviews');
    var reviewsTop = reviews.offset().top;
    $(window).bind('scroll', function(){
        var windowTop = $(this).scrollTop();
            if (reviewsTop < windowTop) {
                $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A80764bbb088bed2b8580d8dca9c0c6978e2245e68da4629d521ab7f0a351b5f1&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=false"></script>')
                $(window).unbind('scroll');
            }
    });

    });