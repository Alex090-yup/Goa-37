let btnApple = document.querySelector(".Apple")
let btnBanana = document.querySelector(".Banana")
let btnOrange = document.querySelector(".Orange")
let ul = document.querySelector("ul")
let fruits = []
btnApple.addEventListener("click", ()=>{
    fruits.push("Apple")
    displayFruits()
})
btnBanana.addEventListener("click", ()=>{
    fruits.push("Banana")
    displayFruits()
})
btnOrange.addEventListener("click", ()=>{
    fruits.push("Orange")
    displayFruits()
})
function displayFruits(){
    ul.innerHTML = ""
    fruits.forEach(item =>{
        ul.innerHTML+=`<li>${item}</li>`
    })
}