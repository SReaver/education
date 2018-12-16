export let slider = (slides, next, prev = null, slideNumber = null, firstSlide = null, opacity = null) => {
	//Main Slider
	let slideIndex = 0;
	let plusSlides = (n) => {
		slideIndex = slideIndex + n;
		showSlides(slideIndex);
	};
	let showSlides = (n) => {
		if (n > slides.length) {
			n = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}
		if (n == 1) {
			slideIndex = n;
		}
		slides.forEach((item) => {
			if (item == document.querySelectorAll(".main-slider-item")[2]) {
				document.querySelector(".hanson").style.display = "none";
			}
			//console.log(item.getElementsByTagName("*"));
			if (opacity) {
				item.querySelectorAll("*").forEach((item) => {
					if (item.nodeName == "DIV") {
						item.style.opacity = 0.4;
					}
				});
			}

			item.style.display = "none";
		});
		//slideAnimate(slides[slideIndex - 1]);
		let t = slides[slideIndex - 1];
		//t.style.display = "block";


		if (opacity) {
			t.querySelectorAll("*").forEach((d) => {
				if (d.nodeName == "DIV") {
					//console.log(d);
					d.style.opacity = 1;
				}
			});

			for (let i = slideIndex - 1; i < slideIndex + 2; i++) {



				if (i == slides.length || i == slides.length + 1) {
					continue;
				} else {
					slides[i].style.display = "block";
				}
				/*
				if (slideIndex - 1 == slides.length - 2) {
					slides[i].style.display = "block";
					//slides[1].style.display = "block";
				}
				if (slideIndex - 1 == slides.length - 1) {
					slides[i + 1].style.display = "block";
					//slides[2].style.display = "block";
				}
				*/
			}

		} else {
			t.style.display = "block";
		}



		if (slides[slideIndex - 1] == document.querySelectorAll(".main-slider-item")[2]) {
			setTimeout(() => {
				document.querySelector(".hanson").style.display = "block";
			}, 3000);
		}
	};
	if (slideNumber) {
		slideIndex = +slideNumber;
		showSlides(slideNumber);
	} else {
		slideIndex = 0;
	}
	if (firstSlide) {
		firstSlide.forEach((item) => {
			item.addEventListener("click", () => {
				showSlides(slides.length + 1);
			});
		});
	}
	//console.log(next);

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

};