import setOnScrollAnimation from "../libs/onscroll-animation/onscroll-animation";

const options = [
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
                animation: ["rightToLeft", "fadeIn"]
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
        animation: ["scaleIncrease", "fadeIn"],
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
        animation: ["bottomToTop", "fadeIn"],
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
                animation: ["scaleIncrease", "fadeIn"],
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
                animation: ["scaleIncrease", "fadeIn"],
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

function setToAllMatches(selector, options) {
    const elemsList = Array.from(document.querySelectorAll(selector));
    return elemsList.map(elem => {
        return {
            el: elem,
            ...options
        }
    })
}

setOnScrollAnimation(options);