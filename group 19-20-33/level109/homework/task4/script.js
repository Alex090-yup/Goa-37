let array = [5, 7, "hello", true, 4]
let array2 = []

array.forEach(i => {
    if(typeof i === "number"){
        array2.push(i*i)
    }
    else if (typeof i === "string"){
        let reversed = ""
        for(let z = i.length-1; z>=0; z--){
            reversed+=i[z]
        }
        array2.push(reversed)
    }
    else{
        array2.push(i)
    }
})

console.log(array2)
