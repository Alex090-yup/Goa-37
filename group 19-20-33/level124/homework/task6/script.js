let div = document.querySelector("div")
let width = 100

function onwhl(event){
    if(event.deltaY>0){
        width +=10
    }
    else{
        width-=10
    }
    div.style.width = width + "px"
}

function over(){
    div.style.background = "blue"
}

function out(){
    div.style.background = "red"
}