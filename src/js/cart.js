let curElem; // текущий таргет-элемент
let curItem; // текущая карточка товара
let countMobCart = document.getElementsByClassName('cabinet')[0].children[1]; // корзина для мобильного меню
let countCart = document.getElementsByClassName('cabinet')[1].children[1]; // корзина 
let cartMobPiece = countMobCart.lastChild; // отображения количества товаров в корзине
let cartPiece = countCart.lastChild; // отображения количества товаров в корзине
let cart = new Map();


function getItem () { // получаем элемент, в котором хотим совершить заказ
    let el = event.target;
    curButton = el;
    let elt = el.closest("div");
    curElem = elt;
    curItem = curElem.closest("div.orders_item");
}

function minusItem() { // уменьшаем количество 
    getItem();
    let pieces = Number(curElem.children[1].innerText);
    pieces--; 
    if (pieces < 1) { // предотвращение отрицательных чисел
    pieces = 0;
    curElem.children[1].innerText = pieces; 
    }
    typeOfGoods(curItem, pieces); // проверяем тип товара
    hasItem(curItem, pieces); // проверяем его наличие в корзине
    curElem.children[1].innerText = pieces;
    totalSum(); // пересчитываем сумму и общее количество порций
    checkPieces();
    cartTitle();

}

function plusItem() { // увеличиваем количество
    getItem();
    let pieces = Number(curElem.children[1].innerText);
    pieces++;
    typeOfGoods(curItem, pieces); // проверяем тип товара
    hasItem(curItem, pieces); // проверяем его наличие в корзине
    curElem.children[1].innerText = pieces;
    totalSum(); // пересчитываем сумму и общее количество порций
    checkPieces();
    cartTitle();
}

function hasItem(item, pieces) { // проверяем на наличие
    if (cart.has(item)) {
        cart.set(item, pieces);
        localStorage.setItem(curItem.getAttribute('vendor'), pieces);
    } 
    if (pieces < 1) {
        cart.delete(item);
        curItem.lastElementChild.firstElementChild.textContent = 'В корзину';
        curItem.lastElementChild.classList.remove('button_order_cart');
        localStorage.removeItem(curItem.getAttribute('vendor')); // сохраняем в localStorage
    }
}

function costItem(item, pieces, row) { // расчитываем сколько будут стоить несколько порций одного товара
    let sum = row[item.getAttribute('vendor')].cost * pieces;
    let sumText; 
    item.children[5].firstChild.firstChild.textContent = sum;
    if (sum > 999) { // для отображения тысяч в сумме за порцию через пробел
        sumText = sum.toString().slice(0, -3) + ' ' + sum.toString().slice(-3);
        item.children[5].firstChild.firstChild.textContent = sumText;
    }
} 

function typeOfGoods (item, pieces) {
    let row = item.closest("div.orders"); // определяем вид товара (пицца/роллы)
    if (row.id == 'setsRow') { // в зависимости от вида товары подключаемся к объекту с товарами
        return costItem(item, pieces, goodsSets);
    } else if (row.id == 'pizzasRow') {
        return costItem(item, pieces, goodsPizzas);
    } else if (row.id == 'rollsRow') {
        return costItem(item, pieces, goodsRolls);
    } else if (row.id == 'newGoods') {
        return costItem(item, pieces, goodsRolls);
    } else if (row.id == 'saleGoods') {
        return costItem(item, pieces, goodsPizzas);
    }
}

function buyItem() { //добавление в корзину
    getItem();
    let  pieces = Number(curElem.children[5].lastChild.children[1].innerText);
    if (pieces > 0) {
        cart.set(curElem, pieces);
        totalSum();
        curItem.lastElementChild.firstElementChild.textContent = 'В корзине';
        curItem.lastElementChild.classList.add('button_order_cart');
    }
    checkPieces();
    cartTitle();
    localStorage.setItem(curElem.getAttribute('vendor'), pieces);
}

let generalPieces = 0; //общее количество порций
let generalSum = 0;   //общая сумма 

function localSum(key, value) { // callback функция для передачи информации о количестве товаров и общей сумме в корзину    
generalPieces += key;
generalSum += Number.parseInt(value.children[5].firstChild.firstChild.textContent.split(' ').join(''));
}


function totalSum() { // перед пересчётом обнуляем всё, чтобы избежать ошибок
    generalPieces = 0;
    generalSum = 0;
    cart.forEach(localSum);
}

function checkPieces() { // оранжевая иконка на корзине, показывающая кол-во товаров
    if (generalPieces > 0) {
        cartPiece.classList.remove('pieces_off');
        cartPiece.innerText = generalPieces;
        cartMobPiece.classList.remove('pieces_off');
        cartMobPiece.innerText = generalPieces;
    }
    if (generalPieces == 0) {
        cartPiece.classList.add('pieces_off');
        cartPiece.innerText = '';
        cartMobPiece.classList.add('pieces_off');
        cartMobPiece.innerText = '';
    }
}

function cartTitle() {
    countMobCart.title = generalSum;
    countCart.title = generalSum;
}

