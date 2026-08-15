let btn = document.querySelector("button")

document.onkeydown = (event) => {
    if(event.key === " "){
        btn.textContent = "Pressed!"
    }
    else if(event.key !== " "){
        btn.textContent = "Wrong key!"
    }
}

document.onkeyup = (event) => {
    if(event.key === " "){
        btn.textContent = "Release!"
    }
}