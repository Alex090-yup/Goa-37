text = prompt("Enter your text: ")
text1 = ''
text2 = ''
for (let index = text.length-1; index>=0; index--){
    text1+=text[index]
}
for (let index = 0; index<text.length; index++){
    text2+=text[index]
}

if (text1 === text2){
    console.log(true)
}
else{
    console.log(false)
}