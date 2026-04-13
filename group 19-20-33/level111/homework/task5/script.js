let obj = {
    num1: 1,
    num2: 2,
    num3: 3,
    num4: 4
}
let result = {

}

for(let i in obj){
    if(obj[i]%2===0){
        result[i] = obj[i]
    }
}

console.log(result)
