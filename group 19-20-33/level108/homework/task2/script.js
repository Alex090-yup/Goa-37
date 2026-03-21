let func = function(text){
    let obj = {vowels: 0, consonant: 0}
    for(let i of text){
        let vowels = "aeiou"
        if(vowels.includes(i)){
            obj["vowels"]+=1
        }
        else{
            obj["consonant"]+=1
        }
    }
    return obj
}
console.log(func("Hello"))