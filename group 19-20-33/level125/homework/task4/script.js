let div1 = document.getElementById("div1")
let div2 = document.getElementById("div2")
let div3 = document.getElementById("div3")

document.onkeydown = (event) => {
    let eventUpper = event.key.toUpperCase()
    if (eventUpper === "R"){
        div1.style.boxShadow = "0px 0px 30px red"
    }
    else if(eventUpper === "Y"){
        div2.style.boxShadow = "0px 0px 30px yellow"
    }
    else if(eventUpper === "G"){
        div3.style.boxShadow = "0px 0px 30px green"
    }
}

document.onkeyup = (event) => {
    let eventUpper = event.key.toUpperCase()
    if (eventUpper === "R"){
        div1.style.boxShadow = "none"
    }
    else if (eventUpper === "Y"){
        div2.style.boxShadow = "none"
    }
    else if (eventUpper === "G"){
        div3.style.boxShadow = "none"
    }
}