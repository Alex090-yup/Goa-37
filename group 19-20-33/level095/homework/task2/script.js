function check_palendrom(arg) {
    for (let i = 0; i < arg.length; i++) {
        if (arg[i] !== arg[arg.length - 1 - i]) {
            console.log(false)
            return
        }
    }
    console.log(true)
}

check_palendrom("anna")
check_palendrom("hello")