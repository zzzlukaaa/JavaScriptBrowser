let arrows = document.querySelector('.slider__arrows');
let item = document.querySelectorAll('.slider__item');
let newItem = Array.from(item);
let dot = document.querySelectorAll('.slider__dot');
let newDot = Array.from(dot);
let ActivElement = 0;


//по стрелкам вправо
const sliderRight = () => {
    if(ActivElement != (newItem.length - 1)) {
        newItem[ActivElement + 1].classList.add('slider__item_active');
        ActivElement =  ActivElement + 1;
    }
    else {
        newItem[0].classList.add('slider__item_active');
        ActivElement = 0;
    }
    newDot[ActivElement].classList.add('slider__dot_active');
}

arrows.addEventListener('click', element => {
    newItem[ActivElement].classList.remove('slider__item_active');
    newDot[ActivElement].classList.remove('slider__dot_active');
    if(element.target.classList.contains('slider__arrow_prev')) {
        sliderLeft();
        }
    else {
            if(element.target.classList.contains('slider__arrow_next')) {
                sliderRight();  
            }
        }
})



//по стрелкам влево
const sliderLeft = () => {
    if(ActivElement != 0) {
        newItem[ActivElement - 1].classList.add('slider__item_active');
        ActivElement = ActivElement - 1;
    }
    else {
        newItem[newItem.length - 1].classList.add('slider__item_active');
        ActivElement = newItem.length - 1;
    }
    newDot[ActivElement].classList.add('slider__dot_active'); 
}





// по точкам
newDot.forEach(element => {
    element.addEventListener('click', element => {
    newDot[ActivElement].classList.remove('slider__dot_active');
    newItem[ActivElement].classList.remove('slider__item_active');
    newItem[newDot.indexOf(element.target)].classList.add('slider__item_active');
    ActivElement = newDot.indexOf(element.target);
    })
}, once = true)