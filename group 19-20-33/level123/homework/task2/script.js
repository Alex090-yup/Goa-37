let body = document.body
let h1 = document.createElement("h1")
let count = 0
function clck(){
    count++
    if(count>10){
        h1.textContent = "Popular Post!"
        body.append(h1)
    }
    if(count===50){
        h1.style.color = "yellow"
    }
}