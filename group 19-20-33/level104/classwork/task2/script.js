let car = {
    name: "Lexus",
    year: 2024,
    info: function(){
        console.log(`Name of car: ${this.name}, Year: ${this.year}`)
    }
}
car.info()