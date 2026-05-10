let obj1 = {
    name: "Alex",
    surname: "Samushiia",
    age: 15
}

let obj2 = {
    adress: "Tbilisi",
    hobby: "Football",
    favColor: "red"
}

let sum = Object.assign(obj1, obj2)

let {name, surname, age, adress, hobby, favColor} = sum
console.log(name)
console.log(surname)
console.log(age)
console.log(adress)
console.log(hobby)
console.log(favColor)

