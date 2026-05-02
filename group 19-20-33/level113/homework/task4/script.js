const profile = {
    _username: "Alex",
    set username(value){
        if(value.includes(" ")){
            return false
        }
        let num = 0
        for(let i of value){
            if("0123456789".includes(i)){
                num++
            }
        }
        if(num<3){
            return false
        }
        this._username = value.toLowerCase()
    },
    get username(){
        return `@${this._username}`
    },
    get length(){
        return this.username.length
    }
}
profile.username = "Ale123"
console.log(profile.username)
console.log(profile.length)