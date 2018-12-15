import * as diff from './parts/differences.js';
diff.differences();
import * as vid from './parts/video.js';
vid.video();
import * as forms from './parts/forms.js';
forms.forms();
import * as mainSlider from './parts/slider.js';
mainSlider.slider(document.querySelectorAll(".main-slider-item"), document.querySelectorAll(".next"), null, 1, document.querySelectorAll(".sidecontrol>a"));
/*
import * as m1Slider from './parts/slider.js';
let m1SlideButtons = document.querySelectorAll(".modules__info-btns")[0].cloneNode(true),
 m1SlideDescr = document.querySelector(".showup__content-title");
m1SlideDescr.appendChild(m1SlideButtons);
m1Slider.slider(document.querySelectorAll(".showup__content-slider .card"), [m1SlideButtons.children[1]], [m1SlideButtons.children[0]], 1);
//console.log('document.location', document.location.href);
*/
import * as m1Slider from './parts/m1Slider.js';
m1Slider.m1SliderInt();