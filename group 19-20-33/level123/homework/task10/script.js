let h1 = document.querySelector("h1")
let body = document.body
let count = 0 

function clck(){
    if(count<4){
        h1.textContent += "⭐"
        count++
    }
}

function dbclck(){
    body.removeChild(h1)
}