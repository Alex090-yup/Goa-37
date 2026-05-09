function updateProduct(id, updates){
    let {title} = updates
    return{
        id,
        title
    }
}

let book = {
  title: "Atomic Habits",
  author: "James Clear",
  price: 18,
  year: 2018   
}
let updateBook = updateProduct(1, book)
console.log(updateBook)

