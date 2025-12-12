let i = 0

function HelloUser(info){
    console.log("გამარჯობა " + info)
}

while (i < 3) {
    let info = prompt("Enter your name")
    HelloUser(info)
    i++
}