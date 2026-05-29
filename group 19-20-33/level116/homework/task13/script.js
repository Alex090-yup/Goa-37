const array = [4, 5, "snake", true, 68, 345, "fish", false]

let func = array.map(item => {
    if(typeof(item) === "string"){
        return item.toLowerCase()
    }
    else if (typeof(item) === "number"){
        if(Math.sqrt(item)%1 === 0){
            return item
        }
        else{
            return Math.pow(item, 2)
        }
    }
})

console.log(func)