let array = [2, 4, 3, 5, 7, 89, 70, 56, 102, 789]

let result = array.map((i, index) => {
    if (i%3===0){
        return i+index
    }
    else{
        return i*2
    }
})

console.log(result)
