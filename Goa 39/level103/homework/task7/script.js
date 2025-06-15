let main = document.querySelector('ul')
let li1 = document.getElementById('li1')
let li2 = document.getElementById('li2')
let li3 = document.getElementById('li3')
let li4 = document.getElementById('li4')

let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')

function removeEl1(){
    main.removeChild(li1)
}

function removeEl2(){
    main.removeChild(li2)
}

function removeEl3(){
    main.removeChild(li3)
}

function removeEl4(){
    main.removeChild(li4)
}

btn1.addEventListener('click', removeEl1)
btn2.addEventListener('click', removeEl2)
btn3.addEventListener('click', removeEl3)
btn4.addEventListener('click', removeEl4)