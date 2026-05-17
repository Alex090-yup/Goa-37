const bankAccount = {
    _balance: 45, 
    get balance(){
        return `$${this._balance}`
    },
    set newBalance(number){
        if(number>0){
            this._balance = number
            return `$${this._balance}`
        }
    }
}
bankAccount.newBalance = 56
console.log(bankAccount.balance)