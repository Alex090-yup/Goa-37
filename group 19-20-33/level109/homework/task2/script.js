let num = Math.floor(Math.random() * 20);

do {
    let usernum = Number(prompt("Guess number (0-19): "));
    if (usernum === num) {
        console.log("Congratulations!");
    } 
    else {
        console.log("Try again");
    }

} while (usernum !== num)