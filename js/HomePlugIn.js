$(function()
{
    "use strict";
    $(window).scroll(function(){
        // window.console.log($(".navbar").height());
        // window.console.log($(window).scrollTop());
        var navbar = $(".navbar");
        $(window).scrollTop() > $(".navbar").height() ? navbar.addClass("scrolled") : navbar.removeClass("scrolled");
    });

    $('.tab-switch li').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
        // to hide first tab
        $('.tabs-section .tab-content > div').hide();
        // to show tab connect with link
        $('.' + $(this).data('class')).show();
    });

    $("#go-up").click(function(){
        "use strict";
        $("html,body").animate({scrollTop: 0}, 1000);
    });
});
