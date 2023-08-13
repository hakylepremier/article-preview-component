/** @format */

const btn = document.querySelector(".share__btn-container")
const share = document.querySelector(".share")

btn.addEventListener("click", () => {
	share.classList.toggle("share--active")
})
