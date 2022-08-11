const bookСontrol= document.querySelectorAll('.book__control');
const fontSize = document.querySelectorAll('.font-size');

const bookControlBackground= Array.from(document.querySelectorAll('.book__control_background'));//меняем цвета фона
const bookControlColor= Array.from(document.querySelectorAll('.book__control_color'));//меняем цвета текста

const bookContent= document.querySelectorAll('.book__content');


function choiceFontSize(element) {
    fontSize.forEach(el => {
        el.classList.remove ('font-size_active');
        
    });  
    
    element.classList.add('font-size_active'); 
    
    switch(element.dataset.size){
     

        case 'big' :
            bookContent.forEach(element => {
                element.classList.add('book_fs-big');
                element.classList.remove ('book_fs-small');
            });

           break;
        
           case 'small':
            bookContent.forEach(element => {
                element.classList.remove ('book_fs-big');
                element.classList.add('book_fs-small');
            });
           
           break;


           default:
            bookContent.forEach(element => {
                
                element.classList.remove ('book_fs-small');
            });
            
    }
}


function choiseColor(element){
    for (let i=0; i<bookControlColor[0].children.length; i++){
        if(bookControlColor[0].children[i].classList.contains('color')){
            bookControlColor[0].children[i].classList.remove ('color_active');  
        }
    }
    
    element.classList.add('color_active'); 
    
    switch(element.dataset.textColor){
        case 'black':
            bookContent.forEach(element => {
                element.classList.remove('book_color-gray');
                element.classList.remove ('book_color-whitesmoke');
                element.classList.add('book_color-black');
            });
           
           break;
        case 'gray' :
            bookContent.forEach(element => {
                element.classList.remove ('book_color-whitesmoke');
                element.classList.remove('book_color-black');
                element.classList.add('book_color-gray');
            });
           break;
        case 'whitesmoke':
            bookContent.forEach(element => {
                element.classList.remove('book_color-gray');
                element.classList.remove('book_color-black');
                element.classList.add ('book_color-whitesmoke');
            });
            
    }
}

//функция замены цвета фона
function choiseBackground(element){
    for (let i=0; i< bookControlBackground[0].children.length; i++){
        if(bookControlBackground[0].children[i].classList.contains('color')){
            bookControlBackground[0].children[i].classList.remove ('color_active');  
        }
    }
    
    element.classList.add('color_active'); 
    
    switch(element.dataset.bgColor){
        case 'black':
            bookContent.forEach(element => {
                element.classList.remove('book_bg-gray');
                element.classList.remove ('book_bg-white');
                element.classList.add('book_bg-black');
            });
           
           break;
        case 'gray' :
            bookContent.forEach(element => {
                element.classList.remove('book_bg-black');
                element.classList.remove ('book_bg-white');
                element.classList.add('book_bg-gray');
            });
           break;
        case 'white':
            bookContent.forEach(element => {
                element.classList.remove('book_bg-gray');
                element.classList.remove('book_bg-black');
                element.classList.add ('book_bg-white');
            });
            
    }
}

//слушаем событие
bookСontrol.forEach(element => {
    element.addEventListener('click', element => {
     if(element.target.parentElement.classList.contains('book__control_font-size')) {
         choiceFontSize(element.target);
     } 
     if(element.target.parentElement.classList.contains('book__control_color')){
        choiseColor(element.target);
     }
     if(element.target.parentElement.classList.contains('book__control_background')){
        choiseBackground(element.target);
    }
     element.preventDefault();
    })
})