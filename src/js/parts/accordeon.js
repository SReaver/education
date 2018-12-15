export let accordeon = () => {
	let acc = document.querySelectorAll(".module__info-show");
	let panel = document.createElement("div");
	panel.textContent = "This module focuses on how to leverage your local muscle and generate leads in your local community. Topics include areas to develop like: your local gym, church, favorite local restaurant or bar, etc.. Along with local business networking groups, community involvement and charity work, local businesses (lender express and lender advantage), local lunch n learns, first time homebuyer education, VA and or Reno events, and more.";
	panel.classList.add("panel");
	acc.forEach((item) => {
		item.parentNode.insertBefore(panel.cloneNode(true), item.nextSibling);
		item.addEventListener("click", () => {
			if (item.nextSibling.style.maxHeight) {
				item.nextSibling.style.maxHeight = null;
			} else {
				item.nextSibling.style.maxHeight = item.nextSibling.scrollHeight + "px";
			}
		});
	});
};