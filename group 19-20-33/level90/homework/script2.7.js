text = prompt("Enter your text: ")
text2 = ''
for(let index = 0; index<text.length; index++){
    if (text[index] === 'a'){
        text2+='@'
    }
    else{
        text2+=text[index]
    }
}
console.log(text2)