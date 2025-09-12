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

/***/ "./src/components/static-module/module.scss":
/*!**************************************************!*\
  !*** ./src/components/static-module/module.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://d5-extension-example-modules/./src/components/static-module/module.scss?");

/***/ }),

/***/ "./src/components/static-module/style.scss":
/*!*************************************************!*\
  !*** ./src/components/static-module/style.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://d5-extension-example-modules/./src/components/static-module/style.scss?");

/***/ }),

/***/ "./src/components/static-module/custom-css.ts":
/*!****************************************************!*\
  !*** ./src/components/static-module/custom-css.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cssFields: () => (/* binding */ cssFields)\n/* harmony export */ });\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module.json */ \"./src/components/static-module/module.json\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n// WordPress dependencies.\n\n\nvar customCssFields = _module_json__WEBPACK_IMPORTED_MODULE_1__.customCssFields;\ncustomCssFields.contentContainer.label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Content Container', 'd5-extension-example-modules');\ncustomCssFields.title.label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title', 'd5-extension-example-modules');\ncustomCssFields.summary.label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Summary', 'd5-extension-example-modules');\ncustomCssFields.content.label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Content', 'd5-extension-example-modules');\ncustomCssFields.image.label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image', 'd5-extension-example-modules');\nvar cssFields = __assign({}, customCssFields);\n\n\n//# sourceURL=webpack://d5-extension-example-modules/./src/components/static-module/custom-css.ts?");

/***/ }),

/***/ "./src/components/static-module/edit.tsx":
/*!***********************************************!*\
  !*** ./src/components/static-module/edit.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   StaticModuleEdit: () => (/* binding */ StaticModuleEdit)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @divi/module */ \"@divi/module\");\n/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/static-module/styles.tsx\");\n/* harmony import */ var _module_classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module-classnames */ \"./src/components/static-module/module-classnames.ts\");\n/* harmony import */ var _module_script_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module-script-data */ \"./src/components/static-module/module-script-data.tsx\");\n// External Dependencies.\n\n// Divi Dependencies.\n\n\n\n\n/**\n * Static Module edit component of visual builder.\n *\n * @since ??\n *\n * @param {StaticModuleEditProps} props React component props.\n *\n * @returns {ReactElement}\n */\nvar StaticModuleEdit = function (props) {\n    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;\n    var attrs = props.attrs, elements = props.elements, id = props.id, name = props.name;\n    // Get image attributes.\n    var imageSrc = (_e = (_d = (_c = (_b = (_a = attrs === null || attrs === void 0 ? void 0 : attrs.image) === null || _a === void 0 ? void 0 : _a.innerContent) === null || _b === void 0 ? void 0 : _b.desktop) === null || _c === void 0 ? void 0 : _c.value) === null || _d === void 0 ? void 0 : _d.src) !== null && _e !== void 0 ? _e : '';\n    var imageAlt = (_k = (_j = (_h = (_g = (_f = attrs === null || attrs === void 0 ? void 0 : attrs.image) === null || _f === void 0 ? void 0 : _f.innerContent) === null || _g === void 0 ? void 0 : _g.desktop) === null || _h === void 0 ? void 0 : _h.value) === null || _j === void 0 ? void 0 : _j.alt) !== null && _k !== void 0 ? _k : '';\n    // When summary is reset, placeholder is displayed since reset restores default value.\n    // When summary is empty, placeholder is hidden since empty string indicates intentional user action.\n    // To modify this behavior, developers can update the summary attribute with a default value during module render.\n    // if ('' === attrs?.summary?.innerContent?.desktop?.value) {\n    //   elements.attrs = {\n    //     ...elements.attrs,\n    //     summary: {\n    //       ...elements.attrs.summary,\n    //       innerContent: {\n    //         desktop: {\n    //           value: staticMetadata?.attributes?.summary?.default?.innerContent?.desktop?.value ?? '',\n    //         },\n    //       },\n    //     },\n    //   };\n    // }\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ModuleContainer, { attrs: attrs, elements: elements, id: id, name: name, stylesComponent: _styles__WEBPACK_IMPORTED_MODULE_2__.ModuleStyles, classnamesFunction: _module_classnames__WEBPACK_IMPORTED_MODULE_3__.moduleClassnames, scriptDataComponent: _module_script_data__WEBPACK_IMPORTED_MODULE_4__.ModuleScriptData },\n        elements.styleComponents({\n            attrName: 'module',\n        }),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: \"example_static_module__inner\" },\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: \"example_static_module__image\" },\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", { src: imageSrc, alt: imageAlt })),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: \"example_static_module__content-container\" },\n                elements.render({\n                    attrName: 'title',\n                }),\n                elements.render({\n                    attrName: 'summary',\n                }),\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: \"example_static_module__content\" }, elements.render({\n                    attrName: 'content',\n                }))))));\n};\n\n\n//# sourceURL=webpack://d5-extension-example-modules/./src/components/static-module/edit.tsx?");

