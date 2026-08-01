let div = document.querySelector("div")
let body = document.body
let size = 100

function clck(){
    size+=10
    div.style.width += size + "px"
    div.style.height += size + "px"
}

function dbclck(){
    body.removeChild(div)
}

