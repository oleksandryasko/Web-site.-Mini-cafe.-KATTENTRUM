$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnFocus: true,
        variableWidth: true,
    });
})

$(document).ready(function(){
    $('.set__slider').slick({
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1500,
        adaptiveHeigth: true,
        pauseOnFocus: true,
    });
});