let lst = ["string", 2, true]
let lst2 = []

for(let i of lst){
    if(i === String(i)){
        lst2.unshift(i)
    }
}
console.log(lst2)