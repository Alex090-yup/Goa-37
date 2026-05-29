const array = [3, 56, 74, 23, 87, 45, 17, 89, 908, 705, 456, 342, 21, 43, 2]
let func = array.filter(item =>{
    if(item >= 18 && item<=40){
        console.log(item)
    }
})
console.log(func)