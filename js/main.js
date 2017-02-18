$(function(){
    let $jumbo = $('.jumbotron');
    let range_w = $jumbo.width();
    let range_h = $jumbo.height();
    let top_content_height = range_h + 85;
    // get value again when window resize
    $(window).resize(function(){
        range_w = $jumbo.width();
        range_h = $jumbo.height();
        top_content_height = range_h + 85;
    });
    let setBarColor = function (color) {
        $('.top_bar').css({backgroundColor: color});
        $('.bottom_bar').css({backgroundColor: color})
    };
    $(window).scroll(function () {
        if ($(window).scrollTop() > top_content_height) {
            setBarColor("#000");
        } else {
            setBarColor("#fff");
        }
    });

    let $ripple = $('.jumbotron .ripple__effect');

    if (range_w >= 768) {
        setInterval(function () {

            let x = Math.floor(Math.random() * range_w);
            let y = Math.floor(Math.random() * range_h);

            $ripple.css({
                left: x,
                top: y
            });

            if (!$ripple.hasClass('is-show')){
                $ripple.addClass('is-show');

                setTimeout(function() {
                    $ripple.removeClass('is-show');
                }, 750);
            }
        }, 1500);
    }

});
