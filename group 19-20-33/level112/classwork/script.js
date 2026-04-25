const car ={
    _model: "LX600",
    _brand:"Lexus",
    _year:2024,

    get displayCar(){
        if(this._year>2000 && this._brand === "Mercedes"){
            return `Model: ${this._model}, brand: ${this._brand}, year: ${this._year}`
        }
        else{
            return `we are not interested, this ${this._model} is not for us`
        }
    }
}

console.log(car.displayCar)