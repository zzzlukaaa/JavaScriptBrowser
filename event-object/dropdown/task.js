

const activeState = document.querySelector('div.dropdown__value');
const dropDownList = document.querySelector('ul.dropdown__list');
const listArr = Array.from(document.querySelectorAll('li a.dropdown__link'));

activeState.addEventListener( 'click', function (e) {
    dropDownList.classList.toggle('dropdown__list_active');
});

listArr.forEach((item) => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        activeState.textContent = item.textContent;
        dropDownList.classList.remove('dropdown__list_active');
});
});




