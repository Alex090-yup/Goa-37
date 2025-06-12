let btn = document.querySelector('button')

function changeImage(){
    let img = document.querySelector('img')
    img.src="image/image2.jpeg"
}

btn.addEventListener('pointerdown', changeImage)