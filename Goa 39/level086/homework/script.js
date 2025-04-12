function a(){
    let b = Number(prompt('Enter your age: '))

    if (0 < b && b<6){
        alert('Your ticket is free!')
    }

    else if (6<=b && b<=17){
        alert('Your ticket price is 5 lari!')
    }

    else if (18<=b && b<=64){
        alert('Your ticket price is 10 lari!')
    }

    else if (65<=b){
        alert('Your ticket price is 7 lari!')
    }

    else{
        alert('Please, enter right age!')
    }
}

a()