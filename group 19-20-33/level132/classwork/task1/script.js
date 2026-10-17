let div = document.querySelector("div")
let names = ["Alex", "Luka", "Giorgi", "James", "Nika"]

names.forEach(item => {
    let p = document.createElement("p")
    p.textContent = item
    div.append(p)
})