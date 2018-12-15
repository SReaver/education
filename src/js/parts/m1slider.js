 import * as m1Slider from './slider.js';
 export let m1SliderInt = () => {

  let m1SlideButtons = document.querySelectorAll(".modules__info-btns")[0].cloneNode(true),
   m1SlideDescr = document.querySelector(".showup__content-title");
  m1SlideDescr.appendChild(m1SlideButtons);
  m1Slider.slider(document.querySelectorAll(".showup__content-slider .card"), [m1SlideButtons.children[1]], [m1SlideButtons.children[0]], 1);
  //console.log('document.location', document.location.href);
 }