/***/ }),

/***/ "./src/components/static-module/index.ts":
/*!***********************************************!*\
  !*** ./src/components/static-module/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   staticModule: () => (/* binding */ staticModule)\n/* harmony export */ });\n/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module.json */ \"./src/components/static-module/module.json\");\n/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ \"./src/components/static-module/edit.tsx\");\n/* harmony import */ var _placeholder_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./placeholder-content */ \"./src/components/static-module/placeholder-content.ts\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.scss */ \"./src/components/static-module/style.scss\");\n/* harmony import */ var _module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module.scss */ \"./src/components/static-module/module.scss\");\n// Local dependencies.\n\n\n\n// Styles.\n\n\nvar staticModule = {\n    // Imported json has no inferred type hence type-cast is necessary.\n    metadata: _module_json__WEBPACK_IMPORTED_MODULE_0__,\n    placeholderContent: _placeholder_content__WEBPACK_IMPORTED_MODULE_2__.placeholderContent,\n    renderers: {\n        edit: _edit__WEBPACK_IMPORTED_MODULE_1__.StaticModuleEdit,\n    },\n};\n\n\n//# sourceURL=webpack://d5-extension-example-modules/./src/components/static-module/index.ts?");

/***/ }),

/***/ "./src/components/static-module/module-classnames.ts":
/*!***********************************************************!*\
  !*** ./src/components/static-module/module-classnames.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   moduleClassnames: () => (/* binding */ moduleClassnames)\n/* harmony export */ });\n/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @divi/module */ \"@divi/module\");\n/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * Module classnames function for Static Module.\n *\n * @since ??\n *\n * @param {ModuleClassnamesParams<StaticModuleAttrs>} param0 Function parameters.\n */\nvar moduleClassnames = function (_a) {\n    var _b, _c;\n    var classnamesInstance = _a.classnamesInstance, attrs = _a.attrs;\n    // Text Options.\n    classnamesInstance.add((0,_divi_module__WEBPACK_IMPORTED_MODULE_0__.textOptionsClassnames)((_c = (_b = attrs === null || attrs === void 0 ? void 0 : attrs.module) === null || _b === void 0 ? void 0 : _b.advanced) === null || _c === void 0 ? void 0 : _c.text));\n};\n\n\n//# sourceURL=webpack://d5-extension-example-modules/./src/components/static-module/module-classnames.ts?");

/***/ }),

/***/ "./src/components/static-module/module-script-data.tsx":
/*!*************************************************************!*\
  !*** ./src/components/static-module/module-script-data.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ModuleScriptData: () => (/* binding */ ModuleScriptData)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * Static module's script data component.\n *\n * @since ??\n *\n * @param {ModuleScriptDataProps<StaticModuleAttrs>} props React component props.\n *\n * @returns {ReactElement}\n */\nvar ModuleScriptData = function (_a) {\n    var elements = _a.elements;\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, elements.scriptData({\n        attrName: 'module',\n    })));\n};\n\n\n//# sourceURL=webpack://d5-extension-example-modules/./src/components/static-module/module-script-data.tsx?");

/***/ }),

