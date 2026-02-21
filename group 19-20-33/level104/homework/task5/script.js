obj = {
    array: [1, 5.6, "ui", true, "6.7", false, 56, 6, "yop", "78"],
    mult_only_num: function(){
        let count = 1
        for(let i of this.array){
            if(typeof i === "number"){
                count*=i
            }
        }
        console.log(count)
    }
}
obj.mult_only_num()