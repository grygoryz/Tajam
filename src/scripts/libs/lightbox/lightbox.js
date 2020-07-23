import "swiper/css/swiper.min.css"
import "./lightbox.scss"
import Swiper from 'swiper';

export default class Lightbox {
    constructor(options) {
        this.container = options.container;
        this.selector = options.selector;

        this._init();
        this._observe();
    }

    _init() {
        const items = this.container.querySelectorAll(this.selector);
        this._numberItems(items);

        const sources = this._getSources(items);
        this.modal = this._createModal(sources);

        this.container.onclick = this._OnClick.bind(this);
    }

    _OnClick(e) {
        const item = e.target.closest("[data-pic]");
        if (!item) return;

        this.modal.open(item.dataset.index);

        this.modal.element.onclick = (e) => {
            e.target.classList.contains("modal__close") && this.modal.close();
        };
    }

    _numberItems(items) {
        items.forEach((node, index) => node.setAttribute(`data-index`, index));
    }

    _getSources(items) {
        return Array.from(items).map(item => item.dataset.realsrc);
    }

    _createModal(sources) {
        const modal = document.createElement("div");
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
            for (let i = 0; i < sources.length; i++) {
                let markup = `<div class="swiper-slide modal__slide">                 
                                      <div class="modal__content">
                                            <img alt="" data-src="${sources[i]}" class="swiper-lazy modal__image">
                                            <div class="swiper-lazy-preloader swiper-lazy-preloader-white""></div>
                                      </div>  
                              </div>`;
                items += markup;
            }
            return items;
        }

        const slider = this._getSlider(modal);

        return {
            element: modal,
            open(index) {
                document.body.append(modal);
                document.body.classList.add("_hidden-overflow");
                slider.update();
                slider.slideTo(index, 0);
                modal.classList.add("modal_active");
            },
            close() {
                modal.classList.remove("modal_active");
                document.body.classList.remove("_hidden-overflow");
                modal.ontransitionend = () => {
                    modal.remove();
                    modal.ontransitionend = null;
                };
            }
        }
    }

    _getSlider(modal) {
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
            pagination: {
                el: pagination,
                type: 'fraction',
            },
            preloadImages: false,
            lazy: true,
            loadPrevNext: true
        });
    }

    _observe() {
        let observer = new MutationObserver((mutationRecords) => {
            for (let mutation of mutationRecords) {
                if (mutation.addedNodes.length || mutation.removedNodes.length) {
                    this._init();
                    break;
                }
            }
        });

        observer.observe(this.container, {
            childList: true,
            subtree: true
        })
    }
}

