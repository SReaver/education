export let differences = () => {
	let officerold = document.querySelector(".officerold"),
		officernew = document.querySelector(".officernew"),
		cards = document.querySelectorAll(".officer__card-item"),
		newCard1 = cards[0].cloneNode(true),
		newCard2 = cards[1].cloneNode(true),
		newCard3 = cards[2].cloneNode(true),
		cardShow = cards[3].cloneNode(true),
		oldCards = [cards[0], cards[1], cards[2]],
		newCards = [newCard1, newCard2, newCard3];
	officerold.appendChild(cardShow);
	newCards.forEach((item) => {
		officernew.insertBefore(item, cards[3]);
		item.style.display = "none";
	});
	oldCards.forEach((item) => {
		item.style.display = "none";
	});

	let cardPlus = document.querySelectorAll(".card__click .plus"),
		posOld = 0,
		posNew = 0;
	cardPlus.forEach((item) => {
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