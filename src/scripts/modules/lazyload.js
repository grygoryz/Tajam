const galleryWrapper = document.querySelector(".gallery__wrapper");
const button = document.querySelector(".gallery__button");
const items = galleryWrapper.querySelectorAll("[data-src]");

let lastIndex;
const STEP = 4;

loadPart(12);

button.onclick = (e) => {
    e.preventDefault();
    loadPart(STEP);

    if (lastIndex + 1 === items.length) hideButton();
};

function loadPart(n){
    let startIndex = lastIndex + 1 || 0;
    for (let i = startIndex; i < startIndex + n; i++){
        let item = items[i];
        if (!item) return;

        showItem(item, item.dataset.src);
        lastIndex = i;
    }
}

function showItem(container, src){
    container.insertAdjacentHTML("afterbegin", `<img data-pic src="${src}" alt="">`);
    container.classList.add("gallery__item_shown");
    setTimeout(() => {
        container.classList.add("gallery__item_transitioning")
    })
}

function hideButton(){
    button.classList.add("gallery__button_fading");

    setTimeout(() => {
        button.style.visibility = "hidden";
        button.ontransitionend = button.onclick = null;
    });
    // button.ontransitionend = (e) => {
    //     if (e.propertyName !== "opacity") return;
    //
    // }
}
