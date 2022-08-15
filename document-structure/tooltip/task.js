const queryBody  = document.querySelector('body')

let elem = 0;                                           

function getCoords(element) {                           
    let box = element.getBoundingClientRect();
    
    return {
      top: box.top + window.pageYOffset,
      right: box.right + window.pageXOffset,
      bottom: box.bottom + window.pageYOffset,
      left: box.left + window.pageXOffset
    };
  }

function creatTooltip(element) {     
    let tooltip = document.createElement('div');      
    let coords = getCoords(element);                       
  
    if (elem == 1) {                                       
        document.querySelector('.tooltip').remove();
    }
    
    tooltip.classList.add('tooltip');
    tooltip.append(element.title); 
    element.append(tooltip)
        
    tooltip.style.left = coords.left + "px"; 
    tooltip.style.top = coords.bottom + "px";

    tooltip.style.position = 'absolute';
    tooltip.classList.add('tooltip_active');         
    elem = 1;
  }
   
  queryBody.addEventListener('click', event => {
    if(event.target.className.includes('has-tooltip')){ 
        creatTooltip(event.target)
        event.preventDefault();
    }
})
   