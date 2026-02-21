function change_case(arg){
    result = ""
    for(let i = 0; i<arg.length; i++){
        if(arg[i] === arg[i].toUpperCase()){
            result+=arg[i].toLowerCase()
        }
        else{
            result+=arg[i].toUpperCase()
        }
    }
    console.log(result)
}

change_case("Anna")