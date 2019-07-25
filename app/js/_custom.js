document.addEventListener("DOMContentLoaded", function() {
    $('.language_block a').on('click', function () {
        $('.language_block a').removeClass('active');
        $(this).addClass('active');
    });

});