/***/ "./src/components/static-module/placeholder-content.ts":
/*!*************************************************************!*\
  !*** ./src/components/static-module/placeholder-content.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   placeholderContent: () => (/* binding */ placeholderContent)\n/* harmony export */ });\n// Divi dependencies - using local placeholder to avoid build issues during smart loading test\n// Note: This replicates the standard Divi placeholder content structure\nvar placeholder = {\n    title: 'Your Title Goes Here',\n    body: '<p>Your content goes here. Edit or remove this text inline or in the module Content settings. You can also style every aspect of this content in the module Design settings and even apply custom CSS to this text in the module Advanced settings.</p>',\n    image: {\n        landscape: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA4MCIgaGVpZ2h0PSI1NDAiIHZpZXdCb3g9IjAgMCAxMDgwIDU0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iI0VCRUJFQiIgZD0iTTAgMGgxMDgwdjU0MEgweiIvPgogICAgICAgIDxwYXRoIGQ9Ik00NDUuNjQ5IDU0MGgtOTguOTk1TDE0NC42NDkgMzM3Ljk5NSAwIDQ4Mi42NDR2LTk4Ljk5NWwxMTYuMzY1LTExNi4zNjVjMTUuNjItMTUuNjIgNDAuOTQ3LTE1LjYyIDU2LjU2OCAwTDQ0NS42NSA1NDB6IiBmaWxsLW9wYWNpdHk9Ii4xIiBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz4KICAgICAgICA8Y2lyY2xlIGZpbGwtb3BhY2l0eT0iLjA1IiBmaWxsPSIjMDAwIiBjeD0iMzMxIiBjeT0iMTQ4IiByPSI3MCIvPgogICAgICAgIDxwYXRoIGQ9Ik0xMDgwIDM3OXYxMTMuMTM3TDcyOC4xNjIgMTQwLjMgMzI4LjQ2MiA1NDBIMjE1LjMyNEw2OTkuODc4IDU1LjQ0NmMxNS42Mi0xNS42MiA0MC45NDgtMTUuNjIgNTYuNTY4IDBMMTA4MCAzNzl6IiBmaWxsLW9wYWNpdHk9Ii4yIiBmaWxsPSIjMDAwIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz4KICAgIDwvZz4KPC9zdmc+Cg==',\n    },\n};\nvar placeholderContent = {\n    title: {\n        innerContent: {\n            desktop: {\n                value: placeholder.title,\n            },\n        }\n    },\n    content: {\n        innerContent: {\n            desktop: {\n                value: placeholder.body,\n            },\n        }\n    },\n    image: {\n        innerContent: {\n            desktop: {\n                value: {\n                    src: placeholder.image.landscape,\n                },\n            },\n        },\n    },\n};\n\n\n//# sourceURL=webpack://d5-extension-example-modules/./src/components/static-module/placeholder-content.ts?");

/***/ }),

/***/ "./src/components/static-module/styles.tsx":
/*!*************************************************!*\
  !*** ./src/components/static-module/styles.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ModuleStyles: () => (/* binding */ ModuleStyles)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @divi/module */ \"@divi/module\");\n/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _custom_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-css */ \"./src/components/static-module/custom-css.ts\");\n// External dependencies.\n\n// Divi dependencies.\n\n\n/**\n * Static Module's style components.\n *\n * @since ??\n */\nvar ModuleStyles = function (_a) {\n    var _b, _c;\n    var attrs = _a.attrs, elements = _a.elements, settings = _a.settings, orderClass = _a.orderClass, mode = _a.mode, state = _a.state, noStyleTag = _a.noStyleTag;\n    var textSelector = \"\".concat(orderClass, \" .example_static_module__content-container\");\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.StyleContainer, { mode: mode, state: state, noStyleTag: noStyleTag },\n        elements.style({\n            attrName: 'module',\n            styleProps: {\n                disabledOn: {\n                    disabledModuleVisibility: settings === null || settings === void 0 ? void 0 : settings.disabledModuleVisibility,\n                },\n                advancedStyles: [\n                    {\n                        componentName: \"divi/text\",\n                        props: {\n                            selector: textSelector,\n                            attr: (_c = (_b = attrs === null || attrs === void 0 ? void 0 : attrs.module) === null || _b === void 0 ? void 0 : _b.advanced) === null || _c === void 0 ? void 0 : _c.text,\n                        }\n                    }\n                ]\n            },\n        }),\n        elements.style({\n            attrName: 'image',\n        }),\n        elements.style({\n            attrName: 'title',\n        }),\n        elements.style({\n            attrName: 'summary',\n        }),\n        elements.style({\n            attrName: 'content',\n        }),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CssStyle, { selector: orderClass, attr: attrs.css, cssFields: _custom_css__WEBPACK_IMPORTED_MODULE_2__.cssFields })));\n};\n\n\n//# sourceURL=webpack://d5-extension-example-modules/./src/components/static-module/styles.tsx?");

