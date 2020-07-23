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

        showItem(item, item.dataset.src, item.dataset.realsrc);
        lastIndex = i;
    }
}

function showItem(container, src, realsrc){
    container.insertAdjacentHTML("afterbegin", `<img data-pic src="${src}" data-realsrc="${realsrc}" alt="">`);
    container.classList.add("gallery__item_shown");
    setTimeout(() => {
        container.classList.add("gallery__item_transitioning")
    }, 100)
}

function hideButton(){
    button.classList.add("gallery__button_fading");


    setTimeout(() => {
        button.style.visibility = "hidden";
        button.onclick = null;
        button.parentElement.classList.add("gallery__button-wrapper_narrow");
    });
}


