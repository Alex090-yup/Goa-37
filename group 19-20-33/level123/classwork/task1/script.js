let btn = document.querySelector("button")
let body = document.body
function add(){
    let img = document.createElement("img")
    let h1 = document.createElement("h1")
    img.setAttribute("src", "img.webp")
    h1.textContent = "hello i am here"
    h1.setAttribute("class", "red")
    body.append(img, h1)
}