function change_text(){
    btn.textContent = 'Button clicked!'
}
let btn = document.querySelector('button')

btn.addEventListener('click', change_text)