function openList () {
    getItem();
    curElem.closest('div.footerNavigation_item').getElementsByClassName('footerNavigation_list')[0].classList.toggle('list_off');
    curElem.closest('div.footerNavigation_item').getElementsByClassName('arrow')[0].classList.toggle('arrow_open');
}