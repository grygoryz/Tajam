import "swiper/css/swiper.min.css"
import Swiper from 'swiper';

class Lightbox{
    constructor(options) {
        this.container = options.container;
        this.selector = options.selector;

        this._init();
        this._observe();
    }

    _init(){
        const items = this.container.querySelectorAll(this.selector);

        this._numberItems(items);

        const sources = this._getSources(items);
        const modal = this._createModal(sources);
        const slider = this._getSlider(modal);

        this.container.onclick = OnClick;

        function OnClick(e) {
            const item = e.target.closest("[data-pic]");
            if (!item) return;

            openModal(item.dataset.index);

            function openModal(index) {
                document.body.append(modal);
                document.body.classList.add("_hidden-overflow");
                slider.update();
                slider.slideTo(index, 0);
                modal.classList.add("modal_active");

                modal.querySelector(".modal__close").onclick = closeModal;
            }

            function closeModal() {
                modal.classList.remove("modal_active");
                document.body.classList.remove("_hidden-overflow");
                modal.ontransitionend = () => {
                    modal.remove();
                    modal.ontransitionend = null;
                };
                this.onclick = null;
            }
        }
    }

    _numberItems(items){
        items.forEach((node, index) => node.setAttribute(`data-index`, index));
    }

    _getSources(items){
        return Array.from(items).map(item => item.getAttribute("src"));
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
            <div class="modal__pagination swiper-pagination"></div>
        </div>
    </div>`;

        function getSlides() {
            let items = "";
            for (let i = 0; i < sources.length; i++){
                let markup = `<div class="swiper-slide modal__slide">
                                  <div class="swiper-zoom-container">
                                      <div style="background-image: url(${sources[i]})" class="modal__content swiper-zoom-target"></div>
                                  </div>
                              </div>`;
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
        const pagination = modal.querySelector(".modal__pagination");

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
            spaceBetween: 30,
            zoom: true,
            pagination: {
                el: pagination,
                type: 'fraction',
            },
        });
    }

    _observe(){
        let observer = new MutationObserver((mutationRecords) => {
            mutationRecords.forEach((mutation) => {
                if (mutation.addedNodes.length || mutation.removedNodes.length) this._init();
            })
        });

        observer.observe(this.container, {
            childList: true,
            subtree: true
        })
    }

}


// window.onload = () => {
//
// }




document.addEventListener("DOMContentLoaded", () => {
    const galleryWrapper = document.querySelector(".gallery__wrapper");

    let gallery = new Lightbox({
        container: galleryWrapper,
        selector: "[data-pic]"
    });
})




