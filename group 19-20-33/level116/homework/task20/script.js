const array = [5, -7, 89, 43, -12, -3, -90, 31]
let func = array.filter(num => {
    if(num<0){
        console.log(num)
    }
})
console.log(func)