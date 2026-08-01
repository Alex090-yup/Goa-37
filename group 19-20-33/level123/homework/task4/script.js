let h1 = document.querySelector("h1")
let body = document.body
function clck(){
    h1.classList.toggle("on")
    if (h1.classList.contains("on")) {
        h1.textContent = "🟡 (ჩართული)"
        body.style.background = "yellow"
    } 
    else {
        h1.textContent = "⚫ (გამორთული)"
        body.style.background = "black"
    }
}
