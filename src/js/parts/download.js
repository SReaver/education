let download = () => {
	//Download file
	document.querySelectorAll(".download").forEach((item) => {
		item.addEventListener("click", (e) => {
			let a = document.createElement("a");
			a.href = 'img/education.pdf';
			a.setAttribute('download', 'education.pdf');
			a.setAttribute('visibility', 'hidden');
			document.body.appendChild(a);
			a.click();
			a.parentNode.removeChild(a);
		});
	});
};
module.exports = download;