let array = [true, false, true, true]

let func = array.reduce((acc, cv) => {
    if(acc === cv){
        return true
    }
    else{
        return false
    }
}, true)

console.log(func)