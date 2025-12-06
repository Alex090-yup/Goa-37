let lst =  ['01001011100', '100111110', '110101010']
let lst2 = []
for (let i = 0; i<lst.length; i++){
    let num = 0
    for(let index = 0; index<lst[i].length; index++){
        num+=Number(lst[i][index]) * 2**(lst[i].length-1-index)
    }
    lst2.push(num)
}
console.log(lst2)