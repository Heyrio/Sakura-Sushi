
// Toggles navbar items color and size

var navItm = document.querySelectorAll("#navItm");

for(var i = 0; i<navItm.length; i++){

navItm[i].addEventListener("mouseover", function(){

	this.classList.add("navColor");

	this.addEventListener("mouseout", function(){
		this.classList.remove("navColor");
	});

});

}
