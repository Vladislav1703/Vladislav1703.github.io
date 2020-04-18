let sets = document.getElementById("setsRow");
let rolls = document.getElementById("rollsRow");
let pizzas = document.getElementById("pizzasRow");
let newgoods = document.getElementById("newGoods");
let sale = document.getElementById("saleGoods");

function getItems(element) {
    return element.getElementsByClassName("orders_item");
}

function setItem(element, obj) {
    let items = getItems(element); // получаем все товарные карточки в DOM
    let goods = Object.entries(obj); // получаем все данные товарных карточек

    for (let i = 0; i < items.length; i++) {
        items[i].setAttribute('vendor', goods[i][0]);
        items[i].getElementsByClassName("orders_item_header")[0].innerText = goods[i][1].name;
        items[i].getElementsByClassName("orders_item_subheader")[0].innerText = goods[i][1].description;
        items[i].getElementsByClassName("orders_item_image")[0].style.backgroundImage = goods[i][1].image;
        items[i].getElementsByClassName("price")[0].firstChild.textContent = goods[i][1].cost;
        let sumText; 
        if (goods[i][1].cost > 999) { // для отображения тысяч в сумме за порцию через пробел
            sumText =  goods[i][1].cost.toString().slice(0, -3) + ' ' + goods[i][1].cost.toString().slice(-3);
            items[i].getElementsByClassName("price")[0].firstChild.textContent = sumText;
        }
        
    }
}

setItem(sets, goodsSets);
setItem(rolls,  goodsRolls);
setItem(pizzas, goodsPizzas);
setItem(newgoods,  goodsRolls);
setItem(sale, goodsPizzas);
