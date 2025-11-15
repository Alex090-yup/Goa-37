num = Number(prompt("Enter your number: "))
text = prompt("Enter your text: ")
text2= ""
for(let index = 0; index<num; index+=2){
    text2+=text[index]
}
console.log(text2)