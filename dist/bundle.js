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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n// index.ts\nconst todoItem_1 = __webpack_require__(/*! ./models/todoItem */ \"./src/models/todoItem.ts\");\nconst todoList_1 = __webpack_require__(/*! ./services/todoList */ \"./src/services/todoList.ts\");\nconst typeGuards_1 = __webpack_require__(/*! ./utils/typeGuards */ \"./src/utils/typeGuards.ts\");\nconst textTodoList = new todoList_1.TodoList();\nconst dateTodoList = new todoList_1.TodoList();\nclass TodoApp {\n    // @logAddition\n    static addItem(list, item) {\n        list.addTodoItem(item);\n    }\n    static addTextTodoItem(text) {\n        if ((0, typeGuards_1.isString)(text)) {\n            const item = new todoItem_1.TodoItem(text);\n            this.addItem(textTodoList, item);\n        }\n        else {\n            console.error('Invalid text format');\n        }\n    }\n    static addDateTodoItem(date) {\n        if ((0, typeGuards_1.isDate)(date)) {\n            const item = new todoItem_1.TodoItem(date);\n            this.addItem(dateTodoList, item);\n        }\n        else {\n            console.error('Invalid date format');\n        }\n    }\n    static listAllItems() {\n        console.log('Text Todo List:', textTodoList.listAllTodoItems());\n        console.log('Date Todo List:', dateTodoList.listAllTodoItems());\n    }\n}\n// Példa használat:\nTodoApp.addTextTodoItem('Buy groceries');\nTodoApp.addDateTodoItem(new Date());\nTodoApp.listAllItems();\n\n\n//# sourceURL=webpack://hazi_2/./src/index.ts?");

/***/ }),

/***/ "./src/models/todoItem.ts":
/*!********************************!*\
  !*** ./src/models/todoItem.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.TodoItem = void 0;\nclass TodoItem {\n    constructor(content) {\n        this._id = TodoItem._counter++;\n        this._content = content;\n    }\n    get id() {\n        return this._id;\n    }\n    get content() {\n        return this._content;\n    }\n}\nexports.TodoItem = TodoItem;\nTodoItem._counter = 0;\n\n\n//# sourceURL=webpack://hazi_2/./src/models/todoItem.ts?");

/***/ }),

/***/ "./src/services/todoList.ts":
/*!**********************************!*\
  !*** ./src/services/todoList.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.TodoList = void 0;\nclass TodoList {\n    constructor() {\n        this._todos = new Map();\n    }\n    addTodoItem(item) {\n        this._todos.set(item.id, item);\n    }\n    deleteTodoItem(id) {\n        this._todos.delete(id);\n    }\n    listAllTodoItems() {\n        return Array.from(this._todos.values());\n    }\n}\nexports.TodoList = TodoList;\n\n\n//# sourceURL=webpack://hazi_2/./src/services/todoList.ts?");

/***/ }),

/***/ "./src/utils/typeGuards.ts":
/*!*********************************!*\
  !*** ./src/utils/typeGuards.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.isDate = exports.isString = void 0;\nfunction isString(value) {\n    return typeof value === 'string';\n}\nexports.isString = isString;\nfunction isDate(value) {\n    return value instanceof Date;\n}\nexports.isDate = isDate;\n\n\n//# sourceURL=webpack://hazi_2/./src/utils/typeGuards.ts?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;