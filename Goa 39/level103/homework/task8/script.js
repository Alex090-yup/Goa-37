let main = document.querySelector('div')
let p = document.querySelector('p')

function changeEl(){
    let p2 = document.createElement('p')
    p2.textContent = 'Israel'
    main.replaceChild(p2,p)
}

p.addEventListener('mouseover', changeEl)