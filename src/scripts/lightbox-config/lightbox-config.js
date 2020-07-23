import Lightbox from "../libs/lightbox/lightbox";

document.addEventListener("DOMContentLoaded", () => {
    const galleryWrapper = document.querySelector(".gallery__wrapper");

    let gallery = new Lightbox({
        container: galleryWrapper,
        selector: "[data-pic]"
    });
});