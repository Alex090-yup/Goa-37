const info1 = {
    id: 1,
    name: "Alex", 
    surname: "Franklin",
    year: 2018
}

const info2 = {
    id: 1,
    email: "AlexFranklingmail.com",
    password: "Alex123"
}

let result = Object.assign(info1, info2)
console.log(result)