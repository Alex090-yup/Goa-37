let el = document.getElementById("animal")
let img = document.getElementById("img")
if(el.textContent === "dog"){
    img.setAttribute("src", "dog.jpg")
}
else if(el.textContent === "cat"){
    img.setAttribute("src", "cat.jpg")
}
else{
    img.setAttribute("src", "donkey.jpg")
}
