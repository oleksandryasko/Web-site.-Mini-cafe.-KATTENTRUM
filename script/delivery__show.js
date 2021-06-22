$('.delivery__call').click(function(){
    $('.costumer__text').css({"opacity": "1"});
    $('.delivery__phone').addClass('phone__animation');
    $('.delivery__wrapper').addClass('wrapper__animation');
    $('.delivery__wrapper').addClass('show__wrapper');
    $('.delivery__wrapper').show(2000);
});

$('.nav__btn-delivery').click(function(){
    $('.delivery').css({"display": "flex"});
});

$('.delivery__exit').click(function(){
    $('.delivery').hide(400);
});

$('.footer__item').click(function(){
    $('.delivery').css({"display": "flex"});
});
