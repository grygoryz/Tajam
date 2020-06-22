// options = [
//      {
//        el: <el>
//        duration: <int> (default = 1)
//        animation: <string> or <arr> ([str1, str2, str3 ... ])
//        observable: <el> (default = this.el)
//        limit: <int> (default = 0)
//        breakpoints: { (max-width)
//              1000: {
//
//              }
//              500: {
//
//              }
//              ...
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

    // hide elems, instead of cases when elem is on top or it's animation disabled
    function prepare(){
        for (let item of options){
            let {el, observable, animation} = getCurrentProps(item);

            if (!animation) continue;

            if (isOnTop(observable || el)) {
                item.disabled = true;
                continue;
            }

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
            if (item.disabled) continue;

            let {el, animation, limit = 0, duration = 1, observable} = getCurrentProps(item);

            if (!animation) {
                if (isHidden(el)) show(el);
                continue;
            }

            if (isPartialVisible(observable || el, limit)){
                attachAnimation(el, animation, duration);
                show(el);
                item.disabled = true;
            }
        }

        isScrolling = false;
    }

    function attachAnimation(el, animation, duration) {
        if (typeof animation === "string") {
            el.style.animation = animation;
        } else {
            el.style.animation = animation.join(",");
        }
        el.style.animationDuration = `${duration}s`;
    }

    function isPartialVisible(el, limit) {
        let coords = el.getBoundingClientRect();
        return ((coords.top + coords.height >= 0) && (coords.height + window.innerHeight - limit >= coords.bottom));
    }

    function getCurrentProps(item){
        let breakpoints = item.breakpoints;
        let itemCopy = {...item};
        if (!breakpoints) return itemCopy;

        for (let breakpoint in breakpoints){
            if (clientWidth <= breakpoint){
                Object.assign(itemCopy, breakpoints[breakpoint]);
                break;
            }
        }

        return itemCopy;
    }

    function isHidden(el){
        return el.classList.contains("_hide")
    }

    function isOnTop(el){
        return el.getBoundingClientRect().bottom <= 0;
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
        animation: "leftToRight",
        limit: 50,
        observable: document.querySelector(".about__content"),
        breakpoints: {
            1024: {
                animation: ["leftToRight", "fadeIn"]
            },
            680: {
                animation: "scaleIncrease",
                duration: 1.5
            }
        }
    },
    {
        el: document.querySelector(".about__article"),
        animation: "rightToLeft",
        limit: 50,
        observable: document.querySelector(".about__content"),
        breakpoints: {
            1024: {
                animation: ["rightToLeft","fadeIn"]
            },
            680: {
                animation: "bottomToTop",
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
        animation: ["scaleIncrease", "fadeIn"],
        limit: 35,
        duration: 0.5
    },
    {
        el: document.querySelector(".expertise__row"),
        animation: ["topToBottom", "fadeIn"],
        limit: 50,
        duration: 1,
        breakpoints: {
            850: {
                animation: ["leftToRight", "fadeIn"],
            },
            540: {
                animation: null
            }
        }
    },
    {
        el: document.querySelector(".expertise__row").nextElementSibling,
        animation: ["topToBottom", "fadeIn"],
        limit: 50,
        duration: 1,
        breakpoints: {
            850: {
                animation: ["rightToLeft", "fadeIn"],
            },
            540: {
                animation: null
            }
        }
    },
        ...setToAllMatches(".expertise__col", {
            breakpoints: {
                540: {
                    animation: ["scaleIncrease", "fadeIn"],
                    duration: 0.5
                }
            }
        }),
    {
        el: document.querySelector(".team__section-head"),
        animation: ["scaleIncrease","fadeIn"],
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
        animation: ["bottomToTop","fadeIn"],
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
        animation: ["bottomToTop", "fadeIn"],
        limit: 20,
        duration: 0.3
    },
    {
        el: document.querySelector(".quotes__slider"),
        animation: ["scaleIncrease", "fadeIn"],
        limit: 50,
        duration: 0.7
    },
    {
        el: document.querySelector(".contact__form-wrapper"),
        animation: "leftToRight",
        limit: 50,
        observable: document.querySelector(".contact"),
        breakpoints: {
            1180: {
                animation: ["leftToRight", "fadeIn"],
            },
            715: {
                animation: null,
            }
        }
    },
    {
        el: document.querySelector(".contact__title"),
        breakpoints: {
            715: {
                animation: ["scaleIncrease","fadeIn"],
                limit: 35,
                duration: 0.5
            }
        }
    },
    {
      el: document.querySelector(".form-contact"),
      breakpoints: {
          715: {
              animation: "fadeIn",
              duration: 1.3
          }
      }
    },
    {
       el: document.querySelector(".form-contact__button"),
       breakpoints: {
           715: {
               animation: ["fadeIn", "bottomToTop"],
               duration: 0.6,
               limit: 30
           }
       }
    },
    {
        el: document.querySelector(".contact__clients"),
        animation: "rightToLeft",
        limit: 50,
        observable: document.querySelector(".contact"),
        breakpoints: {
            1180: {
                animation: ["rightToLeft", "fadeIn"],
            },
            715: {
                animation: null,
            }
        }
    },
    {
        el: document.querySelector(".clients-contact__title"),
        breakpoints: {
            715: {
                animation: ["scaleIncrease","fadeIn"],
                limit: 35,
                duration: 0.5
            }
        }
    },
    {
        el: document.querySelector(".clients-contact__list"),
        breakpoints: {
            715: {
                animation: "fadeIn",
                duration: 1.3
            }
        }
    },
    {
        el: document.querySelector(".footer__container"),
        animation: "fadeIn"
    }
];

function setToAllMatches(selector, options){
    const elemsList = Array.from(document.querySelectorAll(selector));
    return elemsList.map(elem => {
        return {
            el: elem,
            ...options
        }
    })
}



init(options);
