let hamburger = document.querySelector(".hamburger-menu");
let navList = document.querySelector("ul");

let navHome = document.querySelector(".home a");
let navYellow = document.querySelector(".yellow a");
let navOrange = document.querySelector(".orange a");
let navRed = document.querySelector(".red a");
let navGreen = document.querySelector(".green a");


// MENU OPENMAKEN
hamburger.addEventListener("mouseover", function() {
	if (navList.style.visibility === "visible") {
		navList.style.visibility = "hidden";
	} else {
		navList.style.visibility = "visible";
	}
});

//CLICK OM KLEUREN TE VERANDEREN
// HOME 
navHome.addEventListener("click", function () {
	navList.style.visibility = "hidden"
 document.body.style.backgroundColor = "rgb(201, 196, 196)";
 });
// YELLOW 
navYellow.addEventListener("click", function () {
	navList.style.visibility = "hidden"
 document.body.style.backgroundColor = "rgb(243, 233, 87)";
});
// ORANGE
navOrange.addEventListener("click", function () {
	navList.style.visibility = "hidden"
 document.body.style.backgroundColor = "rgb(252, 155, 76)";
 });
// RED 
navRed.addEventListener("click", function () {
	navList.style.visibility = "hidden"
 document.body.style.backgroundColor = "rgb(241, 72, 72)";
 });
// GREEN
navGreen.addEventListener("click", function () {
	navList.style.visibility = "hidden"
 document.body.style.backgroundColor = "rgb(109, 231, 98)";
 });

