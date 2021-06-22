$('.sale__card--left').click(function(){
    $('.sale__hide__wrapper').show(400).css({"display": "flex"});
});

$('.sale__hide__exit').click(function(){
    $('.sale__hide__wrapper').hide(400)
});

$('.sale__card--middle').click(function(){
    $('.sale__hide__wrapper__two').show(400).css({"display": "flex"});
});

$('.sale__hide__exit__two').click(function(){
    $('.sale__hide__wrapper__two').hide(400)
})