const array = [3, 4, 7, 8, 9, 10, 5, 34]

let func = array.reduce((total, item) => {
    if(item%2===0){
        total*=item
    }
    else{
        total+=item
    }
    return total
}, 1)

console.log(func)