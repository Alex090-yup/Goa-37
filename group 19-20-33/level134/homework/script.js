let products = document.querySelectorAll(".products")
let cartItems = document.getElementById("cartItems")
let cartCount = document.getElementById("cartCount")
let emptyCart = document.getElementById("emptyCart")
let cart = []
products.forEach((item, index) =>{
    let button = item.querySelector("button")
    button.addEventListener("click", ()=>{
        let name = item.querySelectorAll("p")[0].textContent
        let category = item.querySelector("span").textContent
        let price = Number(item.querySelector(".price").textContent)
        let exist = cart.find(item => item.id === index)
        if(exist){
            exist.quantity++
        }
        else{
            cart.push({
                name: name,
                id: index,
                category: category,
                price: price,
                quantity: 1
            })
        }
        renderCart()
    })
})

function renderCart(){
    cartItems.innerHTML = ""
    if(cart.length === 0){
        emptyCart.style.display = "block"
    }
    else{
        emptyCart.style.display = "none"
    }
    cartCount.textContent = cart.reduce((acc, item) => {
        return acc + item.quantity
    }, 0)
    cart.forEach(item => {
        let div = document.createElement("div")
        div.classList.add("cartProduct")
        div.innerHTML = `
           <div class="name-total">
                <h4>${item.name}</h4>
                <h4>Total:</h4>
           </div>
           <div class="price-total">
                <p>${item.price}</p>
                <p class="total">$${item.quantity * item.price}</p>
           </div>
           <div class="quantity"><button class="plus">+</button><p class="count">${item.quantity}</p><button class="minus">-</button></div>
           <button class="delete"><p>Delete</p></button>`
        
        let plusBtn = div.querySelector(".plus")
        let minusBtn = div.querySelector(".minus")
        let deleteBtn = div.querySelector(".delete")

        plusBtn.addEventListener("click", ()=> {
            changeAmount(item.id, 1)
        })

        minusBtn.addEventListener("click", ()=> {
            if(item.quantity>1){
                changeAmount(item.id, -1)
            }
        })

        deleteBtn.addEventListener("click", ()=>{
            deleteItem(item.id)
        })

        cartItems.append(div)
    })
}

function changeAmount(id, amount){
    let product = cart.find(item => item.id===id)
    product.quantity+=amount
    renderCart()
}

function deleteItem(id){
    cart = cart.filter(item => item.id!=id)
        renderCart()
}