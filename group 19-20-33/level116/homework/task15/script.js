const array = ["Hello", 56, "bye", true, 34, false, "tank", 23]
let func = array.forEach(item => {
    console.log(item, typeof(item))
})

console.log(func)