let el = document.querySelector('p')
let el2
function a(){
    el2 = document.createElement('p')
    el2.textContent = 'Goodbay'
    el.appendChild(el2)
}

function b(){
    el.removeChild(el2)
}

el.addEventListener('mouseover', a)
el.addEventListener('mouseout', b)