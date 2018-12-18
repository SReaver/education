let video = () => {
	let overlay = document.querySelector(".overlay"),
		frame = document.querySelector("#frame"),
		close = document.querySelector(".close"),
		play = document.querySelectorAll(".play"),
		secondVideo = document.querySelectorAll(".module__video-item:nth-child(2)"),
		currentitem;
	secondVideo.forEach((item) => {
		item.style.pointerEvents = "none";
	});


	play.forEach((item) => {
		item.addEventListener("click", function () {
			currentitem = item;
			playVideo(item);
		});
	});

	let unlock = (item) => {
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
	};
	close.addEventListener("click", () => {
		stopVideo();
		overlay.style.display = "none";
	});
	let tag = document.createElement('script'),
		firstScriptTag = document.getElementsByTagName('script')[0],
		player,
		playerdiv = document.createElement("DIV");
	playerdiv.setAttribute("id", "player"),
		video = document.querySelector(".video");
	video.appendChild(playerdiv);
	video.removeChild(frame);
	tag.src = "https://www.youtube.com/iframe_api";

	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	let onPlayerStateChange = (event) => {
		if (event.data === 0) {
			unlock(currentitem);
		}
	};

	function stopVideo() {
		player.stopVideo();
	}

	onYouTubeIframeAPIReady = () => {
		player = new YT.Player('player', {
			height: '360',
			width: '640',
			videoId: '',
			playerVars: {
				'autoplay': 1,
				'controls': 1,
			},
			events: {
				'onStateChange': onPlayerStateChange
			}
		});
	};
	let playVideo = (item) => {
		overlay.style.display = "flex";
		overlay.style.zIndex = 31;
		let vid = item.getAttribute("data-url");
		vid = vid.substring(vid.lastIndexOf('/') + 1);
		player.loadVideoById(vid);
	};
};
module.exports = video;