const bankAccount = {
    _balance: 0,
    deposit: function(amount){
        if(amount > 0){
            this._balance += amount
        } else {
            return false
        }
    },
    withdraw: function(amount){
        if(amount <= this._balance){
            this._balance -= amount
        } else {
            return false
        }
    },
    get balance(){
        return this._balance
    }
}

console.log(bankAccount.deposit(50))
console.log(bankAccount.withdraw(40))
console.log(bankAccount.balance)      