/***/ }),

/***/ "./src/icons/index.ts":
/*!****************************!*\
  !*** ./src/icons/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   moduleD4: () => (/* reexport module object */ _module_d4__WEBPACK_IMPORTED_MODULE_2__),\n/* harmony export */   moduleDynamic: () => (/* reexport module object */ _module_dynamic__WEBPACK_IMPORTED_MODULE_3__),\n/* harmony export */   moduleParent: () => (/* reexport module object */ _module_parent__WEBPACK_IMPORTED_MODULE_0__),\n/* harmony export */   moduleStatic: () => (/* reexport module object */ _module_static__WEBPACK_IMPORTED_MODULE_1__)\n/* harmony export */ });\n/* harmony import */ var _module_parent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module-parent */ \"./src/icons/module-parent/index.tsx\");\n/* harmony import */ var _module_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module-static */ \"./src/icons/module-static/index.tsx\");\n/* harmony import */ var _module_d4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module-d4 */ \"./src/icons/module-d4/index.tsx\");\n/* harmony import */ var _module_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module-dynamic */ \"./src/icons/module-dynamic/index.tsx\");\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://d5-extension-example-modules/./src/icons/index.ts?");

/***/ }),

/***/ "./src/icons/module-d4/index.tsx":
/*!***************************************!*\
  !*** ./src/icons/module-d4/index.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   component: () => (/* binding */ component),\n/* harmony export */   name: () => (/* binding */ name),\n/* harmony export */   viewBox: () => (/* binding */ viewBox)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n// Icon data.\nvar name = 'example/module-d4'; // Unique name.\nvar viewBox = '0 96 960 960'; // You will need to adjust this to match your SVG.\nvar component = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M480.276 1006q-88.916 0-167.743-33.104-78.828-33.103-137.577-91.852-58.749-58.749-91.852-137.535Q50 664.723 50 575.542q0-89.438 33.162-167.491 33.163-78.053 92.175-136.942 59.011-58.889 137.533-91.999Q391.393 146 480.458 146q89.428 0 167.518 33.093T784.94 271.06q58.874 58.874 91.967 137.215Q910 486.615 910 575.808q0 89.192-33.11 167.518-33.11 78.326-91.999 137.337-58.889 59.012-137.167 92.174Q569.447 1006 480.276 1006ZM523 774h97V378h-97v161h-86V378h-97v259h183v137Z\" })); }; // Your SVG path. without the svg tag.\n\n\n//# sourceURL=webpack://d5-extension-example-modules/./src/icons/module-d4/index.tsx?");

/***/ }),

/***/ "./src/icons/module-dynamic/index.tsx":
/*!********************************************!*\
  !*** ./src/icons/module-dynamic/index.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   component: () => (/* binding */ component),\n/* harmony export */   name: () => (/* binding */ name),\n/* harmony export */   viewBox: () => (/* binding */ viewBox)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n// Icon data.\nvar name = 'example/module-dynamic'; // Unique name.\nvar viewBox = '0 96 960 960'; // You will need to adjust this to match your SVG.\nvar component = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"m552 240-36 312h192L415 912h-21l48-264H282l248-408h22Z\" })); }; // Your SVG path. without the svg tag.\n\n\n//# sourceURL=webpack://d5-extension-example-modules/./src/icons/module-dynamic/index.tsx?");

/***/ }),

/***/ "./src/icons/module-parent/index.tsx":
/*!*******************************************!*\
  !*** ./src/icons/module-parent/index.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   component: () => (/* binding */ component),\n/* harmony export */   name: () => (/* binding */ name),\n/* harmony export */   viewBox: () => (/* binding */ viewBox)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n// Icon data.\nvar name = 'example/module-parent'; // Unique name.\nvar viewBox = '0 96 960 960'; // You will need to adjust this to match your SVG.\nvar component = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M238 879 62 704l91-90 84 85 170-171 91 91-260 260Zm0-312L62 392l91-90 85 85 169-171 91 91-260 260Zm291 229V668h369v128H529Zm0-312V356h369v128H529Z\" })); }; // Your SVG path. without the svg tag.\n\n\n//# sourceURL=webpack://d5-extension-example-modules/./src/icons/module-parent/index.tsx?");

