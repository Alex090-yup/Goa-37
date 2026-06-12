const obj = {
    _balance: 100,
    get balance(){
        return this._balance * 0.8
    },
    set Newbalance(value){
        if(value%1===0 && value>50){
            this._balance = value
        }
        else{
            console.log("შეიყვანეთ 50-ზე მეტი მთელი რიცხვი")
        }
    }
}
console.log(obj.balance)