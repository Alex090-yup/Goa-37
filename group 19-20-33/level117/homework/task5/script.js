const obj = {
    _speed: 10,
    get balance(){
        if(this._speed>100){
            return `Super Speed: ${this._speed}`
        }
        else{
            return `${this._speed}`
        }
    },
    set newSpeed(nspeed){
        if(nspeed>this._speed){
            this._speed = nspeed
        }
    }
}

obj.newSpeed = 50
console.log(obj.balance)
obj.newSpeed = 150
console.log(obj.balance)