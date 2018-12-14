export let slider = () => {
 //Main Slider
 let hanson = document.querySelector(".hanson");
 let showTeacher = () => {
  setTimeout(() => {
   hanson.style.display = "block";
  }, 3000);
 };
 let slideIndex = 1,
  mainSlides = document.querySelectorAll(".main-slider-item"),
  firstSlide = document.querySelectorAll(".sidecontrol>a"),
  nextSlide = document.querySelectorAll(".next");

 let showSlides = (n) => {
  if (n > mainSlides.length) {
   slideIndex = 1;
  }
  if (n < 1) {
   slideIndex = 1;
  }
  mainSlides.forEach((item) => {
   if (item == mainSlides[2]) {
    hanson.style.display = "none";
   }
   item.style.display = "none";
  });
  slideAnimate(mainSlides[slideIndex - 1]);
 };

 let slideAnimate = (item) => {
  item.style.display = "block";
  if (item == mainSlides[2]) {
   showTeacher();
  }
  let top = 0 - document.documentElement.clientHeight;

  let step = () => {
   if (top > -1) {
    cancelAnimationFrame(step);
   } else {
    if (top < -30) {
     top = top + 30;
    } else if (top < -10) {
     top += 10;
    } else {
     top++;
    }
    item.style.top = top + "px";
    requestAnimationFrame(step);
   }
  };
  requestAnimationFrame(step);
 };

 let plusSlides = (n) => {
  slideIndex = slideIndex + n;
  showSlides(slideIndex);
 };
 firstSlide.forEach((item) => {
  item.addEventListener("click", () => {
   showSlides(-1);
  });
 });

 nextSlide.forEach((item) => {
  item.addEventListener("click", (event) => {
   event.preventDefault();
   plusSlides(1);
  });
 });
}