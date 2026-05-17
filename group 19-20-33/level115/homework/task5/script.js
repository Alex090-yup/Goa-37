function Car(brand, model, year, color){
    return {
        brand,
        model, 
        year,
        color
    }
}

const car1 = Car("Toyota", "Camry", 2020, "black")
const car2 = Car("BMW", "M5 F90", 2022, "blue")
console.log(car1)
console.log(car2)
