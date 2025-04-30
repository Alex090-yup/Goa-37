let password = 'Alex'
let a = prompt('Guess password: ')
let tries = 0

while (password != a){
    if (password == a){
        alert('You are wrong!')
    }
    
    tries+=1
} 

tries+=1

alert('Correct! You guessed the password.')
