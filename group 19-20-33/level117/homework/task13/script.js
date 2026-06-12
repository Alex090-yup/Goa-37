function createProduct(title, price){
    discountPrice = price/2
    return{
        title,
        price,
        discountPrice
    }
}
const product = createProduct("Robot", 500)
console.log(product)