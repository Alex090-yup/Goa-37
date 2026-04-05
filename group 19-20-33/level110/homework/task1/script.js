let array = [5, 7.8, 9, 6.4, 3, 1.2]

new_array = array.filter(number => {
    if(Number.isInteger(number) === true){
        console.log(number)
    }
})

console.log(new_array)
