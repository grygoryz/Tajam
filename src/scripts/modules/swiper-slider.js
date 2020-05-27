import "swiper/css/swiper.min.css"
import Swiper from 'swiper';

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    speed: 600,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // renderBullet: function (index, className) {
        //     return `<span class=${className}></span>`
        // }
    },
    spaceBetween: 30,

    // autoplay: {
    //     delay: 5000
    // },
});

