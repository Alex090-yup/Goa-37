let div = document.getElementById("img-text")
let btnTime = document.getElementById("time")
let Imgbox = document.getElementById("img-box")
let imgProduct = document.getElementById("product-img")
let divBlack = document.getElementById("black")
let divRed = document.getElementById("red")
let divBlue = document.getElementById("blue")
let divPurple = document.getElementById("purple")

btnTime.addEventListener("click", () => {
    setInterval(() =>{
        let date = new Date()
        let hours = date.getHours()
        let minutes = date.getMinutes()
        let seconds = date.getSeconds()
    
        if(seconds<10){
            seconds = `0${seconds}`
        }
        if(minutes<10){
            minutes = `0${minutes}`
        }
        if(hours<10){
            hours = `0${hours}`
        }
        
        div.textContent = `${hours}:${minutes}:${seconds}`
    })
})

divBlack.addEventListener("click", ()=>{
    imgProduct.src = "black.png"
})
divRed.addEventListener("click", ()=>{
    imgProduct.src = "red.png"
})

divBlue.addEventListener("click", ()=>{
    imgProduct.src = "blue.png"
})

divPurple.addEventListener("click", ()=>{
    imgProduct.src = "purple.png"
})