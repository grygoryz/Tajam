import "swiper/css/swiper.min.css"
import Swiper from 'swiper';

const headerSwiper = new Swiper('.header-slider__container', {
    slidesPerView: 1,
    loop: true,
    speed: 600,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    spaceBetween: 30,
    autoplay: {
         delay: 5000
    }
});



const quotesSwiper = new Swiper('.quotes-slider__container', {
    slidesPerView: 1,
    loop: true,
    speed: 600,
    spaceBetween: 30,
    allowTouchMove: false,
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
});


const paginationSwiper = new Swiper('.pagination-slider__container', {
    slidesPerView: 3,
    loop: true,
    speed: 600,
    centeredSlides: true,
    navigation: {
        nextEl: '.pagination-slider__button-next',
        prevEl: '.pagination-slider__button-prev',
    },
    spaceBetween: 13,
    slideToClickedSlide: true,
    on: {
        slideChangeTransitionStart: function () {
            quotesSwiper.slideToLoop(this.realIndex);
        },
    },
    breakpoints: {
        500: {
            slidesPerView: 5
        }
    },
    autoplay: {
        delay: 5000
    }
});


