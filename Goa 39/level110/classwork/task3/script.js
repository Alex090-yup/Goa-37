const messeges = ['hello', 'how are you?', 'goodbye', 'boy']
let div = document.querySelector('div')

for (let i = 0; i<messeges.length; i++){
    let p = document.createElement('p');
    p.textContent = messeges[i]
    div.appendChild(p)
}