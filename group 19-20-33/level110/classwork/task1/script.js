let array = ["hello", true, 7, 8.7]

let result = array.filter(function(element){
    if(typeof element === "string"){
        return element
    }
})
console.log(result)