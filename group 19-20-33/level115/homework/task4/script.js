const user = {
    _username: "",
    set UserName(name) {
        if (name.length >= 5) {
            this._username = name
        }
    },
    get username() {
        return this._username
    }
}
user.UserName = prompt("Enter your name: ")
console.log(user.username)