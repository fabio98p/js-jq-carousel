console.log("ciao ale");
//mi salvo i bottoni che usero 
var prev = $(".slider-wrapper .prev i");
var next = $(".slider-wrapper .next i");

//inizio la funzione next alla pressione del pulsante
next.click(function () {
	//inizializzo qua la variabile active 
	var imgActive = $(".images img.active");

	//se l'immagine ha la classe last vuol dire che si trova alla sua ultima foto
	if(imgActive.hasClass("last")){
		//cambio delle classi active tra l'ultima foto e la prima
		var previusActive = $(".images img.first")
		imgActive.removeClass("active");
		previusActive.addClass("active");
	}
	//altrimenti scrollera le fono normalmente con next
	else{
		//cambio delle classi active quella attuale e la successiva
		var previusActive = imgActive.next()
		imgActive.removeClass("active");
		previusActive.addClass("active");
	}
	imgActive.removeClass("active");
})

prev.click(function () {
	var imgActive = $(".images img.active");

	//se l'immagine ha la classe first vuol dire che si trova alla sua prima foto
	if(imgActive.hasClass("first")){
		//cambio delle classi active tra l'ultima foto e la prima
		var nextActive = $(".images img.last")
		imgActive.removeClass("active");
		nextActive.addClass("active");
	}
	//altrimenti scrollera le fono normalmente con prev
	else{
		//cambio delle classi active quella attuale e la precedente
		var nextActive = imgActive.prev()
		imgActive.removeClass("active");
		nextActive.addClass("active");
	}
})


