/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadContact() {\n    const content = document.createElement('div');\n\n    const header = document.createElement('h1');\n    header.textContent += \"Contact Us\";\n    content.appendChild(header);\n    \n    // person 1\n    const person1 = document.createElement('div');\n    const name1 = document.createElement('h3');\n    name1.textContent += \"Manager\";\n    person1.appendChild(name1);\n    const phone1 = document.createElement('h5');\n    phone1.textContent += \"Phone Number: 123-456-7890\";\n    person1.appendChild(phone1);\n    const email1 = document.createElement('h5');\n    email1.textContent += \"Email: manager@email.com\";\n    person1.appendChild(email1);\n    content.appendChild(person1);\n    \n    // person 2\n    const person2 = document.createElement('div');\n    const name2 = document.createElement('h3');\n    name2.textContent += \"Chef\";\n    person2.appendChild(name2);\n    const phone2 = document.createElement('h5');\n    phone2.textContent += \"Phone Number: 0987-654-321\";\n    person2.appendChild(phone2);\n    const email2 = document.createElement('h5');\n    email2.textContent += \"Email: chef@email.com\";\n    person2.appendChild(email2);\n    content.appendChild(person2);\n\n    const homeImage = new Image();\n    homeImage.src = '../src/contact.jpg';\n    homeImage.style = 'width: 60vw';\n    content.appendChild(homeImage);\n    \n    document.body.appendChild(content);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://odin_restaurant_page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadHome() {\n    const content = document.createElement('div');\n\n    const homeImage = new Image();\n    homeImage.src = '../src/restaurant.jpg';\n    homeImage.style = 'width: 60vw';\n    content.appendChild(homeImage);\n    \n    const header = document.createElement('h1');\n    header.textContent += \"ShadeBolt\";\n    content.appendChild(header);\n    \n    const subheader = document.createElement('h3');\n    subheader.textContent += \"The restaurant of wealth\";\n    content.appendChild(subheader);\n\n    const description = document.createElement('p');\n    description.textContent += \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\";\n    content.appendChild(description);\n\n    document.body.appendChild(content);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://odin_restaurant_page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\nfunction manageNav() {\n    const nav = document.createElement('nav');\n    const body = document.body;\n\n    // create nav buttons\n    const homeButton = document.createElement('button');\n    homeButton.textContent = \"Home\";\n    nav.appendChild(homeButton);\n    const menuButton = document.createElement('button');\n    menuButton.textContent = \"Menu\";\n    nav.appendChild(menuButton);\n    const contactButton = document.createElement('button');\n    contactButton.textContent = \"Contact\";\n    nav.appendChild(contactButton);\n    \n    function resetPage() {\n        body.innerHTML = \"\";\n        document.body.appendChild(nav);\n    }\n    // add event listeners to nav buttons\n    homeButton.addEventListener('click', () => {\n        resetPage();\n        (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    });\n    menuButton.addEventListener('click', () => {\n        resetPage();\n        (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    });\n    contactButton.addEventListener('click', () => {\n        resetPage();\n        (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n\n    document.body.appendChild(nav);\n    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n}\nmanageNav();\n\n//# sourceURL=webpack://odin_restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadMenu() {\n    const content = document.createElement('div');\n    \n    const header = document.createElement('h1');\n    header.textContent += \"Our Menu\";\n    content.appendChild(header);\n\n    // food 1\n    const food1 = document.createElement('div');\n    const food1Name = document.createElement('h2');\n    food1Name.textContent = \"Steak\";\n    food1.appendChild(food1Name);\n    const food1Image = new Image();\n    food1Image.src = '../src/steak.jpg';\n    food1Image.style = 'width: 40vw';\n    food1.appendChild(food1Image);\n    const food1Price = document.createElement('h3');\n    food1Price.textContent = \"Price: 80$\";\n    food1.appendChild(food1Price);\n    content.appendChild(food1);\n\n    // food 2\n    const food2 = document.createElement('div');\n    const food2Name = document.createElement('h2');\n    food2Name.textContent = \"Lobster\";\n    food2.appendChild(food2Name);\n    const food2Image = new Image();\n    food2Image.src = '../src/lobster.jpg';\n    food2Image.style = 'width: 40vw';\n    food2.appendChild(food2Image);\n    const food2Price = document.createElement('h3');\n    food2Price.textContent = \"Price: 120$\";\n    food2.appendChild(food2Price);\n    content.appendChild(food2);\n\n    // food 3\n    const food3 = document.createElement('div');\n    const food3Name = document.createElement('h2');\n    food3Name.textContent = \"Ice Cream\";\n    food3.appendChild(food3Name);\n    const food3Image = new Image();\n    food3Image.src = '../src/ice-cream.jpg';\n    food3Image.style = 'width: 40vw';\n    food3.appendChild(food3Image);\n    const food3Price = document.createElement('h3');\n    food3Price.textContent = \"Price: 20$\";\n    food3.appendChild(food3Price);\n    content.appendChild(food3);\n\n    document.body.appendChild(content);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://odin_restaurant_page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;