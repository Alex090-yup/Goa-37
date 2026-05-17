let count = 0
let usernum = Number(prompt("Enter number: "))

do{
    if(usernum%2===0){
        usernum/=2
    }
    else{
        usernum = usernum * 3 + 1
    }
    count++
} while(usernum!=1)

console.log(count)