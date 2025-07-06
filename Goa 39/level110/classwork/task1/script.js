let ball = document.getElementById('ball');

function changeColor(){
    ball.style.background = 'green';
}

let interval = setInterval(changeColor, 5000);

document.addEventListener('click', changeColor);