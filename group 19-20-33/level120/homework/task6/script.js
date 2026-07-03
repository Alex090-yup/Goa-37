let info = prompt("Enter password: ")
const password = "Alex123"
let box = document.getElementById("body")
box.innerHTML = `<h1></h1>`
let el = document.querySelector("h1")

if(info === password){
    el.innerText = "Alex"
}
else{
    el.innerText = "პაროლი არასწორია"
}