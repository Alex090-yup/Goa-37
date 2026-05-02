const profile = {
    _username: "Alex",
    get privateUserName(){
        return `@${this._username}`
    },
    set newUserName(name){
        if(name === name.toLowerCase()){
            this._username = name
        }
    }

}
profile.newUserName = "alex"
console.log(profile.privateUserName)