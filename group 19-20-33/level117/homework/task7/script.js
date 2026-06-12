const array = [2.4, 56, 78, 90, 3.5, 6.1, 120, 658.3, 490, 4.3]

let result = array.find(num => {
    if(num%1!=0){
        return num
    }
})
console.log(result)