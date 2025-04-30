function calculateBMI() {
    
    let weight = document.getElementById('weight').value
    let height = document.getElementById('height').value
    let result = document.getElementById('bmi') 
    
    weight = parseFloat(weight)
    height = parseFloat(height)
    
    height = height / 100
    let bmi = weight / (height * height)

    if (bmi<18.5){
        massenge = 'UNDERWEIGHT'
    }

    else if (18.5<=bmi && bmi<=24.9){
        massenge = 'NORMAL'
    }

    else if (25<=bmi && bmi<=29.9){
        massenge = 'OVERWEIGHT'
    }

    else if (30<=bmi && bmi<=34.9){
        massenge = 'OBESE'
    }

    else{
        massenge= 'EXTREMELY OBESE'
    }

    result.textContent += bmi.toFixed(1) + ' ( ' + massenge + ' ) '

}