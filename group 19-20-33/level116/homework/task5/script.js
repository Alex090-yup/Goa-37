function func(str){
    let text2 = ""
    for(let i = str.length-1; i>=0; i--){
        text2+=str[i]
    }
    if(str === text2){
        return(true)
    }
    else{
        return false
    }
}
console.log(func("anna"))