function design(){
    let button = document.getElementById('hello')
    button.style.color = 'red';
    button.style.width = '300px'
    button.style.borderRadius = '10px'
    button.style.background = 'blue'
}
design()

function math_operations(){
    let plus= 5+5
    let minus= 5-5
    let division= 5/5
    let multiplication= 5*5
    alert('5+5=' + plus)
    alert('5-5=' + minus)
    alert('5:5=' + division)
    alert('5*5=' + multiplication)
}
math_operations()