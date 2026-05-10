let obj = {
    name: "Alex"
}
obj["author"] = "DD"
obj["year"] = 2004
obj["amount"] = 34

console.log(obj.hasOwnProperty("name"))
console.log(obj.hasOwnProperty("color"))
