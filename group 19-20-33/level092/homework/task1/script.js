let lst = ["hello", "bye", "rocket", "moon"]
let word = prompt("Enter your word: ")

if (lst.includes(word)) {
    let word2 = ""
    for (let i = word.length - 1; i >= 0; i--) {
        word2 += word[i]
    }
    lst.push(word2)
    console.log(lst)
} else {
    lst.unshift(word)
    console.log(lst)
}
