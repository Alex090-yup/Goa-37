let car = {
    brand: "Lexus",
    year: 2024,
    color: "black"
}

delete car["year"] 
delete car["color"]

car["model"] = "Lexus XS"

console.log(car)
