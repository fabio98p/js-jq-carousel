console.log("ciao ale");
//mi salvo i bottoni che usero 
var prev = $(".slider-wrapper .prev i");
var next = $(".slider-wrapper .next i");

//#region per il funzionamento con le frecciette
next.click(function () {
	nextElement(".images", "img");
})
prev.click(function () {
	prevElement(".images", "img");
})
next.click(function () {
	nextElement(".nav", "i");
})
prev.click(function () {
	prevElement(".nav", "i");
})
//#endregion

function nextElement(container, child) {
	//inizializzo qua la variabile active 
	var active = $(`${container} ${child}.active`);

	//se l'immagine ha la classe last vuol dire che si trova alla sua ultima foto
	if(active.hasClass("last")){
		//cambio delle classi active tra l'ultima foto e la prima
		var previusActive = $(`${container} ${child}.first`);
		active.removeClass("active");
		previusActive.addClass("active");
	}
	//altrimenti scrollera le fono normalmente con next
	else{
		//cambio delle classi active quella attuale e la successiva
		var previusActive = active.next();
		active.removeClass("active");
		previusActive.addClass("active");
	}
}
function prevElement(container, child) {
	//inizializzo qua la variabile active 
	var active = $(`${container} ${child}.active`);

	//se l'immagine ha la classe last vuol dire che si trova alla sua prima foto
	if(active.hasClass("first")){
		//cambio delle classi active tra l'prima foto e la ultima
		var previusActive = $(`${container} ${child}.last`);
		active.removeClass("active");
		previusActive.addClass("active");
	}
	//altrimenti scrollera le fono normalmente con prev
	else{
		//cambio delle classi active quella attuale e la successiva
		var previusActive = active.prev();
		active.removeClass("active");
		previusActive.addClass("active");
	}
}