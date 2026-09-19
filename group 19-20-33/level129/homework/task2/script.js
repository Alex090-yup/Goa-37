let img = document.getElementById("img")
let rightArrow = document.getElementById("right-arrow")
let leftArrow = document.getElementById("left-arrow")

let animalsImg = ["whitetiger.jpg", "lynx.jpg", "rebbit.jpg", "fox.jpg", "deer.jpg"]
let index = 0
rightArrow.addEventListener("click", ()=>{
    index++
    if(index>=animalsImg.length){
        index=0
    }
    img.src = animalsImg[index]
})

leftArrow.addEventListener("click", ()=>{
    index--
    if(index<0){
        index = animalsImg.length-1
    }
    img.src = animalsImg[index]
})