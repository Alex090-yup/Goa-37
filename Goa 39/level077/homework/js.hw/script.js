function firstButton(){
    let change_background_color = document.getElementById('body1')
    change_background_color.style.background = 'lightgray'
}

function secondButton(){
    let change_text1 = document.getElementById('button1')
    let change_text2 = document.getElementById('button2')
    let change_text3 = document.getElementById('button3')
    change_text1.style.color = 'red'
    change_text2.style.color = 'blue'
    change_text3.style.color = 'green'
}

function thirdButton(){
    let change_background_color = document.getElementById('body1')
    let change_text1 = document.getElementById('button1')
    let change_text2 = document.getElementById('button2')
    let change_text3 = document.getElementById('button3')
    change_background_color.style.background = 'white'
    change_text1.style.color = 'black'
    change_text2.style.color = 'black'
    change_text3.style.color = 'black'
}

function change_img(){
    document.getElementById('img').src = 'image2.jpeg'
}