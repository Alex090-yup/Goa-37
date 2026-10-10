let frontCardNumberText = document.querySelector(".front-card-number-text")
let cardNumber = document.getElementById("card-number")

cardNumber.addEventListener("blur", ()=> {
    let result = ""
    for (let i in cardNumber.value) {
        result+= cardNumber.value[i]
        if (result.length > 18) {
            break
        }
        if (result.length < 18) {
            cardNumber.style.border = "1px solid red"
        }

    }
    frontCardNumberText.textContent = result
})