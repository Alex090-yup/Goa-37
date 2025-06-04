function addBackground(){
    let element = document.getElementById('div')
    element.style.background = 'red'
    let text = document.createTextNode('Hello')
    element.appendChild(text)
}