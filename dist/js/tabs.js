let curButton; // последний нажатый таб

function toggleTabs (tabsName) {
    getItem();
    curButton.classList.toggle('button_tab_active');
    if (curButton.nextElementSibling) {
        curButton.nextElementSibling.classList.toggle('button_tab_active');
    }
    if (curButton.previousElementSibling) {
        curButton.previousElementSibling.classList.toggle('button_tab_active');
    }
    
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.visibility = "hidden";
        tabcontent[i].style.height = 0;
    }

    document.getElementById(tabsName).style.visibility = "visible";
    document.getElementById(tabsName).style.height = "499px";
}