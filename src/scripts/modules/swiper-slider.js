import "swiper/css/swiper.min.css"
import Swiper from 'swiper';

const swiper = new Swiper('.header-slider__container', {
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
    },
});

