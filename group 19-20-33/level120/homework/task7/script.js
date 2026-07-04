let number = Number(prompt("Enter your number: "))
let box = document.getElementById("box")
let el = document.getElementById("ul")
let count = 0
for(let i = 1; i<=number; i++){
    if(number%i===0){
        count++
        el.innerHTML+= `<li>${i}</li>`
    }
}
if(count===2){
    box.innerHTML = `<h1>ეს რიცხვი არის მარტივი</h1>`
}
