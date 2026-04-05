let array = ["hello", "ai", "jack", "apple"]
let vowels = "aeiou"
new_array = array.filter(string => {
    if(vowels.includes(string[0])){
        return string
    }
})
console.log(new_array)