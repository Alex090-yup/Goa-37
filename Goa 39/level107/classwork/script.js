const list = ['ana', 'sofo', 'rezo']
main = document.querySelector('ul')
for (let i = 0; i<list.length; i++){
    let li = document.createElement('li')
    let text = document.createTextNode(list[i] + i)
    li.appendChild(text)
    main.appendChild(li)
}



