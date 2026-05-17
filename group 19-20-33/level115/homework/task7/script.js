let motorcycle = {
    model: "Yamaha YZF-R7",
    year: 2024,
    specs: {
      engine: {
        type: "CP2 (Crossplane)",
        displacement: "689cc",
        horsepower: 73.4,
        cooling: "Liquid-cooled"
      },
      chassis: {
        frame: "Diamond frame",
        suspension: {
          front: "Inverted fork",
          rear: "Link-type Monocross"
        },
        brakes: {
          front: "Dual 298mm discs",
          rear: "Single 245mm disc"
        }
      }
    }
  }

const {model, year, specs} = motorcycle
const {engine, chassis} = motorcycle.specs
const {type, displacement, horsepower, cooling} = engine
const {frame, suspension, brakes} = chassis
const {front, rear} = suspension
const {front:front1, rear:rear1} = brakes
console.log(front)
console.log(rear)
console.log(front1)
console.log(rear1)