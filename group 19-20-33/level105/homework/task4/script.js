
let user_num = Number(prompt("Enter number 1-100: "))
let random = Math.floor(Math.random() * 100) + 1
let subst = user_num - random

while (user_num !== random) {
    subst = user_num - random
    if (subst < 0) {
        subst = subst * -1
    }
    if (subst < 10) {
        console.log("You are close.")
    }
    else if (user_num > random) {
        console.log("Number is higher.")
    }
    else {
        console.log("Number is lower.")
    }
    user_num = Number(prompt("Enter number 1-100: "))
}

