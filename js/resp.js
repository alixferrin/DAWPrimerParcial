

	$(".btn-reply").on("click", function (event) { 

		if ($(".resp-text").val().trim() !== "") {
			/* Creando el container para la respuesta */
			let $nuevaRespuesta = $("<div>");
			$nuevaRespuesta.attr('class','container-fluid rep');

			/* Creando el container del poster */
			let $poster = $("<div>");
			$poster.attr('class','poster');

			/* Agregando el container poster al container de respuesta */
			$nuevaRespuesta.append($poster);

			/* Creando el username*/
			let $user = $("<span>");
			$user.attr('class','glyphicon glyphicon-user');
			$user.append(" awesomejoe");
			$poster.append($user);

			/* Creando la imagen */
			let $imagen = $("<div>");
			$imagen.attr('class','poster-info');
			let $tagImg = $("<img>");
			$tagImg.attr('src','img/joe.jpg');
			$imagen.append($tagImg);

			/* Agregando la imagen al post area */
			$poster.append($imagen);

			/* Creando el container de la respuesta */
			let $newPostArea = $("<div>");
			$newPostArea.attr('class','post-area');

			/* Obteniendo el texto del input y agregandolo al post-area */
			let $tagRespuesta = $("<p>");
			let $textoRespuesta = $(".resp-text").val();
			$tagRespuesta.text($textoRespuesta);
			$newPostArea.append($tagRespuesta);
			
			/* Agregando el post-area al container-fluid  */
			$nuevaRespuesta.append($newPostArea);

			$("#hilo").append($nuevaRespuesta);

			/* limpiando la caja de texto */
			$(".resp-text").val('');
		} else {
			alert("Ingrese su respuesta antes de enviar");
		}

		/*
		

		}
	

	
		$(".comment-input input").val("");
		*/
	}); 