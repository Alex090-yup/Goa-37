let body = document.body
let h1 = document.createElement("h1")

let date = new Date()
h1.textContent = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
body.append(h1)
