let budget = Number(prompt("Enter your budget: "))
let day = prompt("Enter day of week: ")

switch(day){
    case "Monday":
        console.log(`Discount 5%: ${budget - budget*0.05}`)
        break;
    case "Tuesday":
        console.log(`Discount 10%: ${budget - budget*0.10}`)
        break;
    case "Wednesday":
        console.log(`Discount 15%: ${budget - budget*0.15}`)
        break;
    case "Thursday":
        console.log(`Discount 20%: ${budget - budget*0.20}`)
        break;
    case "Friday":
        console.log(`Discount 25%: ${budget - budget*0.25}`)
        break;
    case "Saturday":
        console.log(`Discount 50%: ${budget - budget*0.50}`)
        break;
    case "Sunday":
        console.log(`Discount 50%: ${budget - budget*0.50}`)
        break;
    default:
        console.log(`Invalid day entered`)
        break;
}