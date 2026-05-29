const array = ["Hello", "dog", "Loop", "bell", "Wall", "Sitcom", "bed", "zip", "cake", "flower"]
let func = array.forEach(item => {
    if(item[0] === item[0].toUpperCase()){
        console.log(item)
    }
})

console.log(func)