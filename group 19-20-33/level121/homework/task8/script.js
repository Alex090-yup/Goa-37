let div = document.createElement("div")
let img = document.createElement("img")
let h2 = document.createElement("h2")
let btn = document.createElement("button")
let box = document.body

img.setAttribute("src", "img.jpg")
div.className = "card"
div.setAttribute("data-id", "1")
div.append(img, h2, btn)
box.append(div)