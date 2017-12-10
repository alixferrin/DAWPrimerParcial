
function cargarImagenes() {

   

    $.getJSON("data/imagenes_galeria.json", function(data) {
        $.each(data, function(key, val) {
        	var titulo = val["title"];
        	var archivo = val["archivo"];
        	var tag = val["tag"];
        	var subtitle = val["data-subtitle"];
        	console.log(titulo);

        	var a_element = $("<a></a>");
        	a_element.attr("href", "img/galeria/" + archivo);
        	a_element.attr("title", titulo);
        	a_element.attr("data-subtitle", subtitle);

        	var img_element = $("<img/>");
        	img_element.attr("src", "img/galeria/" + archivo);
        	img_element.attr("alt", titulo);

        	var li_element = $("<li></li>");
        	/*li_element.attr("tag", tag);*/

        	a_element.append(img_element);

        	li_element.append(a_element);

        	$(".least-gallery").append(li_element);
            
        });
    });
}


$(document).ready(function() {

    cargarImagenes();
    
});
