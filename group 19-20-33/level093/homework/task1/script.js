let lst =  [100, 50, 0, -300, 150, 20, 40, 900]
let min = lst[0]
for(let i = 0; i<lst.length; i++){
    if(lst[i] < min){
        min = lst[i]
    }
}
console.log(min)