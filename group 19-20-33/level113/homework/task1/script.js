const user = {
    _age: 14,
    get privateAge(){
        return this._age
    },
    set newAge(num){
        if(num>0){
            this._age = num
        }
        else{
            console.log("არასწორი ასაკი")
        }
    }
}

user.newAge = 15
console.log(user.privateAge)
