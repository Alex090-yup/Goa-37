let car = {
    brand: "Lexus",
    like: true,
    year: 2024
}

car["year"] = 2025
car["model"] = "Lexus LX"
delete car["like"]

console.log(car)

