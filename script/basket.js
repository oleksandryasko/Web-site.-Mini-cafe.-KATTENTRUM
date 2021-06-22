let card = {}; 
let arrCard = {};

$('document').ready(function(){
    loadGoods(); 
    chekCart(); 
});

function loadGoods() {
    $.getJSON('../product.json', function(data) { 
        arrCard = data;
        let out = '';

        for (let key in data){
            out+='<div class="sushi__card sushi__card__big">';

                out+='<div class="sushi__img sushi__img--big">';
                    out+='<img src="'+data[key].image+'">';
                out+='</div>'

                out+='<div class="sushi__card__text">';
                    out+='<div class="sushi__card__text__top">';
                        out+='<h4 class="product__title product__title--big">'+data[key] ['name']+'</h4>';
                        out+='<span class="structure structure--margin">'+data[key] ['description']+'</span>'
                        out+='<span class="price price--big">'+data[key] ['cost']+' Є</span>';
                    out+='</div>'

                    out+='<div class="sushi__card__btn card__button">';
                        out+='<button class="sushi__btn card__btn" data-art="'+key+'">'+data[key] ['button']+'</button>'
                    out+='</div>'

                out+='</div>'
            out+='</div>';
        }
        $('.block__grid').html(out);
        $('button.card__btn').on('click', addToCard);
    });
}

function addToCard(){

    $('.info--block__basket').slideDown(100);
    $('.sushi__btn').mouseover(function(){
        $('.info--block__basket').hide(300)
    })

    let articul = $(this).attr('data-art'); 
    if(card[articul] !=undefined){ 
        card[articul]++;
    }
    else{
        card[articul] = 1;
    }
    localStorage.setItem('card', JSON.stringify(card)); 
};

function chekCart(){
    if(localStorage.getItem('card') != null) {
        card = JSON.parse (localStorage.getItem('card')); 
    }
}

function showMiniCart(){
    if($.isEmptyObject(card)){
        let out = '<span class="empty__basket">Корзина пуста</span>'
        $('.mini__basket').html(out);
    }
    else{
        let out = '';
        for (let w in card){
            out+= '<div class="mini__basket__block">';
                out+= '<div class="mini__basket__btn">';
                    out+= '<button class="delete" data-art="'+w+'">X</button>';
                out+= '</div>'
    
                out+= '<img src="'+arrCard[w].image+'">';
                out+= '<h5 class="mini__basket__title">'+arrCard[w] ['name']+'</h5>'    
                out+= '<div class="mini__basket__count">'
                    out+= '<button class="minus"  data-art="'+w+'">-</button>';
                    out+= '<span class="mini__basket__num">'+card[w] +'</span>';
                    out+= '<button class="plus" data-art="'+w+'">+</button>';
                out+= '</div>' 
                out+= '<span class="mini__basket__sum">Цена: '+card[w]*arrCard[w].cost +'</span>';
            out+= '</div>'
        }
        $('.mini__basket').html(out);
        $('.plus').on('click', plusGoods);
        $('.minus').on('click', minusGoods);
        $('.delete').on('click', deleteGoods);
    }
}

function plusGoods(){
    let articul = $(this).attr('data-art'); 
    card[articul]++
    saveCardfToLS(); 
    showMiniCart();
}

function minusGoods(){
    let articul = $(this).attr('data-art');
    if(card[articul]>1){ 
        card[articul]--;
    }
    else {
        delete card[articul]; 
    }
    saveCardfToLS(); 
    showMiniCart();
}

function saveCardfToLS(){
    localStorage.setItem('card', JSON.stringify(card) );
}

function deleteGoods(){
    let articul = $(this).attr('data-art');
    delete card[articul];
    saveCardfToLS();
    showMiniCart();
}

function saveCardfToLS(){
    localStorage.setItem('card', JSON.stringify(card) );
}

$('.fa-shopping-basket').click(function(){
    showMiniCart();
    $('.mini__basket').toggle(500).css({"display": "flex"})
})