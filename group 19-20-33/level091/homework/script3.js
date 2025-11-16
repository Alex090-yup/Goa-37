info_person = prompt("Enter your text: ")
let lst = [1, 2, 3, 4, "h"]

if (lst.includes(info_person)){
    lst.splice(lst.indexOf(info_person), 1)
}

else{
    lst.push(info_person)
}

console.log(lst)
