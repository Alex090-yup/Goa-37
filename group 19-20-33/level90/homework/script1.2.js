text = prompt("Enter your text: ")
symbol = ""
for (let index = 0; index<text.length; index++){
    if (text[index] === text[0]){
        symbol+=text[index]
    }
    else if(text[index] === text[text.length-1]){
        symbol+=text[index]
    }
}
console.log(symbol)