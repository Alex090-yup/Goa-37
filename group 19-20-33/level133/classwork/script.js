let productName = document.querySelector(".productName")
let productPrice = document.querySelector(".productPrice")
let btn = document.querySelector(".btn")
let btn2 = document.querySelector(".productPlus500")
let btn3 = document.querySelector(".productMinus500")
let box = document.querySelector(".box")
let productList = []
btn.addEventListener("click", ()=>{
    let obj = {}
    obj["name"] = productName.value
    obj["price"] = productPrice.value
    productList.push(obj)
    let p = document.createElement("p")
    productList.forEach(item =>{
        let {name, price} = item
        p.textContent = `${name} - ${price}`
        box.append(p)
    })
})
btn2.addEventListener("click", ()=>{
    let filteredList = productList.filter(item =>{
        return Number(item.price)>500
    })
    box.innerHTML = ""
    filteredList.forEach(item =>{
        let p = document.createElement("p")
        let {name, price} = item
        p.textContent = `${name} - ${price}`
        box.append(p)
    })
})
btn3.addEventListener("click", ()=>{
    let filteredList = productList.filter(item =>{
        return Number(item.price)<500
    })
    box.innerHTML = ""
    filteredList.forEach(item =>{
        let p = document.createElement("p")
        let {name, price} = item
        p.textContent = `${name} - ${price}`
        box.append(p)
    })
})