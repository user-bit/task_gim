document.addEventListener("DOMContentLoaded", function() {
    $('.language_block a').on('click', function () {
        $('.language_block a').removeClass('active');
        $(this).addClass('active');
    });
    $('.xs-menu').on('click', function () {
        $(this).toggleClass('active');
        $('.top_menu').toggleClass('active');
    })
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            $('.top_block').addClass('fixed_menu');
        } else {
            $('.top_block').removeClass('fixed_menu');
        }
    });
});
