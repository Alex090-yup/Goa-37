let img = document.querySelector('img')

function changeSize1(){
    img.style.width = '700px'
}

function changeSize2(){
    img.style.width = '300px'
}

img.addEventListener('mouseover', changeSize1)
img.addEventListener('mouseout', changeSize2)
