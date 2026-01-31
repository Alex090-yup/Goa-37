let str = "hello"
let vowels = "aeiou"
for(let i of str){
    if(vowels.includes(i)){
        console.log(i)
    }
}