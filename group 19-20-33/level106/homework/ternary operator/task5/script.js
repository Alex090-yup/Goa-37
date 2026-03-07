let budget = Number(prompt("Enter your budget: "));
let day = prompt("Enter day of week: ");
let discounts = {
    Monday: 0.05,
    Tuesday: 0.10,
    Wednesday: 0.15,
    Thursday: 0.20,
    Friday: 0.25,
    Saturday: 0.50,
    Sunday: 0.50
}

let discount = discounts[day]

discount!=false
? console.log(`Discount: ${budget - budget*discount}`)
:console.log("Invalid day entered")
