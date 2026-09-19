let div = document.getElementById("img-text")
let btnTime = document.getElementById("time")
let btnHeartRate = document.getElementById("heart-rate")
let heartRateImg = document.getElementById("heartRateImg")
let Imgbox = document.getElementById("img-box")
let imgProduct = document.getElementById("product-img")

if(Imgbox.contains(imgProduct)){
    Imgbox.removeChild(heartRateImg)
}

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
    Imgbox.append(imgProduct)
    Imgbox.append(div)
    Imgbox.removeChild(heartRateImg)
})

btnHeartRate.addEventListener("click", () => {
    Imgbox.removeChild(imgProduct)
    Imgbox.removeChild(div)
    Imgbox.append(heartRateImg)
})
