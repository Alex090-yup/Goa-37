let div = document.querySelector("div")

function onwhl(){
    let array = [ "orange", "yellow", "green", "blue", "black"]
    let i = Math.floor(Math.random() * array.length)
    div.style.background = array[i]
}

function over(){
    div.style.boxShadow = "5px 5px 10px black"
}

function out(){
    div.style.boxShadow = "none"
}