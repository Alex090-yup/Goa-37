function Car(name, model, year){
    this.name = name
    this.model = model
    this.year = year
    
    
    this.getDescription = function(){
        return `Name of car: ${name}, Model: ${model}, Year: ${year},`
    }
    
    this.calculateAge = function(){
        let result = 2025 - year
        return result
    }
}

let car1 = new Car('Toyota', 'Prius', 2013)
let car2 = new Car('Porshe', '911', 2009)
let car3 = new Car('Mercedes', 'G-class', 2024)

console.log(car1.getDescription(), 'Age: ' + car1.calculateAge())
console.log(car2.getDescription(), 'Age: ' + car2.calculateAge())
console.log(car3.getDescription(), 'Age: ' + car3.calculateAge())