let h1 = document.querySelector("h1")

let left = 0
let down = 0

document.onkeydown = (event) => {
    if(event.key === "ArrowRight"){
        left += 10
    }
    else if(event.key === "ArrowLeft"){
        left -= 10
    }
    else if(event.key === "ArrowUp"){
        down -= 10
    }
    else if (event.key === "ArrowDown"){
        down += 10
    }
    h1.style.position = "absolute"
    h1.style.left = left + "px"
    h1.style.top = down + "px"
}