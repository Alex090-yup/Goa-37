let array = ["hello", "look", "store", "bye"]
let counter = 0
array.forEach(function(string){
    if(string.length >= 4){
        counter+=1
    }
})
console.log(counter)