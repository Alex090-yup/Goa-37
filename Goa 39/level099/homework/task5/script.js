function addSpan(){
    let element = document.getElementById('span')
    element.style.color = 'red'
    let element2 = document.getElementById('p')

    element2.appendChild(element)
}