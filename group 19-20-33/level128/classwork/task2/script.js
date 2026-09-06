let div = document.getElementById("clock")

setInterval(() => {
    let date = new Date()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    if(seconds<10){
        seconds = `0${seconds}`
    }
    if(minutes<10){
        seconds = `0${minutes}`
    }
    if(hours<10){
        seconds = `0${hours}`
    }
    div.textContent = `${hours}:${minutes}:${seconds}`
})