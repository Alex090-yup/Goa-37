count=0
function plus(){
    count+=1
    document.getElementById('h1').textContent= count
}

function minus(){
    count-=1
    document.getElementById('h1').textContent= count
}

function reset(){
    count=0
    document.getElementById('h1').textContent= count
}