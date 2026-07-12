let body = document.body
let div = document.createElement("div")
body.appendChild(div)
div.style.border = "red"
div.style.width = "400px"
div.style.height = "400px"

let red = document.createElement("div")
let blue = document.createElement("div")
div.append(red, blue)
red.style.backgroundColor = "red"
red.style.height = "100%"
red.style.width = "50%"
blue.style.backgroundColor = "blue"
blue.style.height = "100%"
blue.style.width = "50%"

div.style.display = "flex"
let redP = document.createElement("p")
redP.textContent = "red"
redP.style.color = "#8B0000"
let blueP = document.createElement("p")
blueP.textContent = "blue"
blueP.style.color = "#00008B"
red.append(redP)
blue.append(blueP)




