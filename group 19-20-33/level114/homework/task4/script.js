const motorcycle = {
    brand: "Kawasaki",
    model: "Ninja H2R",
    specs: {
      engine: "998cc",
      horsepower: 310,
      topSpeed: "400 km/h"
    },
    colors: ["Lime Green", "Mirror Coated Spark Black"],
    isStreetLegal: false
}

let {brand, model, specs, colors, isStreetLegal} = motorcycle
let {engine, horsepower, topSpeed} = motorcycle.specs
console.log(brand)
console.log(model)
console.log(specs)
console.log(colors)
console.log(isStreetLegal)
console.log(engine)
console.log(horsepower)
console.log(topSpeed)