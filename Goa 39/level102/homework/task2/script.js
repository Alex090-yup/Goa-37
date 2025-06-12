let div = document.querySelector('div');

function change_background(){
    div.style.background = 'green';
}

function change_background2(){
    div.style.background = 'white';
}

div.addEventListener('pointerover', change_background);
div.addEventListener('pointerout',  change_background2)