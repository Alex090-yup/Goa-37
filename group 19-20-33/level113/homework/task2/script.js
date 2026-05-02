const weather = {
    _celsius: 50,
    get fahrenheit(){
        F = (9/5*this._celsius)+32
        return F
    },
    set newCelsius(num){
        if(typeof num === "number" && num>=0){
            this._celsius = num
        }
        else{
            console.log("არასწორი მნიშვნელობა")
        }
    }
}
weather.newCelsius = 35
console.log(weather.fahrenheit)