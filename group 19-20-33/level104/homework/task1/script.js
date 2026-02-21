operators = {
    sum: function(a,b){
        console.log(a+b)
    },
    subst: function(a,b){
        console.log(a-b)
    },
    mult: function(a,b){
        console.log(a*b)
    },
    div: function(a,b){
        console.log(a/b)
    }
}

user_info1 = Number(prompt("Enter your num1: "))
user_info2 = Number(prompt("Enter your num2: "))

operators.sum(user_info1, user_info2)
operators.subst(user_info1, user_info2)
operators.mult(user_info1, user_info2)
operators.div(user_info1, user_info2)