let info_student = {
    name: "Alex",
    lastname: "Samushiia"
}

for (let i in info_student) {
    let result = ""
    let random = Math.floor(Math.random() * 5 + 1)
    let t = 0
    while (random>t){
        result+=info_student[i] 
        t++
    }
    console.log(result)
}