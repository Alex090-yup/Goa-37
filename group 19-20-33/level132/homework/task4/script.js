let btn5Points = document.querySelector(".points5")
let btn10Points = document.querySelector(".points10")
let btn20Points = document.querySelector(".points20")
let ul = document.querySelector("ul")
let scores = []
btn5Points.addEventListener("click", ()=>{
    scores.push(5)
    showScores()
})
btn10Points.addEventListener("click", ()=>{
    scores.push(10)
    showScores()
})
btn20Points.addEventListener("click", ()=>{
    scores.push(20)
    showScores()
})
function showScores(){
    ul.innerHTML = ""
    scores.forEach(item =>{
        ul.innerHTML+=`<li>${item} points</li>`
    })
    let total = scores.reduce((acc, curr)=>{
        return acc + curr
    }, 0)
    console.log(total)
}