let box = document.getElementById("box")
let p = document.createElement("p")
let h1 = document.createElement("h1")
box.appendChild(p)
box.appendChild(h1)
p.textContent = "child1"
h1.textContent = "child2"
p.setAttribute("class", ".p")