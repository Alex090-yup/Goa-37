function getColor(){
    let button = prompt('Write your favourite color: ')
    let button2 = document.getElementById('button')
    button2.style.background = button
    alert('Wow, your favourite color is ' + button)
}