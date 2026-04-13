let array = ["jack", "robot", "cool", "nice"]

let func = array.reduce((acc, cv)=>{
    if(acc.length>cv.length){
        return acc
    }
    else{
        return cv
    }
})

console.log(func)