let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")


document.onkeydown = (event) => {
    let eventUpper = event.key.toUpperCase()
    if(eventUpper === btn1.textContent){
        btn1.style.transition = "3s"
        btn1.style.background = "blue"
    }
    else if(eventUpper === btn2.textContent){
        btn2.style.transition = "3s"
        btn2.style.background = "red"
    }
    else if(eventUpper === btn3.textContent){
        btn3.style.transition = "3s"
        btn3.style.background = "green"
    }
    else if(eventUpper === btn4.textContent){
        btn4.style.transition = "3s"
        btn4.style.background = "yellow"
    }
    else if(eventUpper === btn5.textContent){
        btn5.style.transition = "3s"
        btn5.style.background = "black"
    }
}

document.onkeyup = (event) => {
    let eventUpper = event.key.toUpperCase()
    if(eventUpper === btn1.textContent){
        btn1.style.transition = "none"
        btn1.style.background = "none"
    }
    else if(eventUpper === btn2.textContent){
        btn2.style.transition = "none"
        btn2.style.background = "none"
    }
    else if(eventUpper === btn3.textContent){
        btn3.style.transition = "none"
        btn3.style.background = "none"
    }
    else if(eventUpper === btn4.textContent){
        btn4.style.transition = "none"
        btn4.style.background = "none"
    }
    else if(eventUpper === btn5.textContent){
        btn5.style.transition = "none"
        btn5.style.background = "none"
    }
}