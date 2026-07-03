const name = "Alex"
let box = document.getElementById("box")
box.innerHTML +=  `<h1></h1>`
let name1 = document.querySelector("h1")
if(name === "Alex"){
    name1.innerText = "Alex"
}
else{
    name1.innerText = "გამარჯობა"
    box.setAttribute("style", "color: red")
    box.setAttribute("style", "background-color:coral")
}