
const tab = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));

function dellClass(){
    tab.forEach(element => {
        element.classList.remove('tab_active');

    })
    tabContent.forEach(element => {
        element.classList.remove('tab__content_active');

    })
}

tab.forEach(element => {
    element.addEventListener('click', element => {
        let indexMenu = tab.indexOf(element.target);
        dellClass();
        tab[indexMenu].classList.add('tab_active');
        tabContent[indexMenu].classList.add('tab__content_active')
        
    })
});