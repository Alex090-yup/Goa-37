function func(num){
    let count = 0
    for(let i = 0; i<=num; i++){
        if(num%i===0){
            count++
        }
        else if(count>2){
            return true
        }
    }
    return false
}
console.log(func(14))