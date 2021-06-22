$('document').ready(function(){
    loadDrinks();
});

function loadDrinks() {
    $.getJSON('../beverages.json', function(data){
        let out = '';

        for (let key in data){
                out+='<div class="sushi__card">';

                    out+='<div class="sushi__img">';
                        out+='<img src="'+data[key].image+'">';
                    out+='</div>'
                    out+='<h4 class="product__title">'+data[key] ['name']+'</h4>'
                    out+='<span class="price">'+data[key] ['cost']+' Є</span>'

                out+='</div>';
        }

        $('.drink__cards').html(out);

    })
}