let lst = ["h", 1, 56, 78, "a"]
mult = 1
for(let i = 0; i < lst.length; i++){
    if (lst[i] === Number(lst[i])){
        mult*=lst[i]
    }
}
console.log(mult)