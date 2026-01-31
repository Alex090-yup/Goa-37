numbers = {
    num1: 1,
    num2: 7,
    num3:2,
    num4: 4
}
total= 0
count=0
for(let i in numbers){
    if(numbers[i] %2 === 0){
        total+=numbers[i]
    }
    else{
        count+=1
    }
}
console.log(total)
console.log(count)