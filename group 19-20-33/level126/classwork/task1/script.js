let inp = document.querySelectorAll("input")

for(let i of inp){
    i.onfocus = () => {
        i.style.border = "3px solid red"
        i.style.padding = "15px 15px 15px 15px"
    }
    
    i.onblur = () => {
        i.style.border = "3px solid blue"
        i.style.padding = "0px 0px 0px 0px"
    }
}