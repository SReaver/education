window.addEventListener("DOMContentLoaded", function () {

	"use strict";
	let diff = require("./parts/differences.js");
	diff();
	let slider = require("./parts/slider.js");
	let mSlides = document.querySelectorAll(".main-slider-item");
	mSlides.forEach((item) => {
		item.classList.add("slideInDown");
	});
	slider(mSlides, document.querySelectorAll(".next"), null, 1, document.querySelectorAll(".sidecontrol>a"));
	let forms = require("./parts/forms.js");
	forms();
	let video = require("./parts/video.js");
	video();

	let m1slider = require("./parts/slider.js");
	let m1SlideButtons = document.querySelectorAll(".modules__info-btns")[0].cloneNode(true),
		m1SlideDescr = document.querySelector(".showup__content-title"),
		m1Slides = document.querySelectorAll(".showup__content-slider .card");
	m1SlideDescr.appendChild(m1SlideButtons);
	for (let i = 0; i < m1Slides.length; i++) {
		m1Slides[i].href = "modules.html#" + (i + 1);
	}
	document.querySelector(".showup__content-slider").style.display = "flex";
	document.querySelector(".showup__content-explore .plus").addEventListener("click", () => {
		window.location.assign("modules.html#1");
	});
	m1slider(m1Slides, [m1SlideButtons.children[1]], [m1SlideButtons.children[0]], 1, null, true);

	let m3slider = require("./parts/slider.js");
	let m3Slides = document.querySelectorAll(".modules__content-slider .card"),
		prev = document.querySelectorAll(".slick-prev"),
		next = document.querySelectorAll(".slick-next");
	document.querySelector(".modules__content-slider").style.display = "flex";
	for (let i = 0; i < m3Slides.length; i++) {
		m3Slides[i].href = "modules.html#" + (i + 1);
	}
	m3slider(m3Slides, next, prev, 1, null, true, true);

	let m5slider = require("./parts/slider.js");
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
	m5slider(m5Slides, [m5SlideButtons.children[0]], [m5SlideButtons.children[1]], 1, null, null, null, true);
});