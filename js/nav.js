$(function() {
    let nav_body = $("#mynav-body");
    let top_bar = $('.top_bar');
    let bottom_bar = $('.bottom_bar');
    let top_bar_dis = $('.top_bar_disabled');
    let bottom_bar_dis = $('.bottom_bar_disabled');
    $('.icon-clickable').on("click", function(){
        let disableItem = function (elem) {
            elem.animate({opacity: 0},{duration: 'slow', easing: 'swing'});
        };
        let enableItem = function (elem) {
            elem.animate({opacity: 1},{duration: 'slow', easing: 'linear'});
        };
        if (nav_body.hasClass("mynav-body-disabled")) {
            $(".mynav-body-disabled").animate(
                {
                    top: 0
                },
                {
                    duration: 'slow',
                    easing: 'swing',
                    complete: function () {
                        nav_body.removeClass("mynav-body-disabled");
                        nav_body.addClass("mynav-body-enabled");
                    }
                }
            );
            disableItem(top_bar);
            disableItem(bottom_bar);
            enableItem(top_bar_dis);
            enableItem(bottom_bar_dis);
        } else {
            $(".mynav-body-enabled").animate(
                {
                    top: -400
                },
                {
                    duration: 'slow',
                    easing: 'swing',
                    complete: function () {
                        nav_body.addClass("mynav-body-disabled");
                        nav_body.removeClass("mynav-body-enabled");
                    }
                }
            );
            enableItem(top_bar);
            enableItem(bottom_bar);
            disableItem(top_bar_dis);
            disableItem(bottom_bar_dis);
        }
    });
});
