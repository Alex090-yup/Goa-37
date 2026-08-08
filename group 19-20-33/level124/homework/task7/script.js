let div = document.querySelector("div")

function over(){
    div.textContent = "Mouse Over"
}

function out(){
    div.textContent = "Mouse Out"
}

function down(){
    div.textContent = "Mouse Down"
}

function up(){
    div.textContent = "Mouse Up"
}

function onwhl(event){
    if(event.deltaY>0){
        div.textContent = "Wheel Up"
    }
    else{
        div.textContent = "Wheel Down"
    }
}