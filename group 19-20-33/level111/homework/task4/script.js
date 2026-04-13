let array = [3, 5, 7, 7]

let func = array.filter((el, index) => {
    if(array.indexOf(el)!==index){
        return el
    }
})

console.log(func)