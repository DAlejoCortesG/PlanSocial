const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-izq");
const btnRight = document.querySelector("#btn-der");

slider.insertAdjacentElement('afterBegin', sliderSectionLast);

function moverDer(){
	let sliderSectionFirst = document.querySelectorAll(".slider__section") [0];
	slider.style.marginLeft = "-200%";
	slider.style.transition = "all 0.5s";
	setTimeout(function(){
		slider.style.transition = "none";
		slider.insertAdjacentElement('beforeEnd', sliderSectionFirst);
	slider.style.marginLeft = "-100%";
	}, 500);
}

function moverIzq(){
	let sliderSection = document.querySelectorAll(".slider__section");
	let sliderSectionLast = sliderSection[sliderSection.length -1];
	slider.style.marginLeft = "0";
	slider.style.transition = "all 0.5s";
	setTimeout(function(){
		slider.style.transition = "none";
		slider.insertAdjacentElement('afterBegin', sliderSectionLast);
	slider.style.marginLeft = "-100%";
	}, 500);
}

btnRight.addEventListener('click', function() {
	moverDer();/* Act on the event */
});

btnLeft.addEventListener('click', function() {
	moverIzq();/* Act on the event */
});

setInterval(function(){
	moverDer();
}, 10000);
