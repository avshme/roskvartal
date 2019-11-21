$(document).ready(function () {
    ($('.offering-nav__item').eq(0)).toggleClass('offering-nav__item--active');
    ($('.offering-item').eq(0)).toggleClass('offering-item--active');
    
    $('.offering-nav__item').click(function () {
        var indexBtn = $('.offering-nav__item').index(this);
        $('.offering-nav__item').removeClass('offering-nav__item--active');
        $('.offering-item').removeClass('offering-item--active');
        ($('.offering-nav__item').eq(indexBtn)).toggleClass('offering-nav__item--active').hide().fadeIn("fast");
        ($('.offering-item').eq(indexBtn)).toggleClass('offering-item--active').hide().fadeIn("fast");
    });
});