const menuArr = Array.from(document.querySelectorAll('a.menu__link'));

menuArr.forEach(menuItem => {
  menuItem.onclick = () => {

    let submenu = menuItem.nextElementSibling
    if(submenu) {
      remove();
      submenu.classList.add('menu_active');
      return false;
    }
  }
})

function remove() {
  const subMenu = Array.from(document.getElementsByClassName('menu_sub'))
  console.log(subMenu)
  subMenu.forEach(item => {
    if(item.classList.contains('menu_active')) {
      item.classList.remove('menu_active');
    }
  })
}