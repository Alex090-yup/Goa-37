let btn = document.querySelector("button")
let body = document.body

btn.addEventListener("click", () => {
    let date  = new Date()
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let p = document.createElement("p")
    if(date.getDay() > days.indexOf("Sunday") && date.getDay() < days.indexOf("Saturday")){
        p.innerHTML = `Today is ${days[date.getDay()]} <br> It's a working day.`
        body.append(p)
        body.removeChild(btn)
    }
    else{
        p.innerHTML = `Today is ${days[date.getDay()]} <br> It's a weekend.`
        body.append(p)
        body.removeChild(btn)
    }
})