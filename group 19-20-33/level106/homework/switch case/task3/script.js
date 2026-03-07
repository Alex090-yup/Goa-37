let userGrade = Number(prompt("Enter your grade: "))

function Grade(grade) {
    switch (true) {
        case grade === 100:
            console.log("საუკეთესო შედეგია, ყოჩაღ")
            break;
        case grade >= 90 && grade <= 99:
            console.log("A")
            break;
        case grade >= 80 && grade <= 89:
            console.log("B")
            break;
        case grade >= 70 && grade <= 79:
            console.log("C")
            break;
        case grade >= 55 && grade <= 69:
            console.log("D")
            break;
        case grade < 55:
            console.log("F")
            break;
        default:
            console.log("არასწორად შემოიტანეთ ქულა")
    }
}

Grade(userGrade)