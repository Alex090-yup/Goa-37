let div = document.querySelector("div")
let scale = 1

function over(){
    div.style.scale = scale + 0.5
}

function out(){
    div.style.scale = scale
}

function onwhl(event){
    if(event.deltaY<0){
        scale-=0.1
    }
    else{
        scale+=0.1
    }

    div.style.scale = scale
}