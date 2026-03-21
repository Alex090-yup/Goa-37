let func = function(text){
    let obj = {CapitalLetter: 0, SmallLetter: 0}
    for(let i of text){
        let capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        if(capital.includes(i)){
            obj["CapitalLetter"]+=1
        }
        else{
            obj["SmallLetter"]+=1
        }
    }
    return obj
}
console.log(func("HeLLo"))