function addElements(){
    let main = document.getElementById('main')
    let element = document.createElement('p')
    let element2 = document.createElement('button')
    let text2 = document.createTextNode('BMW')
    let text = document.createTextNode('Goodbye')

    element.appendChild(text)
    element2.appendChild(text2)
    main.appendChild(element)
    main.appendChild(element2)
}