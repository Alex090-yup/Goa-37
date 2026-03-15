let func = function(string){
    let result = { string: 0, number: 0, other: 0}
    string = string.toLowerCase()
    for(let i of string){
        let numbers = "0123456789"
        let str = "abcdefghijklmnopqrstuvwxyz"
        if(numbers.includes(i)){
            result["number"]+=1
        }
        else if(str.includes(i)){
            result["string"]+=1
        }
        else{
            result["other"]=+1
        }
    }
    return result
}
console.log(func("Hello 123"))