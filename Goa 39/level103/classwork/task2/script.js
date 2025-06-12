let p = document.querySelector('p')

p.addEventListener('pointerover', function(event){
    event.target.style.color = 'red'
    p.textContent='why did you hover over me'
})