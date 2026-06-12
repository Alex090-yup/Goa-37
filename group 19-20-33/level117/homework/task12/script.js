function registerUser(username, email, password){
    return {
        username,
        email,
        password
    }
}
const user = registerUser("Alex", "alex@gmail.com", "12345")
console.log(user)
