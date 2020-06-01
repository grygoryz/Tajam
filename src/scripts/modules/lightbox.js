import "swiper/css/swiper.min.css"
import Swiper from 'swiper';

class Lightbox{
    constructor(options) {
        this.container = options.container;
        this.selector = options.selector;

        this._init()
    }

    _init(){
        const items = this.container.querySelectorAll(this.selector);
        items.forEach((node, index) => node.setAttribute(`data-index`, index));

        const sources = Array.from(items).map(item => item.getAttribute("src"));

        const modal = this._createModal(sources);
        const slider = this._getSlider(modal);

        this.container.onclick = OnClick;

        function OnClick(e) {
            const item = e.target.closest("[data-pic]");
            if (!item) return;

            openModal(item.dataset.index);

            function openModal(index) {
                document.body.append(modal);
                slider.update();
                slider.slideTo(index, 0);

                modal.querySelector(".modal__close").onclick = closeModal;

                function closeModal() {
                    modal.remove();
                    this.onclick = null;
                }
            }
        }
    }

    _createModal(sources){
        let modal = document.createElement("div");
        modal.classList.add("modal");
        modal.innerHTML = ` <div class="modal__container">
        <div class="modal__close"><span></span></div>
        <div class="modal__slider-container swiper-container">
            <div class="modal__slider-wrapper swiper-wrapper">${getSlides()}</div>
            <div class="modal__button-prev swiper-button-prev swiper-button-white"></div>
            <div class="modal__button-next swiper-button-next swiper-button-white"></div>
        </div>
    </div>`;

        function getSlides() {
            let items = "";
            for (let i = 0; i < sources.length; i++){
                let markup = `<div style="background-image: url(${sources[i]})" class="swiper-slide modal__slide"></div>`;
                items += markup;
            }
            return items;
        }

        return modal;
    }

    _getSlider(modal){
        const container = modal.querySelector(".modal__slider-container");
        const prevButton = modal.querySelector(".modal__button-prev");
        const nextButton = modal.querySelector(".modal__button-next");

        return new Swiper(container, {
            slidesPerView: 1,
            speed: 600,
            navigation: {
                nextEl: nextButton,
                prevEl: prevButton,
            },
            keyboard: {
                enabled: true,
            },
            spaceBetween: 30
        });
    }
}


const galleryWrapper = document.querySelector(".gallery__wrapper");

let gallery = new Lightbox({
    container: galleryWrapper,
    selector: "[data-pic]"
});

// const swiper = new Swiper('.modal__slider-container', {
//     slidesPerView: 1,
//     speed: 600,
//     navigation: {
//         nextEl: '.modal__button-next',
//         prevEl: '.modal__button-prev',
//     },
//     keyboard: {
//         enabled: true,
//     },
// });





