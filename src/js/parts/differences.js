export let differences = () => {
	let officerold = document.querySelector(".officerold");
	let officernew = document.querySelector(".officernew");
	let cards = document.querySelectorAll(".officer__card-item");
	let newCard1 = cards[0].cloneNode(true);
	let newCard2 = cards[1].cloneNode(true);
	let newCard3 = cards[2].cloneNode(true);
	let cardShow = cards[3].cloneNode(true);
	let oldCards = [cards[0], cards[1], cards[2]];
	let newCards = [newCard1, newCard2, newCard3];
	officerold.appendChild(cardShow);
	[newCard1, newCard2, newCard3].forEach((item) => {
		officernew.insertBefore(item, cards[3]);
		item.style.display = "none";
	});
	oldCards.forEach((item) => {
		item.style.display = "none";
	});

	let cardPlus = document.querySelectorAll(".card__click .plus");
	let posOld = 0;
	let posNew = 0;
	cardPlus.forEach((item) => {
		console.log(item.parentNode.parentNode.parentNode);
		item.addEventListener("click", () => {
			if (item.parentNode.parentNode.parentNode == officerold) {
				oldCards[posOld++].style.display = "flex";
				if (posOld == 3) {
					cardShow.style.display = "none";
				}
			} else {
				newCards[posNew++].style.display = "flex";
				if (posNew == 3) {
					cards[3].style.display = "none";
				}
			}
		});
	});
};