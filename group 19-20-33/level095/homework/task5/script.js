function anon(arg){
    for(let i = 0; i<arg.length; i++){
        if(arg[i][1]>18){
            console.log(arg[i])
        }
    }
}

anon([["hello", 3], ["sas", 78], ["dog", 56], ["cat", 1]])