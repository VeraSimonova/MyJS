
var a = document.location.href;
var b = document.querySelector(".tabs_links .block1");
var c = document.querySelector(".tabs_links .block2");
var d = document.querySelector(".tabs_blocks .block1");
var e = document.querySelector(".tabs_blocks .block2");

if(a == "file:///E:/js/dz_tab/index.html#block2"){
	b.classList.remove("active");
	c.classList.add("active");
	d.classList.remove("active");
	e.classList.add("active");
}


