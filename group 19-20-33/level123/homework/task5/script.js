let h1 = document.querySelector("h1")
let button = document.querySelector("button")
let count = 0
function plus(){
    count++
    h1.textContent = count
}
function reset(){
    count = 0
    h1.textContent = count
}