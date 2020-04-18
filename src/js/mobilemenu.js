function escapeMenu () {
    getItem();
    curElem.closest('div.mobileNavigation').classList.add('menu_off');
}

function showMenu() {
document.getElementsByClassName('mobileNavigation')[0].classList.remove('menu_off');
}