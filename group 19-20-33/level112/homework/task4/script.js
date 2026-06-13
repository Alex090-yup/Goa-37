user = {
    _email: "giorgilion@gmail.com",
    get email(){
        console.log(this._email)
    },
    set newEmail(item) {
        if (item.includes("@") && item.includes(".")) {
            this._email = item
        } else {
            console.log("must include @ and .")
        }
    }
}
user.newEmail = "robertdwert.ht"
console.log(user.email)
user.newEmail = "robert@dwert.ht"
console.log(user.email)