import * as diff from './parts/differences.js';
diff.differences();
import * as vid from './parts/video.js';
vid.video();
import * as forms from './parts/forms.js';
forms.forms();
import * as mainSlider from './parts/slider.js';
mainSlider.slider(document.querySelectorAll(".main-slider-item"), document.querySelectorAll(".next"), null, 1, document.querySelectorAll(".sidecontrol>a"));
document.querySelectorAll(".main-slider-item").forEach((item) => {
 item.classList.add("slideInDown");
});

import * as m1Slider from './parts/m1Slider.js';
m1Slider.m1SliderInt();
import * as m3Slider from './parts/m3Slider.js';
m3Slider.m3SliderInt();
import * as m5Slider from './parts/m5Slider.js';
m5Slider.m5SliderInt();