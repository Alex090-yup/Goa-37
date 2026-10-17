let productName = document.querySelector(".productName")
let productPrice = document.querySelector(".productPrice")
let btn = document.querySelector("button")
let div = document.querySelector("div")
let products = []
btn.addEventListener("click", ()=>{
    let obj = {}
    obj["name"] = productName.value
    obj["price"] = productPrice.value
    products.push(obj)
    showProducts()
})

function showProducts(){
    let p = document.createElement("p")
    products.forEach(item=>{
        let {name, price} = item
        p.textContent = `${name} - ${price}`
        div.append(p)
    })
    productName.value = ""
    productPrice.value = ""
}