let h1 = document.querySelector("h1")
let parent = h1.parentElement
parent.style.border = "4px solid yellow";
let childlist = parent.children
childlist[0].style.fontSide = "20px"
childlist[1].style.fontSide = "40px"
childlist[2].style.fontSide = "80px"
childlist[0].style.color = "red"
childlist[1].style.color = "blue"
childlist[2].style.color = "green"
parent.firstElementChild.style.backgroundColor = "blue"
h1.nextElementSibling.style.backgroundColor = "green"
parent.lastElementChild.style.backgroundColor = "red"


