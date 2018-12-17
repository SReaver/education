 import * as m3Slider from './slider.js';
 export let m3SliderInt = () => {
 	let m3Slides = document.querySelectorAll(".modules__content-slider .card"),
 		prev = document.querySelectorAll(".slick-prev"),
 		next = document.querySelectorAll(".slick-next");
 	document.querySelector(".modules__content-slider").style.display = "flex";
 	for (let i = 0; i < m3Slides.length; i++) {
 		m3Slides[i].href = "modules.html#" + (i + 1);
 	}
 	m3Slider.slider(m3Slides, next, prev, 1, null, true, true);
 };