let info = Number(prompt("Enter your number: "))

200<info ? console.log(info * 0.05)
: 150<=info && info<200 ? console.log(info * 0.5)
: 100<=info  && info<150 ? console.log(info * 0.75)
: info<100 ? console.log(info * 0.8)
: console.log("არასწორი რიცხვი")