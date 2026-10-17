let btn = document.querySelector("button")
let body = document.body
let nameGoga = []
btn.addEventListener("click", ()=>{
    nameGoga.push("Goga")
    let li = document.createElement("li")
    nameGoga.forEach(item =>{
       li.textContent = item
       body.append(li)
    })
})

