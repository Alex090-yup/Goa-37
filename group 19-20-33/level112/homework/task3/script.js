const obj = {
    _items: [
        { name: "apple", price: 5, qty: 2 }
    ],
    addItem: function(product){
        this._items.push(product)
    },
    removeItem: function(index){
        this._items.splice(index, 1)
    },
    clear: function(){
        this._items = []
    },
    get totalPrice(){
        let total = 0
        for(let i of this._items){
            total += i.price * i.qty
        }
        return total
    }
}

console.log(obj.totalPrice)


