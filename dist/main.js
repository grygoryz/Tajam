/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/init */ "./scripts/init.js");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/styles.scss */ "./styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./scripts/init.js":
/*!*************************!*\
  !*** ./scripts/init.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burger */ "./scripts/modules/burger.js");
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_burger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_swiper_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/swiper-slider */ "./scripts/modules/swiper-slider.js");
/* harmony import */ var _modules_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/video */ "./scripts/modules/video.js");
/* harmony import */ var _modules_video__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_video__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_lightbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/lightbox */ "./scripts/modules/lightbox.js");
/* harmony import */ var _modules_lazyload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/lazyload */ "./scripts/modules/lazyload.js");
/* harmony import */ var _modules_lazyload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_modules_lazyload__WEBPACK_IMPORTED_MODULE_4__);
// ------------ BURGER ---------------------
 // ------------ SWIPER-SLIDER ---------------------

 // ------------ VIMEO-VIDEO ---------------------

 // ------------- LIGHTBOX -------------------------

 // ------------- LAZYLOAD -------------------------

 // - поставить ширину контейнера в base если все будет норм
// - сделать треугольник svg адаптивным
// - разобраться с z-index
// - поуменьшать отступы на маленьких разрешениях
// - наблюдать за изменением разрешения и производить swiper.update()
// - установить PostCSS и autoprefixer
// - подумать над таймаутом  modal.classList.add("modal_active");
// - не забивается ли стэк при каждом вызове инит?

/***/ }),

/***/ "./scripts/modules/burger.js":
/*!***********************************!*\
  !*** ./scripts/modules/burger.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function burger() {
  var burger = document.querySelector(".burger");
  var menu = document.querySelector(".menu");
  burger.addEventListener("click", function () {
    toggleMenu();

    menu.onclick = function (e) {
      if (!e.target.closest(".menu__link")) return;
      menu.onclick = null;
      toggleMenu();
    };
  });
  burger.addEventListener("mousedown", function (e) {
    e.preventDefault();
  });

  function toggleMenu() {
    menu.classList.toggle("menu_active");
    burger.classList.toggle("burger_active");
    document.body.classList.toggle("_hidden-overflow");
  }
}

document.addEventListener("DOMContentLoaded", burger);

/***/ }),

/***/ "./scripts/modules/lazyload.js":
/*!*************************************!*\
  !*** ./scripts/modules/lazyload.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var galleryWrapper = document.querySelector(".gallery__wrapper");
var button = document.querySelector(".gallery__button");
var items = galleryWrapper.querySelectorAll("[data-src]");
var lastIndex;
var STEP = 4;
loadPart(12);

button.onclick = function (e) {
  e.preventDefault();
  loadPart(STEP);
  if (lastIndex + 1 === items.length) hideButton();
};

function loadPart(n) {
  var startIndex = lastIndex + 1 || 0;

  for (var i = startIndex; i < startIndex + n; i++) {
    var item = items[i];
    if (!item) return;
    showItem(item, item.dataset.src);
    lastIndex = i;
  }
}

function showItem(container, src) {
  container.insertAdjacentHTML("afterbegin", "<img data-pic src=\"".concat(src, "\" alt=\"\">"));
  container.classList.add("gallery__item_shown");
  setTimeout(function () {
    container.classList.add("gallery__item_transitioning");
  });
}

function hideButton() {
  button.classList.add("gallery__button_fading");

  button.ontransitionend = function (e) {
    if (e.propertyName !== "opacity") return;
    button.style.visibility = "hidden";
    button.ontransitionend = button.onclick = null;
  };
}

/***/ }),

/***/ "./scripts/modules/lightbox.js":
/*!*************************************!*\
  !*** ./scripts/modules/lightbox.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/css/swiper.min.css */ "../node_modules/swiper/css/swiper.min.css");
