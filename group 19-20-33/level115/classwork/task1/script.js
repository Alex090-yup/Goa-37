let obj = {
    brand: "Mercedes",
    model: "G-Class",
    year: 2022,
    color: "black"
}

let array = Object.entries(obj)
for(let i of array){
    console.log(i[0])
    console.log(i[1])
}

