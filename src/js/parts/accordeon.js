export let accordeon = () => {
	let acc = document.querySelector(".module__info-show");
	let panel = document.createElement("div");
	panel.textContent = "This module focuses on how to leverage your local muscle and generate leads in your local community. Topics include areas to develop like: your local gym, church, favorite local restaurant or bar, etc.. Along with local business networking groups, community involvement and charity work, local businesses (lender express and lender advantage), local lunch n learns, first time homebuyer education, VA and or Reno events, and more.";
	//panel.classList.add("module__info-show");
	panel.style.cssText = "height: 0; overflow: hidden;";
	acc.parentNode.insertBefore(panel, acc.nextSibling);


	let h = 0;
	console.log("h:" + h);
	let step = () => {
		//console.log(panel.scrollHeight);
		if (h < 0 || h > 100) {
			cancelAnimationFrame(step);
		} else {
			h++;
			panel.style.height = h + "px";
			requestAnimationFrame(step);
		}
	};
	requestAnimationFrame(step);


	let anim = (item) => {
		let i = 1;

		if (!item.style.height) {
			i = -1;
		}
		setInterval(function () {
			i = i + 1;
			item.style.height = i + "px";
		}, 100);

	}

	acc.addEventListener("click", () => {
		if (panel.style.display === "block") {
			panel.style.display = "none";
		} else {
			panel.style.display = "block";
		}
		if (panel.style.height) {
			panel.style.height = null;
		} else {
			panel.style.height = panel.scrollHeight + "px";
		}
	});
	//console.log(panel.scrollHeight);
};