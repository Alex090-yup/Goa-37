const age = 14

switch (true) {
    case age >= 1 && age < 18:
        console.log('არასრულწლოვანი')
        break

    case 18<=age:
        console.log('ზრდასრული')
        break

    default:
        console.log('ასეთი ასაკი არ არსებობს')
}