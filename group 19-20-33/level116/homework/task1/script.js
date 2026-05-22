let total1 = 0
let total2 = 0
for(let i = 0; i <= 50; i++){
    if(i % 2 == 0){
        total1 += i
    } 
    else {
        total2 += i
    }
}
let result = total1 * total2
console.log(result)