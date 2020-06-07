
// options = [
//      {
//        el: <el>
//        duration: <int> (default = 1)
//        animation: <string> (scale, left-to-right, right-to-left)
//        observable: <el> (default = this.el)
//        limit: <int> (default = 0)
//        breakpoints: { (max-width)
//              1000: {
//
//              }
//        }
//      }
// ];





function init(options){
    let isScrolling = false;
    let clientWidth = document.documentElement.clientWidth;


    prepare();


    window.addEventListener("scroll", OnScroll);
    window.addEventListener("resize", OnResize);
    document.addEventListener("DOMContentLoaded", handleScrolling);

    function prepare(){
        for (let item of options){
            // let observable = item.observable || item.el;
            // if (observable.getBoundingClientRect().bottom <= 0) {
            //     console.log(observable.getBoundingClientRect().bottom);
            //     item.animated = true;
            //     console.log(item)
            //     continue;
            // }

            hide(item.el)
        }
    }

    function OnScroll() {
        if (!isScrolling){
            window.requestAnimationFrame(handleScrolling);
        }
        isScrolling = true;
    }

    function handleScrolling() {
        for (let item of options){
            // if (item.animated) continue;
            let {el, animation, limit = 0, duration = 1, observable} = getCurrentProps(item);

            if (isPartialVisible(observable || el, limit)){
                el.classList.add(`_${animation}`);
                el.style.animationDuration = `${duration}s`;
                show(el);
                // item.animated = true;
            }
        }

        isScrolling = false;
    }

    function isPartialVisible(el, limit) {
        let coords = el.getBoundingClientRect();
        return ((coords.top + coords.height >= 0) && (coords.height + window.innerHeight - limit >= coords.bottom));
    }

    function getCurrentProps(item){
        let breakpoints = item.breakpoints;
        if (!breakpoints) return item;

        for (let breakpoint in breakpoints){

            if (clientWidth <= breakpoint){
                let options = breakpoints[breakpoint];

                for (let option in options){
                   item[option] = options[option];
                }
                break;
            }
        }

        return item;
    }

    function OnResize(){
        clientWidth = document.documentElement.clientWidth;
    }

    function hide(el){
        el.classList.add("_hide");
    }

    function show(el){
        el.classList.remove("_hide");
    }
}



let options = [
    {
        el: document.querySelector(".header__content"),
        animation: "fadeIn",
        duration: 2
    },
    {
        el: document.querySelector(".about__picture"),
        animation: "left-to-right",
        limit: 50,
        observable: document.querySelector(".about__content"),
        breakpoints: {
            1024: {
                animation: "left-to-right-fadeIn"
            },
            680: {
                animation: "scale-increase",
                duration: 0.5
            }
        }
    },
    {
        el: document.querySelector(".about__article"),
        animation: "right-to-left",
        limit: 50,
        observable: document.querySelector(".about__content"),
        breakpoints: {
            1024: {
                animation: "right-to-left-fadeIn"
            },
            680: {
                animation: "bottom-to-top",
                duration: 0.5
            }
        }
    },
    {
        el: document.querySelector(".about__video"),
        animation: "fadeIn",
    },
    {
        el: document.querySelector(".expertise__section-head"),
        animation: "scale-increase-fadeIn",
        limit: 35,
        duration: 0.5
    },
    {
        el: document.querySelector(".expertise__row"),
        animation: "top-to-bottom-fadeIn",
        limit: 50,
        duration: 1,
        breakpoints: {
            850: {
                animation: "left-to-right-fadeIn",
            },
            540: {
                animation: "scale-increase-fadeIn",
            }
        }
    },
    {
        el: document.querySelector(".expertise__row").nextElementSibling,
        animation: "top-to-bottom-fadeIn",
        limit: 50,
        duration: 1,
        breakpoints: {
            850: {
                animation: "right-to-left-fadeIn",
            },
            540: {
                animation: "scale-increase-fadeIn",
                observable: document.querySelector(".expertise__row")
            }
        }
    },
    {
        el: document.querySelector(".team__section-head"),
        animation: "scale-increase-fadeIn",
        limit: 35,
        duration: 0.5
    },
    {
        el: document.querySelector(".team__row"),
        animation: "fadeIn",
        limit: 50,
        duration: 2
    },
    {
        el: document.querySelector(".team__footer"),
        animation: "bottom-to-top-fadeIn",
        limit: 20,
        duration: 0.7
    },
    {
        el: document.querySelector(".works__gallery"),
        animation: "fadeIn",
        limit: 20
    },
    {
        el: document.querySelector(".gallery__button-wrapper"),
        animation: "bottom-to-top-fadeIn",
        limit: 20,
        duration: 0.7
    },
    {
        el: document.querySelector(".quotes__slider"),
        animation: "scale-increase-fadeIn",
        limit: 50,
        duration: 0.7
    },
    {
        el: document.querySelector(".contact__form-wrapper"),
        animation: "left-to-right",
        limit: 50,
        observable: document.querySelector(".contact"),
        breakpoints: {
            1180: {
                animation: "left-to-right-fadeIn",
            },
            715: {
                animation: "scale-increase",
                duration: 0.7
            }
        }
    },
    {
        el: document.querySelector(".contact__clients"),
        animation: "right-to-left",
        limit: 50,
        observable: document.querySelector(".contact"),
        breakpoints: {
            1180: {
                animation: "right-to-left-fadeIn",
            },
            715: {
                animation: "scale-increase",
                duration: 0.7,
                observable: null
            }
        }
    },
    {
        el: document.querySelector(".footer__container"),
        animation: "fadeIn"
    }
];


init(options);
// document.addEventListener("DOMContentLoaded", () => {
//
// });




