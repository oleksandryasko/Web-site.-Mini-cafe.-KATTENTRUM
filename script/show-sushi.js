$('document').ready(function(){
    loadSushi();
});

function loadSushi() {
    $.getJSON('../sushi.json', function(data){
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

        $('.product__card').html(out);

    })
}