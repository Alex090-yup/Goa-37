const user = {
    _password: "123",
    get password(){
        let newP = ""
        let i = 0
        while(this._password.length>i){
            newP+="+"
            i++
        }
        return newP
    },
    changePassword: function(oldPassword, newPassword){
        if(oldPassword !== this._password && newPassword.length >= 6){
            this._password = newPassword
            return "Password changed"
        } else {
            return "Error"
        }
    }
}
console.log(user.changePassword("123", "goga")) 
console.log(user.password)
