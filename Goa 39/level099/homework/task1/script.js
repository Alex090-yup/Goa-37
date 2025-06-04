function addText(){
    let element = document.getElementById('p')
    let text = document.createTextNode('This is added by JS')
    element.appendChild(text)
}