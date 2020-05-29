function burger() {
    let burger = document.querySelector(".burger");
    let menu = document.querySelector(".menu");

    burger.addEventListener("click", function (e) {
        menu.classList.toggle("menu_active");
        burger.classList.toggle("burger_active");
        document.body.classList.toggle("_hidden-overflow");
    });

    burger.addEventListener("mousedown", function (e) {
        e.preventDefault();
    })
}


document.addEventListener("DOMContentLoaded", burger);