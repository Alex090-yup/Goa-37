
let el2 = document.querySelector('button')

function plus(){
    let el = document.querySelector('p')         
    let num = Number(el.textContent)             
    let sum = num + 1                           
    el.textContent = sum    
}

el2.addEventListener('click', plus)