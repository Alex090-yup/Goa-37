let input = document.getElementsByClassName('input')
let div = document.createElement('div')

for (let i = 0; i < input.length; i++) {
    div.appendChild(input[i])
    console.log(input[i])
}
