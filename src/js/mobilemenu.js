function escapeMenu () {
    getItem();
    curElem.closest('div.mobileNavigation').classList.add('menu_off');
}

function showMenu() {
document.getElementsByClassName('mobileNavigation')[0].classList.remove('menu_off');
}

function showText() {
    document.getElementsByClassName('button_showText')[0].style.display = 'none';
    document.getElementsByClassName('about_desc_menu')[0].style.display = "block";
}