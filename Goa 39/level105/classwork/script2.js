function sizeUp(){
    let img = document.querySelector('img')
    img.style.width = "400px"
}

let interval = setInterval(sizeUp, 5000)

document.querySelector('button').addEventListener('click', interval)