/* harmony import */ var swiper_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "../node_modules/swiper/js/swiper.esm.bundle.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Lightbox = /*#__PURE__*/function () {
  function Lightbox(options) {
    _classCallCheck(this, Lightbox);

    this.container = options.container;
    this.selector = options.selector;

    this._init();

    this._observe();
  }

  _createClass(Lightbox, [{
    key: "_init",
    value: function _init() {
      var items = this.container.querySelectorAll(this.selector);

      this._numberItems(items);

      var sources = this._getSources(items);

      var modal = this._createModal(sources);

      var slider = this._getSlider(modal);

      this.container.onclick = OnClick;

      function OnClick(e) {
        var item = e.target.closest("[data-pic]");
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

          modal.ontransitionend = function () {
            modal.remove();
            modal.ontransitionend = null;
          };

          this.onclick = null;
        }
      }
    }
  }, {
    key: "_numberItems",
    value: function _numberItems(items) {
      items.forEach(function (node, index) {
        return node.setAttribute("data-index", index);
      });
    }
  }, {
    key: "_getSources",
    value: function _getSources(items) {
      return Array.from(items).map(function (item) {
        return item.getAttribute("src");
      });
    }
  }, {
    key: "_createModal",
    value: function _createModal(sources) {
      var modal = document.createElement("div");
      modal.classList.add("modal");
      modal.innerHTML = " <div class=\"modal__container\">\n        <div class=\"modal__close\"><span></span></div>\n        <div class=\"modal__slider-container swiper-container\">\n            <div class=\"modal__slider-wrapper swiper-wrapper\">".concat(getSlides(), "</div>\n            <div class=\"modal__button-prev swiper-button-prev swiper-button-white\"></div>\n            <div class=\"modal__button-next swiper-button-next swiper-button-white\"></div>\n            <div class=\"modal__pagination swiper-pagination\"></div>\n        </div>\n    </div>");

      function getSlides() {
        var items = "";

        for (var i = 0; i < sources.length; i++) {
          var markup = "<div class=\"swiper-slide modal__slide\">\n                                  <div class=\"swiper-zoom-container\">\n                                      <div style=\"background-image: url(".concat(sources[i], ")\" class=\"modal__content swiper-zoom-target\"></div>\n                                  </div>\n                              </div>");
          items += markup;
        }

        return items;
      }

      return modal;
    }
  }, {
    key: "_getSlider",
    value: function _getSlider(modal) {
      var container = modal.querySelector(".modal__slider-container");
      var prevButton = modal.querySelector(".modal__button-prev");
      var nextButton = modal.querySelector(".modal__button-next");
      var pagination = modal.querySelector(".modal__pagination");
      return new swiper__WEBPACK_IMPORTED_MODULE_1__["default"](container, {
        slidesPerView: 1,
        speed: 600,
        navigation: {
          nextEl: nextButton,
          prevEl: prevButton
        },
        keyboard: {
          enabled: true
        },
        spaceBetween: 30,
        zoom: true,
        pagination: {
          el: pagination,
          type: 'fraction'
        }
      });
    }
  }, {
    key: "_observe",
    value: function _observe() {
      var _this = this;

      var observer = new MutationObserver(function (mutationRecords) {
        mutationRecords.forEach(function (mutation) {
          if (mutation.addedNodes.length || mutation.removedNodes.length) _this._init();
        });
      });
      observer.observe(this.container, {
        childList: true,
        subtree: true
      });
    }
  }]);

  return Lightbox;
}(); // window.onload = () => {
//
// }


document.addEventListener("DOMContentLoaded", function () {
  var galleryWrapper = document.querySelector(".gallery__wrapper");
  var gallery = new Lightbox({
    container: galleryWrapper,
    selector: "[data-pic]"
  });
});

/***/ }),

/***/ "./scripts/modules/swiper-slider.js":
/*!******************************************!*\
  !*** ./scripts/modules/swiper-slider.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/css/swiper.min.css */ "../node_modules/swiper/css/swiper.min.css");
/* harmony import */ var swiper_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper */ "../node_modules/swiper/js/swiper.esm.bundle.js");


var swiper = new swiper__WEBPACK_IMPORTED_MODULE_1__["default"]('.header-slider__container', {
  slidesPerView: 1,
  loop: true,
  speed: 600,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  spaceBetween: 30,
  autoplay: {
    delay: 5000
  }
});

/***/ }),

/***/ "./scripts/modules/video.js":
/*!**********************************!*\
  !*** ./scripts/modules/video.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var player = document.createElement("iframe");
player.classList.add("video__player");
player.src = "https://player.vimeo.com/video/310197402?autoplay=1&title=0&byline=0&portrait=0";
player.allow = "autoplay;fullscreen";
player.allowFullscreen = true;
var container = document.querySelector(".about__video");
var preview = document.querySelector(".preview-video");
var triangle = document.querySelector(".play-button__triangle");
preview.addEventListener("click", ShowPlayer);

preview.onmousedown = function () {
  triangle.classList.add("play-button__triangle_active");
};

preview.onmouseup = function () {
  triangle.classList.remove("play-button__triangle_active");
};

function ShowPlayer() {
  hidePreview();
  container.append(player);
}

function hidePreview() {
  preview.classList.add("preview-video_fading");

  preview.ontransitionend = function () {
    preview.style.display = "none";
  };
}

/***/ }),

/***/ "./styles/styles.scss":
/*!****************************!*\
  !*** ./styles/styles.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi @babel/polyfill ./index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"../node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./index.js */"./index.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map