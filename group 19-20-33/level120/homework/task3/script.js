const v = true
let name = document.getElementById("name")
let lastname = document.getElementById("lastname")
let img = document.getElementById("img")
if(v === true){
    name.textContent = "Alex"
    lastname.textContent = "Samushiia"
    img.setAttribute("src", "img1.jpg")
}
else{
    name.textContent = "Name"
    lastname.textContent = "Lastname"
    img.setAttribute("src", "img2.jpg")
}