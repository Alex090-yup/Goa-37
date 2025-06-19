function countUp(){
    let p = document.querySelector('p')
    let int = Number(p.textContent)
    int++
    p.textContent = int
}

let interval = setInterval(countUp,1000)

function stop(){
    clearInterval(interval)
}

function reset(){
    let p = document.querySelector('p')
    p.textContent = 0
}

document.querySelector('button').addEventListener('click', stop)
document.getElementById('btn').addEventListener('click', reset)

