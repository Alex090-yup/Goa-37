let inputUsername = document.querySelector(".inputUsername")
let Submitbtn = document.querySelector("button")
let errorUsername = document.querySelector(".errorUsername")
let inputEmail = document.querySelector(".inputEmail")
let errorEmail = document.querySelector(".errorEmail")
let inputPassword = document.querySelector(".inputPassword")
let errorPassword = document.querySelector(".errorPassword")
let inputconfirmPassword = document.querySelector(".confirmPassword")
let errorConfirmPassword = document.querySelector(".errorConfirmPassword")

Submitbtn.addEventListener("click", (event) => {
    event.preventDefault()
    let check = true
    let check2 = true
    let check3 = true
    let check4 = true
    let numbers = "0123456789"
    let symbols = "!#$%^&*()_+=[]{};:\"\\|<>?/`~.,-;"
    let alphabet = "abcdefghijklmnopqrstuvwxyz"

    if(inputUsername.value.trim() === ""){
        errorUsername.textContent = "Name is required."
        errorUsername.style.color = "red"
        errorUsername.style.fontSize = "14px"
        check = false
    } else if(inputUsername.value.trim().length < 2){
        errorUsername.textContent = "Name must be at least 2 characters long."
        errorUsername.style.color = "red"
        errorUsername.style.fontSize = "14px"
        check = false
    } else if(inputUsername.value.trim().length > 50){
        errorUsername.textContent = "Name must not exceed 50 characters."
        errorUsername.style.color = "red"
        errorUsername.style.fontSize = "14px"
        check = false
    }
    
    for(let i of numbers){
        if(inputUsername.value.includes(i)){
            errorUsername.textContent = "Name must not contain numbers."
            errorUsername.style.color = "red"
            errorUsername.style.fontSize = "14px"
            check = false
        }
    }

    for(let i of symbols){
        if(inputUsername.value.includes(i)){
            errorUsername.textContent = "Name must not contain special characters."
            errorUsername.style.color = "red"
            errorUsername.style.fontSize = "14px"
            check = false
        }
    }
    
    if(check){
        errorUsername.textContent = ""
        errorUsername.style.color = ""
        errorUsername.style.fontSize = ""
    }

    if(inputEmail.value.trim() === ""){
        errorEmail.textContent = "Email is required."
        errorEmail.style.color = "red"
        errorEmail.style.fontSize = "14px"
        check2 = false
    }

    let emailParts = inputEmail.value.trim().split("@")

    if(emailParts.length !== 2){
        errorEmail.textContent = "Please enter a valid email address."
        errorEmail.style.color = "red"
        errorEmail.style.fontSize = "14px"
        check2 = false
    }

    if(emailParts[0] === "" || emailParts[0].includes(" ")){
        errorEmail.textContent = "Please enter a valid email address."
        errorEmail.style.color = "red"
        errorEmail.style.fontSize = "14px"
        check2 = false
    }

    for(let i of symbols){
        if(emailParts[0].includes(i)){
            errorEmail.textContent = "Please enter a valid email address."
            errorEmail.style.color = "red"
            errorEmail.style.fontSize = "14px"
            check2 = false
        }
    }

    if(emailParts[1] === "" || emailParts[1] !== "gmail.com"){
        errorEmail.textContent = "Please enter a valid email address."
        errorEmail.style.color = "red"
        errorEmail.style.fontSize = "14px"
        check2 = false
    }

    if(check2){
        errorEmail.textContent = ""
        errorEmail.style.color = ""
        errorEmail.style.fontSize = ""
    }

    if(inputPassword.value.trim() === ""){
        errorPassword.textContent = "Password is required."
        errorPassword.style.color = "red"
        errorPassword.style.fontSize = "14px"
        check3 = false
    } else if(inputPassword.value.length < 8){
        errorPassword.textContent = "Password must be at least 8 characters long."
        errorPassword.style.color = "red"
        errorPassword.style.fontSize = "14px"
        check3 = false
    }

    let hasUppercase = false
    let hasLowercase = false
    let hasNumber = false

    for (let i of alphabet.toUpperCase()){
        if(inputPassword.value.includes(i)){
            hasUppercase = true
        }
    }

    for (let i of alphabet){
        if(inputPassword.value.includes(i)){
            hasLowercase = true
        }
    }

    for (let i of numbers){
        if(inputPassword.value.includes(i)){
            hasNumber = true
        }
    }

    if(!hasUppercase){
        errorPassword.textContent = "Password must contain at least one uppercase letter."
        errorPassword.style.color = "red"
        errorPassword.style.fontSize = "14px"
        check3 = false
    } else if(!hasLowercase){
        errorPassword.textContent = "Password must contain at least one lowercase letter."
        errorPassword.style.color = "red"
        errorPassword.style.fontSize = "14px"
        check3 = false
    } else if(!hasNumber){
        errorPassword.textContent = "Password must contain at least one number."
        errorPassword.style.color = "red"
        errorPassword.style.fontSize = "14px"
        check3 = false
    }

    if(check3){
        errorPassword.textContent = ""
        errorPassword.style.color = ""
        errorPassword.style.fontSize = ""
    }

    if(inputconfirmPassword.value.trim() === ""){
        errorConfirmPassword.textContent = "Please confirm your password."
        errorConfirmPassword.style.color = "red"
        errorConfirmPassword.style.fontSize = "14px"
        check4 = false
    } else if(inputconfirmPassword.value !== inputPassword.value){
        errorConfirmPassword.textContent = "Passwords do not match."
        errorConfirmPassword.style.color = "red"
        errorConfirmPassword.style.fontSize = "14px"
        check4 = false
    }

    if(check4){
        errorConfirmPassword.textContent = ""
        errorConfirmPassword.style.color = ""
        errorConfirmPassword.style.fontSize = ""
    }
})