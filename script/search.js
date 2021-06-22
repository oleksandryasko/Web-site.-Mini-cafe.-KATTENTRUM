document.querySelector('#input__search').oninput = function(){
    let val = this.value.trim();
    let inputSearch = document.querySelectorAll('.search__cards');
    if(val != ''){
        inputSearch.forEach(function(elem){
            
            if(elem.innerText.search(val) == -1) {
                elem.classList.add('seacrh__hide');
            }
            else{
                elem.classList.remove('cards__hide');
            }
        });
    }
    else{
        inputSearch.forEach(function(elem){
                elem.classList.add('cards__hide');
        });
    }
};

$('.search').mouseover(function(){
    $('.example').show(300);
});

$('.search').mouseout(function(){
    $('.example').hide(300);
});

