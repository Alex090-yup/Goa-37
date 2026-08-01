let array = ["😀", "🐱", "🚀", "🌈", "🍕", "🤖", "🦄", "🔥", "🎮",  "🌻"]
let button = document.querySelector("button")
let h1 = document.querySelector("h1")

function clck(){
    let i = Math.floor(Math.random() * array.length)
    h1.textContent = array[i]
}