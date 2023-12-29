const rates = document.getElementsByClassName("rate-field")
const submitButton = document.querySelector(".submit-btn")
const startContainer = document.querySelector(".primary-container")
const thankYouContainer = document.querySelector(".thank-you-container")
const number = document.querySelector(".rating")
let rating = null



for (const rate of rates) {
    rate.addEventListener("click", function (event) {

        let currentActive = document.getElementsByClassName("active")

        if (currentActive.length > 0) {
        currentActive[0].className = currentActive[0].className.replace(" active", "")
        }
        this.className += " active";

        rating = event.target.innerText;
    })
}


submitButton.addEventListener("click", () => {
    if (rating) {
        number.innerText = `${rating} `
        startContainer.style.display = "none"
        thankYouContainer.style.display = "flex"
    }  
})