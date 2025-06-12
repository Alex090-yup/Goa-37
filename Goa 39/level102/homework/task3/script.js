let img = document.querySelector('img')

function changeWidth(){
    img.style.width = '400px'
}

img.addEventListener('click', changeWidth)