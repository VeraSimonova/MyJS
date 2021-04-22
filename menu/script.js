var burger = document.querySelector(".burger")
var menu = document.querySelector(".menu")

burger.onclick = function(evt){
	console.log(burger.classList.toggle("active"));
	menu.classList.toggle("active");
}