/***/ }),

/***/ "./src/icons/module-static/index.tsx":
/*!*******************************************!*\
  !*** ./src/icons/module-static/index.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   component: () => (/* binding */ component),\n/* harmony export */   name: () => (/* binding */ name),\n/* harmony export */   viewBox: () => (/* binding */ viewBox)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n// Icon data.\nvar name = 'example/module-static'; // Unique name.\nvar viewBox = '0 96 960 960'; // You will need to adjust this to match your SVG.\nvar component = function () { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M114 838V710h491v128H114Zm0-198V512h733v128H114Zm0-198V314h733v128H114Z\" })); }; // Your SVG path. without the svg tag.\n\n\n//# sourceURL=webpack://d5-extension-example-modules/./src/icons/module-static/index.tsx?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _divi_module_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @divi/module-library */ \"@divi/module-library\");\n/* harmony import */ var _divi_module_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_module_library__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_static_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/static-module */ \"./src/components/static-module/index.ts\");\n/* harmony import */ var _module_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module-icons */ \"./src/module-icons.ts\");\n\n\n\n// Smart loading test: Only import staticModule (other modules removed)\n// import { childModule } from './components/child-module';\n// import { d4Module } from './components/d4-module';\n// import { dynamicModule } from './components/dynamic-module';\n// import { parentModule } from './components/parent-module';\n\n\n// Register modules - Smart loading test: Only register staticModule\n(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addAction)('divi.moduleLibrary.registerModuleLibraryStore.after', 'extensionExample', function () {\n    (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_2__.registerModule)(_components_static_module__WEBPACK_IMPORTED_MODULE_3__.staticModule.metadata, (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(_components_static_module__WEBPACK_IMPORTED_MODULE_3__.staticModule, 'metadata'));\n    // Removed for smart loading test:\n    // registerModule(dynamicModule.metadata, omit(dynamicModule, 'metadata'));\n    // registerModule(childModule.metadata, omit(childModule, 'metadata'));\n    // registerModule(parentModule.metadata, omit(parentModule, 'metadata'));\n    // registerModule(d4Module.metadata, omit(d4Module, 'metadata'));\n});\n\n\n//# sourceURL=webpack://d5-extension-example-modules/./src/index.ts?");

/***/ }),

/***/ "./src/module-icons.ts":
/*!*****************************!*\
  !*** ./src/module-icons.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons */ \"./src/icons/index.ts\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n// Smart loading test: Only import staticModule icon\n\n// Add module icons to the icon library - Smart loading test: Only staticModule\n(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('divi.iconLibrary.icon.map', 'extensionExample', function (icons) {\n    var _a;\n    return __assign(__assign({}, icons), (_a = {}, _a[_icons__WEBPACK_IMPORTED_MODULE_1__.moduleStatic.name] = _icons__WEBPACK_IMPORTED_MODULE_1__.moduleStatic, _a));\n});\n\n\n//# sourceURL=webpack://d5-extension-example-modules/./src/module-icons.ts?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = lodash;

/***/ }),

/***/ "@divi/module":
/*!**********************************!*\
  !*** external ["divi","module"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = divi.module;

/***/ }),

/***/ "@divi/module-library":
/*!*****************************************!*\
  !*** external ["divi","moduleLibrary"] ***!
  \*****************************************/
/***/ ((module) => {

module.exports = divi.moduleLibrary;

/***/ }),

/***/ "react":
/*!***********************************!*\
  !*** external ["vendor","React"] ***!
  \***********************************/
/***/ ((module) => {

module.exports = vendor.React;

/***/ }),

/***/ "@wordpress/hooks":
/*!****************************************!*\
  !*** external ["vendor","wp","hooks"] ***!
  \****************************************/
