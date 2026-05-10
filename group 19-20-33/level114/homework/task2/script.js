let name = "Alex"
let age = 15
let email =  "ygjfv456@gmail.com"
let lastname = "Hunsen"
let hobby = "Football"

let obj = {
    name,
    age,
    email,
    lastname,
    hobby
}
let {name:username, age:userage} = obj

console.log(username)
console.log(userage)