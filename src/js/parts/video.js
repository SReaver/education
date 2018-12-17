let video = () => {
	let overlay = document.querySelector(".overlay"),
		frame = document.querySelector("#frame"),
		close = document.querySelector(".close"),
		play = document.querySelectorAll(".play"),
		secondVideo = document.querySelectorAll(".module__video-item:nth-child(2)");
	secondVideo.forEach((item) => {
		item.style.pointerEvents = "none";
	});
	play.forEach((item) => {
		item.addEventListener("click", function () {
			playVideo(item);

			if (item.parentNode != item.parentNode.parentNode.children[1]) {
				let sib = item.parentNode.nextElementSibling;
				sib.style.pointerEvents = "auto";
				sib.style.filter = "none";
				sib.style.opacity = 1;
				let sibPlay = sib.children[1].children[0],
					sibText = sib.children[1].children[1];
				sibText.classList.remove("attention");
				sibText.textContent = "play video";
				let svgPlay = document.querySelector(".play__circle svg").cloneNode(true);
				sibPlay.innerHTML = "";
				sibPlay.classList.remove("closed");
				sibPlay.appendChild(svgPlay);
			}
		});
	});

	close.addEventListener("click", () => {
		frame.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
		overlay.style.display = "none";
	});

	let playVideo = (data) => {
		overlay.style.display = "flex";
		overlay.style.zIndex = 31;
		frame.src = data.getAttribute("data-url") + "?autoplay=1&enablejsapi=1";
	};
};
module.exports = video;