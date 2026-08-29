let div1 = document.getElementById("div3")
let inp1 = document.getElementById("inp1")
let btn = document.querySelector("button")

btn.onclick = () =>{
    if(inp1.value.length>0){
        let div = document.createElement("div")
        let p = document.createElement("p")
        let btn = document.createElement("button")
        div.setAttribute("id", "div4")
        p.setAttribute("id", "p")
        btn.setAttribute("id", "btn")
        p.textContent = inp1.value
        btn.textContent = "Delete"
        div.append(p,btn)
        div3.append(div)
        btn.onclick =  () => {
            div3.removeChild(div)
        }
    }
}