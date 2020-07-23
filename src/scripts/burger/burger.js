function burger() {
    let burger = document.querySelector(".burger");
    let menu = document.querySelector(".menu");

    burger.addEventListener("click", () => {
        toggleMenu();

        menu.onclick = (e) => {
            if (!e.target.closest(".menu__link")) return;

            menu.onclick = null;
            toggleMenu();
        }
    });

    burger.addEventListener("mousedown", function (e) {
        e.preventDefault();
    });

    function toggleMenu(){
        menu.classList.toggle("menu_active");
        burger.classList.toggle("burger_active");
        document.body.classList.toggle("_hidden-overflow");
    }
}


document.addEventListener("DOMContentLoaded", burger);