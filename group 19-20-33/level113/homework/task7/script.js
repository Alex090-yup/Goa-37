function Car(model,brand,year,color, used, defects){
    return  {
        model:model,
        brand:brand,
        year:year,
        color:color,
        used:used,
        defects:defects
    }
}

const car1 = Car("X5", "BMW", 2020, "black", true, false)
const car2 = Car("A6", "Audi", 2018, "white", false, true)
const car3 = Car("C-Class", "Mercedes", 2022, "black", false, false)

console.log(car1)
console.log(car2)
console.log(car3)