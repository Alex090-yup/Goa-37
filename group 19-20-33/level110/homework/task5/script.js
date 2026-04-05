let string = "gfgyvtuktyc_ @ 2378iou"

let array = string.split("")

let result = array.findIndex(el => {
    if("aeiou".includes(el)){
        return el
    }
})

console.log(result)