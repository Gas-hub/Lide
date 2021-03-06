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
/******/ 	__webpack_require__.p = "/";
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
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/components/modal-window/modal-window.js":
/*!************************************************************!*\
  !*** ./src/blocks/components/modal-window/modal-window.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var modalWindowOverlay = document.querySelector('.modal-window-overlay');
var modalWindowClose = document.querySelector('.modal-window__close');
var labelText = document.querySelector('.form__name');
var inputText = document.querySelector('.form__row > input');
var labelTel = document.querySelector('.form__tel');
var inputTel = document.querySelector('input[type="tel"]');
modalWindowClose.addEventListener('click', function () {
  modalWindowOverlay.setAttribute('style', 'display: none');
  labelText.classList.remove('label--active');
  inputText.value = '';
  labelTel.classList.remove('label--active');
  inputTel.value = '';
});
labelText.addEventListener('click', function () {
  labelText.classList.add('label--active');
  inputText.focus();
});
inputText.addEventListener('focus', function () {
  labelText.classList.add('label--active');
});
labelTel.addEventListener('click', function () {
  labelTel.classList.add('label--active');
  inputTel.focus();
});
inputTel.addEventListener('focus', function () {
  labelTel.classList.add('label--active');
});

/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var footerButton = document.querySelector('.footer__button');
var modalWindowOverlay = document.querySelector('.modal-window-overlay');
footerButton.addEventListener('click', function () {
  modalWindowOverlay.setAttribute('style', 'display: flex');
});

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var headerButton = document.querySelector('.header__button');
var modalWindowOverlay = document.querySelector('.modal-window-overlay');
headerButton.addEventListener('click', function () {
  modalWindowOverlay.setAttribute('style', 'display: flex');
});

/***/ }),

/***/ "./src/blocks/modules/menu/menu.js":
/*!*****************************************!*\
  !*** ./src/blocks/modules/menu/menu.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var menuBurgerOpen = document.querySelector('[data-menuBurgerOpen]');
var menuBurger = document.querySelector('[data-menuBurger]');
menuBurgerOpen.addEventListener('click', function () {
  if (!menuBurger.getAttribute('style')) {
    menuBurger.setAttribute('style', 'display: flex');
  } else {
    menuBurger.removeAttribute('style');
  }
});

/***/ }),

/***/ "./src/blocks/modules/s-catalog-items/s-catalog-items.js":
/*!***************************************************************!*\
  !*** ./src/blocks/modules/s-catalog-items/s-catalog-items.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()('.slider').slick({
  prevArrow: '<span class="slider-arrow-catalog--left"></span>',
  nextArrow: '<span class="slider-arrow-catalog--right"></span>',
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: 0,
  autoplaySpeed: 2000,
  arrows: true,
  pauseOnHover: true,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 900,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 610,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
});

/***/ }),

/***/ "./src/blocks/modules/s-gallery/s-gallery.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/s-gallery/s-gallery.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var glightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! glightbox */ "./node_modules/glightbox/dist/js/glightbox.min.js");
/* harmony import */ var glightbox__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(glightbox__WEBPACK_IMPORTED_MODULE_0__);

var lightbox = glightbox__WEBPACK_IMPORTED_MODULE_0___default()({
  touchNavigation: true,
  loop: true
});

/***/ }),

/***/ "./src/blocks/modules/s-hero/s-hero.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/s-hero/s-hero.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()('.slick-slider').slick({
  prevArrow: '<span class="slider-arrow--left"></span>',
  nextArrow: '<span class="slider-arrow--right"></span>',
  dots: true,
  responsive: [{
    breakpoint: 767,
    settings: {
      dots: false
    }
  }]
});

/***/ }),

/***/ "./src/blocks/pages/p-contacts/p-contacts.js":
/*!***************************************************!*\
  !*** ./src/blocks/pages/p-contacts/p-contacts.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import $ from 'jquery';
// import 'slick-carousel';
// $('.slider').slick({
//     prevArrow: '<span class="slider-arrow-catalog--left"></span>',
//     nextArrow: '<span class="slider-arrow-catalog--right"></span>',
//     infinite: true,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: 0,
//     autoplaySpeed: 2000,
//     arrows: true,
//     pauseOnHover: true,
//     responsive: [
//         {
//             breakpoint: 1200,
//             settings: {
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//             }
//         },
//         {
//             breakpoint: 900,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1
//             }
//         },
//         {
//             breakpoint: 610,
//             settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//             }
//         }
//     ]
// });

/***/ }),

/***/ "./src/blocks/pages/p-product-card/p-product-card.js":
/*!***********************************************************!*\
  !*** ./src/blocks/pages/p-product-card/p-product-card.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$('.product-slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
  responsive: [{
    breakpoint: 992,
    settings: {
      dots: true
    }
  }]
});
$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.product-slider-for',
  focusOnSelect: true,
  centerMode: true,
  centerPadding: '0px',
  arrows: false
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_components_modal_window_modal_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../blocks/components/modal-window/modal-window */ "./src/blocks/components/modal-window/modal-window.js");
/* harmony import */ var _blocks_components_modal_window_modal_window__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_components_modal_window_modal_window__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_menu_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/menu/menu */ "./src/blocks/modules/menu/menu.js");
/* harmony import */ var _modules_menu_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modules_menu_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modules_s_hero_s_hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/s-hero/s-hero */ "./src/blocks/modules/s-hero/s-hero.js");
/* harmony import */ var _modules_s_catalog_items_s_catalog_items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/s-catalog-items/s-catalog-items */ "./src/blocks/modules/s-catalog-items/s-catalog-items.js");
/* harmony import */ var _blocks_pages_p_product_card_p_product_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../blocks/pages/p-product-card/p-product-card */ "./src/blocks/pages/p-product-card/p-product-card.js");
/* harmony import */ var _blocks_pages_p_product_card_p_product_card__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_blocks_pages_p_product_card_p_product_card__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_s_gallery_s_gallery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/s-gallery/s-gallery */ "./src/blocks/modules/s-gallery/s-gallery.js");
/* harmony import */ var _blocks_pages_p_contacts_p_contacts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../blocks/pages/p-contacts/p-contacts */ "./src/blocks/pages/p-contacts/p-contacts.js");
/* harmony import */ var _blocks_pages_p_contacts_p_contacts__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_blocks_pages_p_contacts_p_contacts__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_8__);










/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
 // import "./import/components";

/***/ })

/******/ });
//# sourceMappingURL=main.js.map