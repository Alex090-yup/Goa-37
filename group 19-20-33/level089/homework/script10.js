names = ["Aleko", "Sandro", "Andro", "Elene"]
for (let index = 0; index<4; index++){
    if (names[index][0] == "A" && names[index][4] == "o"){
        console.log(names[index])
    }
}

names = ["Aleko", "Sandro", "Andro", "Elene"]
index = 0

while(index<4){
    if (names[index][0] == "A" && names[index][4] == "o"){
        console.log(names[index])
    }
    index++
}