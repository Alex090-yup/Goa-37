let p = document.querySelector('p')

function a(){
    let p2 = document.createElement('p')
    p2.textContent = 'Goodbye'
    p.appendChild(p2)
}

p.addEventListener('click', a)