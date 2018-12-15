import * as vid from './parts/video.js';
vid.video();
import * as download from './parts/download.js';
download.download();
import * as accordeon from './parts/accordeon.js';
accordeon.accordeon();
import * as slider from './parts/slider.js';
slider.slider(document.querySelectorAll(".module"), document.querySelectorAll(".next"), document.querySelectorAll(".prev"), 1, document.querySelectorAll(".sidecontrol>a"));