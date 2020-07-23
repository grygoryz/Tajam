import "./onscroll-animation.scss"

// options = [
//      {
//        el: <el>
//        duration: <number> (default = 1)
//        animation: <string> | <arr> ([str1, str2, str3 ... ])
//        observable: <el> (default = this.el)
//        limit: <number> (default = 0)
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

export default function setOnScrollAnimation(options) {
    let isScrolling = false;
    let clientWidth = document.documentElement.clientWidth;

    prepare();

    window.addEventListener("scroll", OnScroll);
    window.addEventListener("resize", OnResize);
    document.addEventListener("DOMContentLoaded", handleScrolling);

    // hide elems, instead of cases when elem is on top or it's animation disabled
    function prepare() {
        for (let item of options) {
            const {el, observable, animation} = getCurrentProps(item);

            if (!animation) continue;

            if (isOnTop(observable || el)) {
                item.disabled = true;
                continue;
            }

            hide(item.el)
        }
    }

    function OnScroll() {
        if (!isScrolling) {
            window.requestAnimationFrame(handleScrolling);
        }
        isScrolling = true;
    }

    function handleScrolling() {
        for (let item of options) {
            if (item.disabled) continue;

            const {el, animation, limit = 0, duration = 1, observable} = getCurrentProps(item);

            if (!animation) {
                if (isHidden(el)) show(el);
                continue;
            }

            if (isPartialVisible(observable || el, limit)) {
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
        const coords = el.getBoundingClientRect();
        return ((coords.top + coords.height >= 0) && (coords.height + window.innerHeight - limit >= coords.bottom));
    }

    function getCurrentProps(item) {
        let breakpoints = item.breakpoints;
        if (!breakpoints) return item;

        let itemCopy = {...item};

        for (let breakpoint in breakpoints) {
            if (clientWidth <= breakpoint) {
                Object.assign(itemCopy, breakpoints[breakpoint]);
                break;
            }
        }

        return itemCopy;
    }

    function isHidden(el) {
        return el.classList.contains("_hide")
    }

    function isOnTop(el) {
        return el.getBoundingClientRect().bottom <= 0;
    }

    function OnResize() {
        clientWidth = document.documentElement.clientWidth;
    }

    function hide(el) {
        el.classList.add("_hide");
    }

    function show(el) {
        el.classList.remove("_hide");
    }
}




