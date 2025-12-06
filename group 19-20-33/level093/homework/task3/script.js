let info = Number(prompt("Enter your number: "))
lst = []
for(let i = 0; i<=info; i++){
    if(info%i === 0){
        lst.push(i)
    }
}
console.log(lst)