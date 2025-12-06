let names = ['alex', 'mate', 'iakob', 'giorgi', 'nika', 'zuka', 'luka']
let lst1 = []
let lst2 = []
for(let i = 0; i<names.length; i++){
    if(i%2===0){
        lst1.push(names[i])
    }
    else{
        lst2.push(names[i])
    }
}
console.log(lst1)
console.log(lst2)