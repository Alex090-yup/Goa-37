let inp1 = document.getElementById("inp1")
let inp2 = document.getElementById("inp2")
let inp3 = document.getElementById("inp3")
let h1 = document.querySelector("h1")
let h2 = document.querySelector("h2")
let h3 = document.querySelector("h3")

inp1.oninput = () => {
    h1.textContent = inp1.value
}

inp2.onchange = () => {
    h2.textContent = inp2.value
}

inp3.onchange = () => {
    h3.textContent = inp3.value
}

