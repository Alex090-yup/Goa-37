let inp = document.querySelector("input")
let btn = document.querySelector("button")
let ul = document.querySelector("ul")
let names = []
btn.addEventListener("click", ()=>{
    names.push(inp.value)
    let li = document.createElement("li")
    names.forEach(item=>{
        li.textContent = item
        ul.append(li)
    })
    inp.value = ""
})