let result = document.querySelector("h1")
let numbers = document.querySelectorAll(".nums")
let operators = document.querySelectorAll(".operators")
let dot = document.querySelector(".dot")
let del = document.getElementById("del")
let res = document.getElementById("res")
let equal = document.getElementById("equal")

let firstNumber = ""
let operator = ""
let secondNumber = ""

numbers.forEach((item) =>{
        item.addEventListener("click", () => {
            if(operator === ""){
                firstNumber+= item.textContent.trim()
                result.textContent = firstNumber
            }
            else {
                secondNumber+= item.textContent.trim()
                result.textContent = secondNumber
            }
        })
})

operators.forEach((item) =>{
    item.addEventListener("click", () =>{
        operator= item.textContent.trim()
    })
})

del.addEventListener("click", () =>{
    if(operator === ""){
        firstNumber = firstNumber.slice(0, -1)
        result.textContent = firstNumber
    }
    else{
        secondNumber = secondNumber.slice(0,-1)
        result.textContent = secondNumber
    }
})

res.addEventListener("click", () =>{
    firstNumber = ""
    operator = ""
    secondNumber = ""
    result.textContent = 0
})

dot.addEventListener("click", () =>{
    if(operator === ""){
        if(!firstNumber.includes(".")){
            firstNumber+= "."
            result.textContent = firstNumber
        }
    }
    else{
        if(!secondNumber.includes(".")){
            secondNumber+= "."
            result.textContent = secondNumber
        }
    }
})

equal.addEventListener("click", () =>{
    let total
    if(operator === "+"){
        total = Number(firstNumber) + Number(secondNumber)
    }
    if(operator === "-"){
        total = Number(firstNumber) - Number(secondNumber)
    }
    if(operator === "/"){
        total = Number(firstNumber) / Number(secondNumber)
    }
    if(operator === "x"){
        total = Number(firstNumber) * Number(secondNumber)
    }
    result.textContent = total

    firstNumber = ""
    operator = ""
    secondNumber = ""
})