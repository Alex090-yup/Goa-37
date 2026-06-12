const array = [{name: "Alex", id: 1, age: 15}, {name: "Luna", id: 2, age: 20}, {name: "Robert", id: 3, age: 17}, {name: "Nina", id: 4, age: 12}]

let result = array.find(obj => {
    for(let i in obj){
        if(obj[i] === 3){
            return obj
        }
    }
})
console.log(result)