function info(id, name, price){
    return{
        id,
        name,
        price
    }
}
const product1 = info(1, "Laptop", 1200)
const product2 = info(1, "Phone", 800)
console.log(product1)
console.log(product2)