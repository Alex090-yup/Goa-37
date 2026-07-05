let user = prompt("Enter your color: ")
let box = document.getElementById("box")
box.innerHTML += '<div></div>'
let div = document.querySelector("div")
div.setAttribute("style", `background-color: ${user}`)

