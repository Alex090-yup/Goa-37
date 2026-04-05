let array = ["Saba", "Aleqs", "Jack", "Melo"]

let result = array.find((element) => {
    return element.length>5
})
console.log(result)