const array = [{product: "apple", price: 10}, {product: "egg", price: 5}, {product: "potato", price: 3}, {product: "blueberry", price: 2}, {product: "tomato", price: 7}]

let func = array.reduce((total, item) => {
    return total + item.price
}, 0)

console.log(func)


