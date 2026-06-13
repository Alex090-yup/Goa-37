const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

let [first, second, third, ...array1] = array
console.log(first)
console.log(second)
console.log(third)
console.log(array1)