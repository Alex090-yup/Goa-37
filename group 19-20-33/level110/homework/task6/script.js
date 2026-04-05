let array = [8, 9, 70, 5]

let result = array.find(el =>{
    for(let i = 2; i<el; i++){
        if(el%i === 0){
            return false
        }
    }
    return el
})
console.log(result)