const reveal = document.querySelectorAll('.reveal');

function isVisible (part){
    const {top, bottom} = part.getBoundingClientRect()
    return !(bottom < 0 || top > window.innerHeight);
}

setInterval(() => {
    reveal.forEach(element => {
        (isVisible(element)) ? element.classList.add('reveal_active'): element.classList.remove('reveal_active');        
    },10000);
    
})