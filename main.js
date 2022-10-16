const rateNumbers = document.querySelectorAll(".rate-levels span");
const rateState = document.querySelector(".rating-state");
const submitState = document.querySelector(".submited-state");
const selectedRate = document.querySelector(".selected-rate");
const submitBtn = document.getElementById("submit-btn");

for (let i = 0; i < rateNumbers.length; i++) {
  rateNumbers[i].addEventListener("click", () => {
    for (let j = 0; j < rateNumbers.length && j != i; j++) {
      if (rateNumbers[j].classList.contains("checked")) {
        rateNumbers[j].classList.remove("checked");
      }
    }
    for (let j = rateNumbers.length - 1; j >= 0 && j != i; j--) {
      if (rateNumbers[j].classList.contains("checked")) {
        rateNumbers[j].classList.remove("checked");
      }
    }
    rateNumbers[i].classList.toggle("checked");
  });
}
submitBtn.addEventListener("click", () => {
    let counter = 0
    let elIndex = 0
    for (let i = 0; i < rateNumbers.length; i++) {
        if (rateNumbers[i].classList.contains("checked")) {
          counter++
          elIndex = i
        }
    }
    if (counter === 1) {
        rateState.style.display = "none"
        submitState.style.display = "block"
        selectedRate.textContent = `You selected ${elIndex + 1} out of 5`
    }
})
