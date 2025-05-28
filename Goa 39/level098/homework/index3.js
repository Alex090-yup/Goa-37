function Car(name, model, year){
    this.name = name
    this.model = model
    this.year = year
    
    this.getDescription = function(){
        return `Name of car: ${name}, Model: ${model}, Year: ${year}`
    }
}

let car1 = new Car('Toyota', 'Prius', 2013)
let car2 = new Car('Porshe', '911', 2009)
let car3 = new Car('Mercedes', 'G-class', 2024)

console.log(car1.getDescription())
console.log(car2.getDescription())
console.log(car3.getDescription())