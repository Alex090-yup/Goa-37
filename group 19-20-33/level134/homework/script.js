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
        cart.push({
            name: name,
            category: category,
            price: price,
            quantity: 1
        })
        console.log(cart)
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
    cart.forEach(item => {
        cartItems.innerHTML += `
        <div class="cartProduct">
           <div class="name-total">
                <h4>${item.name}</h4>
                <h4>Total:</h4>
           </div>
           <div class="price-total">
                <p>${item.price}</p>
                <p>${item.quantity * item.price}</p>
           </div>
           <button class="quantity"><p>+</p><p>${item.quantity}</p><p>-</p></button>
           <button class="delete"><p>Delete</p></button>
        </div>
        `
    })
}