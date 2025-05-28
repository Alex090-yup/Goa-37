function Rectangle(widht, height){
    this.width = widht
    this.height = height
    
    this.perimetrRectangle = function(){
        return 2*(widht+height)
    }
    
    this.areaRectangle = function(){
        return widht*height
    }
}

Rectangle1 = new Rectangle(Number(prompt('Enter widht: ')), Number(prompt('Enter height: ')))

console.log(`Perimetr: ${Rectangle1.perimetrRectangle()}, Area: ${Rectangle1.areaRectangle()}`)