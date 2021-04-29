//содержимое модали через id
function init(classAction, content){
	(function(){
		var divElement = document.createElement("div");
		divElement.classList.add("modal_wrap");
		divElement.innerHTML = '<button class="close">x</button><div class="modal_content"></div>';

		var divContent = divElement.querySelector(".modal_content");
		var template = document.querySelector("#" + content);

		divContent.append(template.content.cloneNode(true));
		document.querySelector("body").prepend(divElement);
	}())
	var btn = document.querySelector("." + classAction);
	var modal = document.querySelector(".modal_wrap");

	btn.onclick = function(evt){
		modal.classList.add("show");
		var close = document.querySelector(".modal_wrap.show .close");
			close.onclick = function(evt){
			modal.classList.remove("show");
		}
	}
}
//ввод контента через содержимое
/*
function init(classAction, content){
	(function(){
		var divElement = document.createElement("div");
		divElement.classList.add("modal_wrap");
		divElement.innerHTML = '<button class="close">x</button><div class="modal_content"> '+ content +' </div>';
		document.querySelector("body").prepend(divElement);
	}())
	var btn = document.querySelector("." + classAction);
	var modal = document.querySelector(".modal_wrap");

	btn.onclick = function(evt){
		modal.classList.add("show");
		var close = document.querySelector(".modal_wrap.show .close");
			close.onclick = function(evt){
			modal.classList.remove("show");
		}
	}
}
*/
// ввод контента по строке
/*
function init(classAction, content){
	(function(){
		var divElement = document.createElement("div");
		divElement.classList.add("modal_wrap");
		divElement.innerHTML = '<button class="close">x</button><div class="modal_content">содержимое модали</div>';
		document.querySelector("body").prepend(divElement);
	}())
	var btn = document.querySelector("." + classAction);
	var modal = document.querySelector(".modal_wrap");

	btn.onclick = function(evt){
		modal.classList.add("show");
		var close = document.querySelector(".modal_wrap.show .close");
			close.onclick = function(evt){
			modal.classList.remove("show");
		}
	}
}
*/