let button = document.querySelector("button")
let h1 = document.createElement("h1")
let body = document.body
function clck(){
    let num = Math.floor(Math.random() * 100)
    if(num === 100){
        h1.textContent = "🎉 JACKPOT"
        body.append(h1)
    }
    else{
        h1.textContent = num
        body.append(h1)
    }
}

function dbclck(){
    body.removeChild(h1)
}