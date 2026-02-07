let lst = ["hello", true, false, 1, "bye", 1, true, 1]
let obj = {
    
}
for(let i of lst){
    let count = 0
    for(let t of lst){
        if(i===t){
            count+=1
        }
    }
    obj[String(i)] = count
}
console.log(obj)