let main = document.getElementById('main')

function changeBackground1(){
    main.style.background = 'red'
}

function changeBackground2(){
    main.style.background = 'white'
}

main.addEventListener('pointerdown', changeBackground1)
main.addEventListener('pointerup', changeBackground2)
