let info_per = prompt("Enter your key: ")
let obj = {
    subject: "PE",
    sport: "Football",
    number: 2,
    person: true
}

if (info_per in obj) {
    console.log(obj[info_per])
} 
else {
    let val = prompt("Enter your value: ")
    obj[info_per] = val
    console.log(obj)
}