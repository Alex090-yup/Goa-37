let img = document.querySelector('img')
let btn = document.querySelector('button')

function changeImage(){
    img.src = "image/image2.jpeg"
}

btn.addEventListener('click', changeImage)