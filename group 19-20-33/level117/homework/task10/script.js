function createBook(title, author, price){
    return{
        title,
        author,
        price,
        getInfo(){
            console.log(`წიგნი: ${title}, ავტორი: ${author}, ფასი: ${price} ლარი`)
        }
    }
}
const book1 = createBook("ვეფხისტყაოსანი", "შოთა რუსთაველი", 30)
book1.getInfo()