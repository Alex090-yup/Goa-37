const array = [5, 8, "h", "j", 6.4, 90, "k", "r", 5.2, "u"]

let result = array.findIndex(item => typeof item === "string")
array.splice(result, 1)
console.log(result)
console.log(array)