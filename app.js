const submit = document.querySelector(".rating__submit");
const ratings = document.querySelectorAll(".rating__stars--rate");

submit.addEventListener("click", () => {
	document.querySelector(".rating").style.display = "none";
	document.querySelector(".thank").style.display = "flex";
});

ratings.forEach((rating) =>
	rating.addEventListener("click", function () {
		document.querySelector(
			".thank__selection"
		).innerText = `You selected ${this.innerText} out of 5`;
	})
);
