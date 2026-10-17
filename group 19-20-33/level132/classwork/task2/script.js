let input = document.querySelector("input")
let button = document.querySelector("button")
let div = document.querySelector("div")

let list = []

button.addEventListener("click", () => {
    let text = input.value
    list.push(text)
    let h1 = document.createElement("h1")
    list.forEach(item => {
        h1.textContent = item
        div.append(h1)
    })
})