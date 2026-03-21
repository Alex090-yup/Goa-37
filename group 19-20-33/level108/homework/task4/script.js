let func = function(symbol) {
    switch (typeof symbol) {
        case "number":
            console.log("Symbol is Integer")
            break
        case "string":
            console.log("Symbol is String")
            break
        default:
            console.log("Symbol is of another type")
            break
    }
}
func("a")
func(6)