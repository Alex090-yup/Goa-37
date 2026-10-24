let form = document.querySelector("form")
let btnshowAll = document.querySelector(".showAll")
let btnshowClothes = document.querySelector(".showClothes")
let btnshowTechnics = document.querySelector(".showTechnics")
let btnshowHouseThings = document.querySelector(".showHouseThings")
let div = document.getElementById("products")
let productList = []
form.addEventListener("submit", (event)=>{
    event.preventDefault()
    let check = true
    let productCategory = document.getElementById("category").value.toLowerCase()
    let productName = document.getElementById("name").value.trim()
    let productPrice = document.getElementById("price").value.trim()
    let categoryError = document.querySelector(".categoryError")
    let nameError = document.querySelector(".nameError")
    let priceError = document.querySelector(".priceError")
    categoryError.textContent = ""
    nameError.textContent = ""
    priceError.textContent = ""
    if(productCategory != "technic" && productCategory !== "housethings" && productCategory !== "clothes"){
        categoryError.textContent = "Enter available categories"
        categoryError.style.color = "red"
        categoryError.style.fontSize = "11px"
        check = false
    }
    if(productName === ""){
        nameError.textContent = "Enter product name"
        nameError.style.color = "red"
        nameError.style.fontSize = "11px"
        check = false
    }
    if(productPrice === ""){
        priceError.textContent = "Enter product price"
        priceError.style.color = "red"
        priceError.style.fontSize = "11px"
        check = false
    }
    if(check){
        let obj = {
            productName: document.getElementById("name").value,
            productPrice: document.getElementById("price").value,
            productImg: document.getElementById("image").value,
            productCategory: document.getElementById("category").value
        }
        productList.push(obj)
        form.reset()
    }
})

btnshowAll.addEventListener("click", ()=>{
    showProducts(productList)
})

btnshowTechnics.addEventListener("click", ()=>{
    let filteredList = productList.filter(item => {
        if(item.productCategory.toLowerCase() === "technic"){
            return item
        }
    })
    showProducts(filteredList)
})

btnshowHouseThings.addEventListener("click", ()=>{
    let filteredList = productList.filter(item => {
        if(item.productCategory.toLowerCase() === "housethings"){
            return item
        }
    })
    showProducts(filteredList)
})

btnshowClothes.addEventListener("click", ()=>{
    let filteredList = productList.filter(item => {
        if(item.productCategory.toLowerCase() === "clothes"){
            return item
        }
    })
    showProducts(filteredList)
})

function showProducts(products){
    div.innerHTML = ""
    products.forEach(item => {
        let {productName, productPrice, productImg, productCategory} = item
        div.innerHTML += `
            <div>
                <h3>${productName}</h3>
                <p>Price: ${productPrice}$</p>
                <img src="${productImg}" width="150">
                <p>Category: ${productCategory}</p>
            </div>`
    })
}