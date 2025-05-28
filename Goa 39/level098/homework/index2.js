function Car(name, model, year){
    this.name = name
    this.model = model
    this.year = year
    
    this.getDescription = function(){
        return `Name of car: ${name}, Model: ${model}, Year: ${year}`
    }
}

let car1 = new Car('Toyota', 'Prius', 2013)

console.log(car1.getDescription())