 import * as m5Slider from './slider.js';
 export let m5SliderInt = () => {
 	let m5Slides = document.querySelectorAll(".feed__item"),
 		m5SlideButtons = document.querySelectorAll(".modules__info-btns")[0].cloneNode(true);
 	m5Slides[0].parentNode.style.display = "flex";
 	m5Slides[0].parentNode.style.position = "relative";
 	m5SlideButtons.style.position = "absolute";
 	m5SlideButtons.style.top = 305 + "px";
 	m5Slides[0].parentNode.insertBefore(m5SlideButtons, m5Slides[0].nextSibling);
 	m5Slides.forEach((item) => {
 		item.style.transition = "none";
 	});
 	m5Slider.slider(m5Slides, [m5SlideButtons.children[0]], [m5SlideButtons.children[1]], 1, null, null, null, true);
 };