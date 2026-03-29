let array = ["hello", "bye", "look", "care"]
let j = 0
do {
    for (let i of array) {
        if (i.length % 2 === 0) {
            console.log(i)
        }
    }
    j++
} 
while (j < 1)