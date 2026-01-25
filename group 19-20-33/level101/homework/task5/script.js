let lst = [
    {brand: "Toyota", year: 2004}, 
    {num1: 1, num2: 2},
    {team1: "Munchester United", team2: "Munchester City"},
    {word1: "hello", word2: "bye"},
    {food1: "meat", food2: "tomato"}
]

for(let i = 0; i<lst.length; i++){
    for(let key in lst[i]){
        console.log(lst[i][key])
    }
}