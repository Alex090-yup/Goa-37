let button = document.querySelector('button');

let a = 0

function moveBall() {
    a += 50;
    ball.style.top = a + 'px';
}

button.addEventListener('click', moveBall);