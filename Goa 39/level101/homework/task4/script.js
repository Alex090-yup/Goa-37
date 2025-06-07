function replaceEl(){
    let div = document.getElementById('div')
    let btn = document.getElementById('btn')
    let p = document.createElement('p')
    let text = document.createTextNode('Hello')
    p.appendChild(text)
    div.replaceChild(p , btn)
}