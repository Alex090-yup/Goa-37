let obj = {
    _number: "943560",
    set tel(num){
        if(num.length > 6 && Number.isInteger(Number(num))){
            this._number = num
        } else {
            console.log("ALERT!")
        }
    },
    get newNum(){
        if(this._number.length > 6){
            return this._number
        } else {
            return "CANT RETURN NUMBER"
        }
    }
}

obj.tel = "6786400"
console.log(obj.newNum)