function getLocalStorage() { // достаём из локальной базы хранения данные о покупках до обновления страницы
    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
        let SavedCurElem;
        let SavedPieces;
        SavedCurElem = document.querySelector('[vendor='+'"'+key+'"'+']');
        if (SavedCurElem) {
            SavedPieces = Number.parseInt(localStorage.getItem(key));
            cart.set(SavedCurElem, SavedPieces);
            SavedCurElem.lastElementChild.firstElementChild.textContent = 'В корзине';
            SavedCurElem.lastElementChild.classList.add('button_order_cart');
            SavedCurElem.getElementsByClassName('orders_item_counter')[0].children[1].innerText = SavedPieces;
        }
    }
    totalSum();
    cartTitle();
    checkPieces();
}

getLocalStorage();