document.querySelector(".toggle").addEventListener("click", function(event){
	event.preventDefault();
	document.getElementById("header-navigation").style.width = "100%";
	document.getElementById("main-navigation").classList.toggle("fade-in");
});

document.querySelector(".close").addEventListener("click", function(event){
	event.preventDefault();
	document.getElementById("header-navigation").style.width = "0";
	document.getElementById("main-navigation").classList.toggle("fade-in");
});