

window.load(function() {

    $.getJSON("data/fechas.json", function(data) {
        $.each(data, function(key, val) {

        	var año = val["año"];
        	console.log(año);
            /*var generos = val["generos"].join(" ");
            var div = $('<div></div>');
            div.attr('class','col-lg-3 foto-artista '+generos);
            div.css('background-image','url("img/'+val["archivo"]+'")');

            var divOverlay = $('<div></div>');
            divOverlay.attr('class','overlay');

            var divText = $('<div></div>');
            divText.attr('class','text');
            divText.text(val["nombre"]);

            divOverlay.append(divText);
            div.append(divOverlay);
            
            $('#artistas').append(div);*/
        });
    });
    
});
