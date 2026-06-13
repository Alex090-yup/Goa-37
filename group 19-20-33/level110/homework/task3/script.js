const array = ["Qatar", "Angola", "Turkey", "Georgia"]

let result = array.filter(str => {
    let vowels = "aeiou"
    for(let i of vowels){
        if(str.toLowerCase()[0] === i){
            return str
        }
    }
})
console.log(result)