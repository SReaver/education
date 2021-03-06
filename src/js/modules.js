window.addEventListener("DOMContentLoaded", function () {

 "use strict";

 let slider = require("./parts/slider.js");
 slider(document.querySelectorAll(".module"), document.querySelectorAll(".next"), document.querySelectorAll(".prev"), document.location.href.substring(document.location.href.indexOf("#") + 1), document.querySelectorAll(".sidecontrol>a"));

 document.querySelectorAll(".sidecontrol>a").forEach((item) => {
  item.addEventListener("click", () => {
   window.location.assign("index.html");
  });
 });


 let accordeon = require("./parts/accordeon.js");
 accordeon();
 let download = require("./parts/download.js");
 download();
 let video = require("./parts/video.js");
 video();
});