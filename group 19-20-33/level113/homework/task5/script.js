const textAnalyzer = {
    _text: "Hello world",
    set text(value){
        if(typeof value === "string"){
            this._text = value.trim()
        }
    },
    get length(){
        return this._text.length
    },
    get wordCount(){
        let array = this._text.split(" ")
        let result = array.filter(i =>{
            if(i!=""){
                return true
            }
        })
        return result.length
    },
    get isLong(){
        return this._text.length > 20
    }
}
textAnalyzer._text = "Hello user!"
console.log(textAnalyzer.length)
console.log(textAnalyzer.wordCount)
console.log(textAnalyzer.isLong)
