export let slider = (slides, next, prev = null, slideNumber = null, firstSlide = null, opacity = null, auto = null) => {
	//Main Slider
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
			slideIndex = slides.length;
		}
		if (n == 1) {
			slideIndex = n;
		}
		slides.forEach((item) => {
			if (item == document.querySelectorAll(".main-slider-item")[2]) {
				document.querySelector(".hanson").style.display = "none";
			}
			if (opacity) {
				item.querySelectorAll("*").forEach((item) => {
					if (item.nodeName == "DIV") {
						item.style.opacity = 0.4;
					}
				});
				if (auto) {
					item.classList.remove("card-active");
					item.children[2].style.display = "none";
				}
			}

			item.style.display = "none";
		});
		//slideAnimate(slides[slideIndex - 1]);
		let t = slides[slideIndex - 1];

		if (opacity) {
			t.querySelectorAll("*").forEach((d) => {
				if (d.nodeName == "DIV") {
					d.style.opacity = 1;
				}
			});
			if (auto) {
				t.classList.add("card-active");
				t.children[2].style.display = "block";
			}
			for (let i = slideIndex - 1; i < slideIndex + 2; i++) {
				if (i == slides.length || i == slides.length + 1) {
					continue;
				} else {
					slides[i].style.display = "block";
				}
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
	if (auto) {
		setInterval(() => {
			plusSlides(1);
		}, 4000);
	}

};