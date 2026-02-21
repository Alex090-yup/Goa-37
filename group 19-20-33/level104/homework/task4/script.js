function guessNumberGame(){
    let i = 0
    while(i<3){
        let person_num = Number(prompt("Guess number (1-10): "))
        let num = Math.floor(Math.random() * 10) + 1
        if(person_num === num){
            console.log("Congratulations! You guessed it!")
            break
        }
        else{
            console.log("Unfortunately, you did not guess.")
        }
        i++
    }
    if (i === 3) {
        console.log("Game over! You used all attempts.")
    }

}
guessNumberGame()