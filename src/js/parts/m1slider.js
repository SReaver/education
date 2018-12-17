 import * as m1Slider from './slider.js';
 export let m1SliderInt = () => {
 	let m1SlideButtons = document.querySelectorAll(".modules__info-btns")[0].cloneNode(true),
 		m1SlideDescr = document.querySelector(".showup__content-title"),
 		m1Slides = document.querySelectorAll(".showup__content-slider .card");
 	m1SlideDescr.appendChild(m1SlideButtons);
 	m1Slider.slider(m1Slides, [m1SlideButtons.children[1]], [m1SlideButtons.children[0]], 1, null, true);
 	for (let i = 0; i < m1Slides.length; i++) {
 		m1Slides[i].href = "modules.html#" + (i + 1);
 	}
 	document.querySelector(".showup__content-slider").style.display = "flex";
 	document.querySelector(".showup__content-explore .plus").addEventListener("click", () => {
 		window.location.assign("modules.html#1");
 	});
 };