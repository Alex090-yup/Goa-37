function a(){
    console.log(5)
}

let btn = document.querySelector('button')

btn.addEventListener('click', a)

btn.removeEventListener('click', a)
