let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")


document.onkeydown = (event) => {
    if(event.key === btn1.textContent){
        btn1.style.position = "absolute"
        btn1.style.left = 50 + "px"
        btn1.style.top = 50 + "px"
    }
    else if(event.key === btn2.textContent){
        btn2.style.position = "absolute"
        btn2.style.left= 80 + "px"
        btn2.style.top = 50 + "px"
    }
    else if(event.key === btn3.textContent){
        btn3.style.position = "absolute"
        btn3.style.left= 110 + "px"
        btn3.style.top = 50 + "px"
    }
    else if(event.key === btn4.textContent){
        btn4.style.position = "absolute"
        btn4.style.left= 140 + "px"
        btn4.style.top = 50 + "px"
    }
    else if(event.key === btn5.textContent){
        btn5.style.position = "absolute"
        btn5.style.left= 170 + "px"
        btn5.style.top = 50 + "px"
    }
}

document.onkeyup = (event) => {
    if(event.key === btn1.textContent){
        btn1.style.position = ""
        btn1.style.left = ""
        btn1.style.top = ""
    }
    else if(event.key === btn2.textContent){
        btn2.style.position = ""
        btn2.style.left = ""
        btn2.style.top = ""
    }
    else if(event.key === btn3.textContent){
        btn3.style.position = ""
        btn3.style.left = ""
        btn3.style.top = ""
    }
    else if(event.key === btn4.textContent){
        btn4.style.position = ""
        btn4.style.left = ""
        btn4.style.top = ""
    }
    else if(event.key === btn5.textContent){
        btn5.style.position = ""
        btn5.style.left = ""
        btn5.style.top = ""
    }
}