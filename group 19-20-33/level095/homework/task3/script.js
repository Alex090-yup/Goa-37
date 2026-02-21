function change_vowels(arg){
    let vowels = "aeiou"
    let result = ""
    for(let i = 0; i<arg.length; i++){
        if(vowels.includes(arg[i].toLowerCase())){
            result+="*"
        }
        else{
            result+=arg[i]
        }
    }
    console.log(result)
}
change_vowels("anna")