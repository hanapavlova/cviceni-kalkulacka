const displayed = document.querySelector(".display")

const handleDigitClick = (event) => {
    if (displayed.textContent.length >= 9) {
        return;
    }
    let button = event.target.textContent
        if (displayed.textContent === '0') {
        displayed.textContent = button;
        } else {
        displayed.textContent += button;
        }
}

const keypadButtons = document.querySelectorAll(".btn-num")
keypadButtons.forEach(button => {
    button.addEventListener("click", handleDigitClick)
})