/***/ ((module) => {

module.exports = vendor.wp.hooks;

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external ["vendor","wp","i18n"] ***!
  \***************************************/
/***/ ((module) => {

module.exports = vendor.wp.i18n;

/***/ }),

/***/ "./src/components/static-module/module.json":
/*!**************************************************!*\
  !*** ./src/components/static-module/module.json ***!
  \**************************************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('{\"name\":\"example/static-module\",\"d4Shortcode\":\"\",\"title\":\"Static Module\",\"titles\":\"Static Modules\",\"moduleIcon\":\"example/module-static\",\"moduleClassName\":\"example_static_module\",\"moduleOrderClassName\":\"example_static_module\",\"category\":\"module\",\"attributes\":{\"module\":{\"type\":\"object\",\"selector\":\"{{selector}}\",\"default\":{\"meta\":{\"adminLabel\":{\"desktop\":{\"value\":\"Static Module\"}}},\"advanced\":{\"text\":{\"text\":{\"desktop\":{\"value\":{\"color\":\"light\"}}}}},\"decoration\":{\"spacing\":{\"desktop\":{\"value\":{\"margin\":{\"top\":\"0px\",\"right\":\"auto\",\"bottom\":\"30px\",\"left\":\"auto\"}}}}}},\"defaultPrintedStyle\":{\"decoration\":{\"background\":{\"desktop\":{\"value\":{\"color\":\"#ecf4f7\"}}}}},\"styleProps\":{\"border\":{\"important\":true}},\"settings\":{\"meta\":{\"adminLabel\":{}},\"advanced\":{\"link\":{},\"text\":{},\"htmlAttributes\":{}},\"decoration\":{\"background\":{},\"sizing\":{},\"spacing\":{},\"border\":{},\"boxShadow\":{},\"filters\":{},\"transform\":{},\"animation\":{},\"overflow\":{},\"disabledOn\":{},\"transition\":{},\"position\":{},\"zIndex\":{},\"scroll\":{},\"sticky\":{}}}},\"image\":{\"type\":\"object\",\"selector\":\"{{selector}} .example_static_module__image img\",\"styleProps\":{\"border\":{\"important\":true}},\"settings\":{\"innerContent\":{\"groupType\":\"group-items\",\"items\":{\"src\":{\"groupSlug\":\"contentImage\",\"priority\":10,\"render\":true,\"subName\":\"src\",\"label\":\"Image\",\"description\":\"Upload an Image\",\"features\":{\"sticky\":false,\"dynamicContent\":false},\"component\":{\"name\":\"divi/upload\",\"type\":\"field\"}}}},\"decoration\":{\"border\":{\"groupType\":\"group-item\",\"item\":{\"groupSlug\":\"designImage\",\"priority\":10,\"render\":true,\"component\":{\"type\":\"group\",\"name\":\"divi/border\",\"props\":{\"grouped\":false}}}},\"spacing\":{\"groupType\":\"group-item\",\"item\":{\"groupSlug\":\"designImage\",\"priority\":20,\"render\":true,\"component\":{\"type\":\"group\",\"name\":\"divi/spacing\",\"props\":{\"grouped\":false}}}},\"boxShadow\":{\"groupType\":\"group-item\",\"item\":{\"groupSlug\":\"designImage\",\"priority\":30,\"render\":true,\"component\":{\"type\":\"group\",\"name\":\"divi/box-shadow\",\"props\":{\"grouped\":false}}}},\"filters\":{\"groupType\":\"group-item\",\"item\":{\"groupSlug\":\"designImage\",\"priority\":40,\"render\":true,\"component\":{\"type\":\"group\",\"name\":\"divi/filters\",\"props\":{\"grouped\":false}}}}}}},\"title\":{\"type\":\"object\",\"selector\":\"{{selector}} .example_static_module__title\",\"default\":{\"decoration\":{\"font\":{\"font\":{\"desktop\":{\"value\":{\"headingLevel\":\"h2\"}}}}}},\"defaultPrintedStyle\":{\"decoration\":{\"font\":{\"font\":{\"desktop\":{\"value\":{\"size\":\"26px\",\"lineHeight\":\"1em\",\"weight\":\"500\"}}}}}},\"styleProps\":{\"font\":{\"important\":{\"font\":{\"desktop\":{\"value\":{\"color\":true}}}}}},\"settings\":{\"innerContent\":{\"groupType\":\"group-item\",\"item\":{\"groupName\":\"mainContent\",\"priority\":10,\"render\":true,\"attrName\":\"title.innerContent\",\"label\":\"Title\",\"description\":\"Input your value to action title here.\",\"features\":{\"sticky\":false,\"dynamicContent\":false},\"component\":{\"name\":\"divi/text\",\"type\":\"field\"}}},\"decoration\":{\"font\":{\"priority\":10,\"component\":{\"props\":{\"groupLabel\":\"Title Text\",\"fieldLabel\":\"Title\",\"fields\":{\"headingLevel\":{\"render\":false}}}}}}},\"tagName\":\"h2\",\"attributes\":{\"class\":\"example_static_module__title\"},\"inlineEditor\":\"plainText\",\"elementType\":\"heading\",\"childrenSanitizer\":\"et_core_esc_previously\"},\"summary\":{\"type\":\"object\",\"selector\":\"{{selector}} .example_static_module__summary\",\"tagName\":\"div\",\"attributes\":{\"class\":\"example_static_module__summary\"},\"inlineEditor\":\"plainText\",\"childrenSanitizer\":\"et_core_esc_previously\",\"default\":{\"innerContent\":{\"desktop\":{\"value\":\"This is a brief summary that provides an overview of the content below. It can span multiple lines to give readers a comprehensive understanding of what to expect in the main content section.\"}}},\"settings\":{\"innerContent\":{\"groupType\":\"group-item\",\"item\":{\"groupName\":\"mainContent\",\"priority\":15,\"render\":true,\"attrName\":\"summary.innerContent\",\"label\":\"Summary\",\"description\":\"Input your summary text here. This field supports multiple lines.\",\"features\":{\"sticky\":false,\"dynamicContent\":false,\"responsive\":false},\"component\":{\"name\":\"divi/textarea\",\"type\":\"field\",\"props\":{\"showPlaceholderOnEmpty\":true}}}},\"decoration\":{\"font\":{\"priority\":10,\"component\":{\"props\":{\"groupLabel\":\"Summary Text\",\"fieldLabel\":\"Summary\"}}}}}},\"content\":{\"type\":\"object\",\"selector\":\"{{selector}} .example_static_module__content\",\"tagName\":\"div\",\"attributes\":{\"class\":\"example_static_module__content\"},\"inlineEditor\":\"richText\",\"childrenSanitizer\":\"et_core_esc_previously\",\"styleProps\":{\"bodyFont\":{\"selectors\":{\"desktop\":{\"value\":\"{{selector}} .example_static_module__content\"}}}},\"settings\":{\"innerContent\":{\"groupType\":\"group-item\",\"item\":{\"groupName\":\"mainContent\",\"priority\":20,\"render\":true,\"attrName\":\"content.innerContent\",\"label\":\"Content\",\"description\":\"Input the main text content for your module here.\",\"features\":{\"sticky\":false,\"dynamicContent\":false},\"component\":{\"name\":\"divi/richtext\",\"type\":\"field\"}}},\"decoration\":{\"bodyFont\":{}}}}},\"customCssFields\":{\"contentContainer\":{\"subName\":\"contentContainer\",\"selectorSuffix\":\" .example_static_module__content-container\"},\"title\":{\"subName\":\"title\",\"selector\":\"div{{selector}}\",\"selectorSuffix\":\" .example_static_module__title\"},\"summary\":{\"subName\":\"summary\",\"selectorSuffix\":\" .example_static_module__summary\"},\"content\":{\"subName\":\"content\",\"selectorSuffix\":\" .example_static_module__content\"},\"image\":{\"subName\":\"image\",\"selectorSuffix\":\" .example_static_module__image img\"}},\"settings\":{\"content\":\"auto\",\"design\":\"auto\",\"advanced\":\"auto\",\"groups\":{\"contentImage\":{\"panel\":\"content\",\"priority\":20,\"groupName\":\"contentImage\",\"multiElements\":true,\"component\":{\"name\":\"divi/composite\",\"props\":{\"groupLabel\":\"Image\"}}},\"designImage\":{\"panel\":\"design\",\"priority\":10,\"groupName\":\"designImage\",\"multiElements\":true,\"component\":{\"name\":\"divi/composite\",\"props\":{\"groupLabel\":\"Image Style\"}}}}}}');\n\n//# sourceURL=webpack://d5-extension-example-modules/./src/components/static-module/module.json?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0,
/******/ 			"./vb-bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkd5_extension_example_modules"] = self["webpackChunkd5_extension_example_modules"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./vb-bundle"], () => (__webpack_require__("./src/index.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;