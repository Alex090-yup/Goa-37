let main = document.querySelector('div')
let btn = document.querySelector('button')

function addEl(){
    let el = document.createElement('p')
    el.textContent = 'Hello'
    main.appendChild(el)
}

btn.addEventListener('click', addEl)