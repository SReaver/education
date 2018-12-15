export let slider = (slides, next, prev = null, slideNumber = null, firstSlide = null) => {
	//Main Slider
	/* полностью рабочий код
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
	*/
	//let slider = (slides, next, prev = null, slideNumber = null, firstSlide = null) => {
	let slideIndex;
	let plusSlides = (n) => {
		slideIndex = slideIndex + n;
		showSlides(slideIndex);
	};
	let showSlides = (n) => {
		if (n > slides.length) {
			n = 1;
		}
		if (n < 1) {
			slideIndex = slides.length - 1;
		}
		if (n == 1) {
			slideIndex = n;
		}
		slides.forEach((item) => {
			// if (item == mainSlides[2]) {
			// 	hanson.style.display = "none";
			// }
			item.style.display = "none";
		});
		//slideAnimate(slides[slideIndex - 1]);
		slides[slideIndex - 1].style.display = "block";
	};
	if (slideNumber) {
		slideIndex = slideNumber;
		showSlides(slideNumber);
	} else {
		slideIndex = 1;
	}
	if (firstSlide) {
		firstSlide.forEach((item) => {
			item.addEventListener("click", () => {
				showSlides(-1);
			});
		});
	}

	next.forEach((item) => {
		item.addEventListener("click", (event) => {
			event.preventDefault();
			plusSlides(1);
		});
	});
	let currentSlide = (n) => {
		showSlides(slideIndex = n);
	};
	if (prev) {
		prev.forEach((item) => {
			item.addEventListener("click", function () {
				plusSlides(-1);
			});
		});

	}
	//};
	//slider(document.querySelectorAll(".main-slider-item"), document.querySelectorAll(".next"), null, 4, document.querySelectorAll(".sidecontrol>a"));
};