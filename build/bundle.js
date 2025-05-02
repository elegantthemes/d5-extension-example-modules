/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/child-module/custom-css.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssFields: () => (/* binding */ cssFields)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/child-module/module.json");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
// WordPress dependencies.


var customCssFields = _module_json__WEBPACK_IMPORTED_MODULE_1__.customCssFields;
customCssFields.contentContainer.label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Content Container', 'd5-extension-example-modules');
customCssFields.title.label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title', 'd5-extension-example-modules');
customCssFields.content.label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Content', 'd5-extension-example-modules');
customCssFields.icon.label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon', 'd5-extension-example-modules');
var cssFields = __assign({}, customCssFields);

/***/ }),

/***/ "./src/components/child-module/edit.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChildModuleEdit: () => (/* binding */ ChildModuleEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divi_module_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/module-library");
/* harmony import */ var _divi_module_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_module_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _divi_icon_library__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("@divi/icon-library");
/* harmony import */ var _divi_icon_library__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_divi_icon_library__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/child-module/styles.tsx");
/* harmony import */ var _module_classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/child-module/module-classnames.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _parent_module_module_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/components/parent-module/module.json");
// External Dependencies.

// Divi Dependencies.








/**
 * Child Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {ChildModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
var ChildModuleEdit = function (props) {
  var _a, _b;
  var attrs = props.attrs,
    elements = props.elements,
    id = props.id,
    name = props.name,
    parentAttrs = props.parentAttrs;
  var parentDefaultAttrs = (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_2__.generateDefaultAttrs)(_parent_module_module_json__WEBPACK_IMPORTED_MODULE_8__);
  var parentAttrsWithDefault = (0,lodash__WEBPACK_IMPORTED_MODULE_7__.merge)(parentDefaultAttrs, parentAttrs);
  var parentIconContent = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_3__.getAttrByMode)((_a = parentAttrsWithDefault === null || parentAttrsWithDefault === void 0 ? void 0 : parentAttrsWithDefault.icon) === null || _a === void 0 ? void 0 : _a.innerContent);
  var iconContent = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_3__.getAttrByMode)((_b = attrs === null || attrs === void 0 ? void 0 : attrs.icon) === null || _b === void 0 ? void 0 : _b.innerContent);
  var icon = (0,lodash__WEBPACK_IMPORTED_MODULE_7__.isEmpty)(iconContent) ? parentIconContent : iconContent;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ModuleContainer, {
    attrs: attrs,
    parentAttrs: parentAttrs,
    elements: elements,
    id: id,
    name: name,
    stylesComponent: _styles__WEBPACK_IMPORTED_MODULE_5__.ModuleStyles,
    classnamesFunction: _module_classnames__WEBPACK_IMPORTED_MODULE_6__.moduleClassnames,
    tag: "li"
  }, elements.styleComponents({
    attrName: 'module'
  }), icon && react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "example_child_module__icon et-pb-icon"
  }, (0,_divi_icon_library__WEBPACK_IMPORTED_MODULE_4__.processFontIcon)(icon)), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "example_child_module__content-container"
  }, elements.render({
    attrName: 'title'
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "example_child_module__content"
  }, elements.render({
    attrName: 'content'
  }))));
};

/***/ }),

/***/ "./src/components/child-module/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   childModule: () => (/* binding */ childModule)
/* harmony export */ });
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/components/child-module/module.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/child-module/edit.tsx");
/* harmony import */ var _settings_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/child-module/settings-content.tsx");
/* harmony import */ var _settings_design__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/child-module/settings-design.tsx");
/* harmony import */ var _placeholder_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/child-module/placeholder-content.ts");
/* harmony import */ var _module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/child-module/module.scss");
// Local dependencies.





// Styles.

/**
 * Child module.
 *
 * @since ??
 */
var childModule = {
  // Imported json has no inferred type hence type-cast is necessary.
  metadata: _module_json__WEBPACK_IMPORTED_MODULE_0__,
  placeholderContent: _placeholder_content__WEBPACK_IMPORTED_MODULE_4__.placeholderContent,
  settings: {
    content: _settings_content__WEBPACK_IMPORTED_MODULE_2__.SettingsContent,
    design: _settings_design__WEBPACK_IMPORTED_MODULE_3__.SettingsDesign
  },
  renderers: {
    edit: _edit__WEBPACK_IMPORTED_MODULE_1__.ChildModuleEdit
  },
  parentsName: ['example/parent-module']
};

/***/ }),

/***/ "./src/components/child-module/module-classnames.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleClassnames: () => (/* binding */ moduleClassnames)
/* harmony export */ });
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Module classnames function for Divi 4 Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<ChildModuleAttrs>} param0 Function parameters.
 */
var moduleClassnames = function (_a) {
  var _b, _c, _d;
  var classnamesInstance = _a.classnamesInstance,
    attrs = _a.attrs;
  // Text Options.
  classnamesInstance.add((0,_divi_module__WEBPACK_IMPORTED_MODULE_0__.textOptionsClassnames)((_d = (_c = (_b = attrs === null || attrs === void 0 ? void 0 : attrs.module) === null || _b === void 0 ? void 0 : _b.advanced) === null || _c === void 0 ? void 0 : _c.text) !== null && _d !== void 0 ? _d : {}, {
    color: false
  }));
};

/***/ }),

/***/ "./src/components/child-module/module.json":
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"name":"example/child-module","d4Shortcode":"","title":"Child Module","titles":"Child Modules","category":"child-module","moduleClassName":"example_child_module","moduleOrderClassName":"example_child_module","attributes":{"module":{"type":"object","selector":"{{selector}}","default":{"meta":{"adminLabel":{"desktop":{"value":"Child Module"}}}},"styleProps":{"border":{"important":true}},"settings":{"advanced":{"link":{},"text":{"component":{"props":{"fields":{"color":{"render":false}}}}},"htmlAttributes":{}},"decoration":{"background":{},"sizing":{},"spacing":{},"border":{},"boxShadow":{},"filters":{},"transform":{},"animation":{},"overflow":{},"disabledOn":{},"transition":{},"position":{},"zIndex":{},"scroll":{},"sticky":{}}}},"title":{"type":"object","selector":".example_parent_module {{selector}} .example_child_module__title","styleProps":{"font":{"important":{"font":{"desktop":{"value":{"color":true}}}}}},"settings":{"innerContent":{"groupType":"group-item","item":{"groupName":"mainContent","priority":10,"render":true,"attrName":"title.innerContent","label":"Title","description":"Input your value to action title here.","features":{"sticky":false,"dynamicContent":false},"component":{"name":"divi/text","type":"field"}}},"decoration":{"font":{"priority":10,"component":{"props":{"groupLabel":"Title Text","fieldLabel":"Title"}}}}},"tagName":"div","attributes":{"class":"example_child_module__title"},"inlineEditor":"plainText","elementType":"heading","childrenSanitizer":"et_core_esc_previously"},"content":{"type":"object","selector":".example_parent_module {{selector}} .example_child_module__content","tagName":"div","settings":{"innerContent":{"groupType":"group-item","item":{"groupName":"mainContent","priority":20,"render":true,"attrName":"content.innerContent","label":"Content","description":"Input the main text content for your module here.","features":{"sticky":false,"dynamicContent":false},"component":{"name":"divi/richtext","type":"field"}}},"decoration":{"bodyFont":{"attrName":"content.decoration.bodyFont"}}},"attributes":{"class":"example_child_module__content"},"inlineEditor":"richText","childrenSanitizer":"et_core_esc_previously"},"icon":{"type":"object","selector":"{{selector}} .example_child_module__icon.et-pb-icon","settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"contentIcon","attrName":"icon.innerContent","label":"Icon","description":"Pick an Icon","render":true,"priority":10,"features":{"sticky":false},"component":{"type":"field","name":"divi/icon-picker"}}},"advanced":{"color":{"groupType":"group-item","item":{"groupSlug":"designIcon","label":"Icon Color","description":"Here you can define a custom color for your icon.","render":true,"priority":10,"features":{"sticky":false},"component":{"type":"field","name":"divi/color-picker"}}},"size":{"groupType":"group-item","item":{"groupSlug":"designIcon","label":"Icon Size","description":"Here you can choose icon width.","render":true,"priority":20,"features":{"sticky":false},"component":{"type":"field","name":"divi/range","props":{"min":1,"max":120,"allowedUnits":["%","em","rem","px","cm","mm","in","pt","pc","ex","vh","vw"]}}}}}}}},"customCssFields":{"contentContainer":{"subName":"contentContainer","selectorSuffix":" .example_child_module__content-container"},"title":{"subName":"title","selectorSuffix":" .example_child_module__title"},"content":{"subName":"content","selectorSuffix":" .example_child_module__content"},"icon":{"subName":"icon","selectorSuffix":" .example_child_module__icon.et-pb-icon"}},"settings":{"advanced":"auto","groups":{"contentIcon":{"panel":"content","priority":20,"groupName":"contentIcon","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Icon"}}},"designIcon":{"panel":"design","priority":10,"groupName":"designIcon","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Icon Style"}}}}}}');

/***/ }),

/***/ "./src/components/child-module/module.scss":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/child-module/placeholder-content.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   placeholderContent: () => (/* binding */ placeholderContent)
/* harmony export */ });
var placeholderContent = {
  title: {
    innerContent: {
      desktop: {
        value: 'placeholder.title'
      }
    }
  },
  content: {
    innerContent: {
      desktop: {
        value: 'placeholder.body'
      }
    }
  }
};

/***/ }),

/***/ "./src/components/child-module/settings-content.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsContent: () => (/* binding */ SettingsContent)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_3__);
// External dependencies.


// Divi dependencies.


var SettingsContent = function (_a) {
  var _b, _c, _d, _e, _f;
  var defaultSettingsAttrs = _a.defaultSettingsAttrs,
    parentAttrs = _a.parentAttrs,
    groupConfiguration = _a.groupConfiguration;
  // Insert custom Icon default attribute value inherited from Parent Module if any.
  if ((_c = (_b = groupConfiguration === null || groupConfiguration === void 0 ? void 0 : groupConfiguration.contentIcon) === null || _b === void 0 ? void 0 : _b.component) === null || _c === void 0 ? void 0 : _c.props) {
    var defaultIconAttrs = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_3__.mergeAttrs)({
      defaultAttrs: (_d = defaultSettingsAttrs === null || defaultSettingsAttrs === void 0 ? void 0 : defaultSettingsAttrs.icon) === null || _d === void 0 ? void 0 : _d.innerContent,
      attrs: (_f = (_e = parentAttrs === null || parentAttrs === void 0 ? void 0 : parentAttrs.asMutable({
        deep: true
      })) === null || _e === void 0 ? void 0 : _e.icon) === null || _f === void 0 ? void 0 : _f.innerContent
    });
    (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['contentIcon', 'component', 'props', 'fields', 'iconInnercontent', 'defaultAttr'], defaultIconAttrs);
  }
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_2__.ModuleGroups, {
    groups: groupConfiguration
  });
};

/***/ }),

/***/ "./src/components/child-module/settings-design.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SettingsDesign: () => (/* binding */ SettingsDesign)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("@divi/module-utils");
/* harmony import */ var _divi_module_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_divi_module_utils__WEBPACK_IMPORTED_MODULE_3__);
// External dependencies.


// Divi dependencies.


var SettingsDesign = function (_a) {
  var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12;
  var defaultSettingsAttrs = _a.defaultSettingsAttrs,
    parentAttrs = _a.parentAttrs,
    groupConfiguration = _a.groupConfiguration;
  // Insert custom Icon default attribute value inherited from Parent Module if any.
  if ((_c = (_b = groupConfiguration === null || groupConfiguration === void 0 ? void 0 : groupConfiguration.designIcon) === null || _b === void 0 ? void 0 : _b.component) === null || _c === void 0 ? void 0 : _c.props) {
    var defaultIconAttrs = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_3__.mergeAttrs)({
      defaultAttrs: (_f = (_e = (_d = defaultSettingsAttrs === null || defaultSettingsAttrs === void 0 ? void 0 : defaultSettingsAttrs.icon) === null || _d === void 0 ? void 0 : _d.advanced) === null || _e === void 0 ? void 0 : _e.asMutable({
        deep: true
      })) !== null && _f !== void 0 ? _f : {},
      attrs: (_j = (_h = (_g = parentAttrs === null || parentAttrs === void 0 ? void 0 : parentAttrs.icon) === null || _g === void 0 ? void 0 : _g.advanced) === null || _h === void 0 ? void 0 : _h.asMutable({
        deep: true
      })) !== null && _j !== void 0 ? _j : {}
    });
    (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['designIcon', 'component', 'props', 'fields', 'iconAdvancedColor', 'defaultAttr'], defaultIconAttrs === null || defaultIconAttrs === void 0 ? void 0 : defaultIconAttrs.color);
    (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['designIcon', 'component', 'props', 'fields', 'iconAdvancedSize', 'defaultAttr'], defaultIconAttrs === null || defaultIconAttrs === void 0 ? void 0 : defaultIconAttrs.size);
  }
  // Insert custom Text default attribute value inherited from Parent Module if any.
  if ((_l = (_k = groupConfiguration === null || groupConfiguration === void 0 ? void 0 : groupConfiguration['module-text']) === null || _k === void 0 ? void 0 : _k.component) === null || _l === void 0 ? void 0 : _l.props) {
    var defaultTextAttrs = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_3__.mergeAttrs)({
      defaultAttrs: (_p = (_o = (_m = defaultSettingsAttrs === null || defaultSettingsAttrs === void 0 ? void 0 : defaultSettingsAttrs.module) === null || _m === void 0 ? void 0 : _m.advanced) === null || _o === void 0 ? void 0 : _o.asMutable({
        deep: true
      })) === null || _p === void 0 ? void 0 : _p.text,
      attrs: (_s = (_r = (_q = parentAttrs === null || parentAttrs === void 0 ? void 0 : parentAttrs.module) === null || _q === void 0 ? void 0 : _q.advanced) === null || _r === void 0 ? void 0 : _r.asMutable({
        deep: true
      })) === null || _s === void 0 ? void 0 : _s.text
    });
    (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['module-text', 'component', 'props', 'defaultGroupAttr'], defaultTextAttrs);
  }
  // Insert custom Title Text default attribute value inherited from Parent Module if any.
  if ((_u = (_t = groupConfiguration === null || groupConfiguration === void 0 ? void 0 : groupConfiguration['title-font']) === null || _t === void 0 ? void 0 : _t.component) === null || _u === void 0 ? void 0 : _u.props) {
    var defaultTitleFontAttrs = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_3__.mergeAttrs)({
      defaultAttrs: (_y = (_x = (_w = (_v = defaultSettingsAttrs === null || defaultSettingsAttrs === void 0 ? void 0 : defaultSettingsAttrs.title) === null || _v === void 0 ? void 0 : _v.decoration) === null || _w === void 0 ? void 0 : _w.font) === null || _x === void 0 ? void 0 : _x.asMutable({
        deep: true
      })) !== null && _y !== void 0 ? _y : {},
      attrs: (_2 = (_1 = (_0 = (_z = parentAttrs === null || parentAttrs === void 0 ? void 0 : parentAttrs.title) === null || _z === void 0 ? void 0 : _z.decoration) === null || _0 === void 0 ? void 0 : _0.font) === null || _1 === void 0 ? void 0 : _1.asMutable({
        deep: true
      })) !== null && _2 !== void 0 ? _2 : {}
    });
    (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['title-font', 'component', 'props', 'defaultGroupAttr'], defaultTitleFontAttrs);
  }
  // Insert custom Body Text default attribute value inherited from Parent Module if any.
  if ((_4 = (_3 = groupConfiguration === null || groupConfiguration === void 0 ? void 0 : groupConfiguration['content-bodyFont']) === null || _3 === void 0 ? void 0 : _3.component) === null || _4 === void 0 ? void 0 : _4.props) {
    var defaultBodyFontAttrs = (0,_divi_module_utils__WEBPACK_IMPORTED_MODULE_3__.mergeAttrs)({
      defaultAttrs: (_8 = (_7 = (_6 = (_5 = defaultSettingsAttrs === null || defaultSettingsAttrs === void 0 ? void 0 : defaultSettingsAttrs.content) === null || _5 === void 0 ? void 0 : _5.decoration) === null || _6 === void 0 ? void 0 : _6.bodyFont) === null || _7 === void 0 ? void 0 : _7.asMutable({
        deep: true
      })) !== null && _8 !== void 0 ? _8 : {},
      attrs: (_12 = (_11 = (_10 = (_9 = parentAttrs === null || parentAttrs === void 0 ? void 0 : parentAttrs.content) === null || _9 === void 0 ? void 0 : _9.decoration) === null || _10 === void 0 ? void 0 : _10.bodyFont) === null || _11 === void 0 ? void 0 : _11.asMutable({
        deep: true
      })) !== null && _12 !== void 0 ? _12 : {}
    });
    (0,lodash__WEBPACK_IMPORTED_MODULE_1__.set)(groupConfiguration, ['content-bodyFont', 'component', 'props', 'defaultGroupAttr'], defaultBodyFontAttrs);
  }
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_2__.ModuleGroups, {
    groups: groupConfiguration
  });
};

/***/ }),

/***/ "./src/components/child-module/style-declarations/icon-font/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iconFontDeclaration: () => (/* binding */ iconFontDeclaration)
/* harmony export */ });
/* harmony import */ var _divi_icon_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@divi/icon-library");
/* harmony import */ var _divi_icon_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_divi_icon_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_style_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/style-library");
/* harmony import */ var _divi_style_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_style_library__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Style declaration for icon.
 *
 * @since ??
 *
 * @param {DeclarationFunctionProps<Icon.Font.AttributeValue>} param0 Style declaration params.
 *
 * @returns {string}
 */
var iconFontDeclaration = function (_a) {
  var attrValue = _a.attrValue;
  var declarations = new _divi_style_library__WEBPACK_IMPORTED_MODULE_1__.StyleDeclarations({
    returnType: 'string',
    important: {
      'font-family': true,
      content: true
    }
  });
  var fontIcon = (0,_divi_icon_library__WEBPACK_IMPORTED_MODULE_0__.processFontIcon)(attrValue);
  if (fontIcon) {
    var fontFamily = (0,_divi_icon_library__WEBPACK_IMPORTED_MODULE_0__.isFaIcon)(attrValue) ? 'FontAwesome' : 'ETmodules';
    declarations.add('content', "'".concat((0,_divi_icon_library__WEBPACK_IMPORTED_MODULE_0__.escapeFontIcon)(fontIcon), "'"));
    declarations.add('font-family', "\"".concat(fontFamily, "\""));
  }
  return declarations.value;
};

/***/ }),

/***/ "./src/components/child-module/style-declarations/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   iconFontDeclaration: () => (/* reexport safe */ _icon_font__WEBPACK_IMPORTED_MODULE_0__.iconFontDeclaration)
/* harmony export */ });
/* harmony import */ var _icon_font__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/components/child-module/style-declarations/icon-font/index.ts");


/***/ }),

/***/ "./src/components/child-module/styles.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleStyles: () => (/* binding */ ModuleStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _custom_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/child-module/custom-css.ts");
/* harmony import */ var _style_declarations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/child-module/style-declarations/index.ts");
// External dependencies.

// Divi dependencies.



/**
 * Child Module's style components.
 *
 * @since ??
 */
var ModuleStyles = function (_a) {
  var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
  var attrs = _a.attrs,
    parentAttrs = _a.parentAttrs,
    elements = _a.elements,
    settings = _a.settings,
    orderClass = _a.orderClass,
    mode = _a.mode,
    state = _a.state,
    noStyleTag = _a.noStyleTag;
  var contentContainerSelector = "".concat(orderClass, " .example_child_module__content-container");
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.StyleContainer, {
    mode: mode,
    state: state,
    noStyleTag: noStyleTag
  }, elements.style({
    attrName: 'module',
    styleProps: {
      disabledOn: {
        disabledModuleVisibility: settings === null || settings === void 0 ? void 0 : settings.disabledModuleVisibility
      },
      advancedStyles: [{
        componentName: 'divi/text',
        props: {
          selector: contentContainerSelector,
          attr: (_c = (_b = attrs === null || attrs === void 0 ? void 0 : attrs.module) === null || _b === void 0 ? void 0 : _b.advanced) === null || _c === void 0 ? void 0 : _c.text
        }
      }]
    }
  }), elements.style({
    attrName: 'title'
  }), elements.style({
    attrName: 'content'
  }), elements.style({
    attrName: 'icon',
    styleProps: {
      advancedStyles: [{
        componentName: "divi/common",
        props: {
          attr: (_e = (_d = attrs === null || attrs === void 0 ? void 0 : attrs.icon) === null || _d === void 0 ? void 0 : _d.innerContent) !== null && _e !== void 0 ? _e : (_f = parentAttrs === null || parentAttrs === void 0 ? void 0 : parentAttrs.icon) === null || _f === void 0 ? void 0 : _f.innerContent,
          declarationFunction: _style_declarations__WEBPACK_IMPORTED_MODULE_3__.iconFontDeclaration
        }
      }, {
        componentName: "divi/common",
        props: {
          attr: (_j = (_h = (_g = attrs === null || attrs === void 0 ? void 0 : attrs.icon) === null || _g === void 0 ? void 0 : _g.advanced) === null || _h === void 0 ? void 0 : _h.color) !== null && _j !== void 0 ? _j : (_l = (_k = parentAttrs === null || parentAttrs === void 0 ? void 0 : parentAttrs.icon) === null || _k === void 0 ? void 0 : _k.advanced) === null || _l === void 0 ? void 0 : _l.color,
          property: "color"
        }
      }, {
        componentName: "divi/common",
        props: {
          attr: (_p = (_o = (_m = attrs === null || attrs === void 0 ? void 0 : attrs.icon) === null || _m === void 0 ? void 0 : _m.advanced) === null || _o === void 0 ? void 0 : _o.size) !== null && _p !== void 0 ? _p : (_r = (_q = parentAttrs === null || parentAttrs === void 0 ? void 0 : parentAttrs.icon) === null || _q === void 0 ? void 0 : _q.advanced) === null || _r === void 0 ? void 0 : _r.size,
          property: "font-size"
        }
      }]
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CssStyle, {
    selector: orderClass,
    attr: attrs.css,
    cssFields: _custom_css__WEBPACK_IMPORTED_MODULE_2__.cssFields
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CssStyle, {
    selector: orderClass,
    attr: attrs.css,
    cssFields: _custom_css__WEBPACK_IMPORTED_MODULE_2__.cssFields
  }));
};

/***/ }),

/***/ "./src/components/d4-module/conversion-outline.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   conversionOutline: () => (/* binding */ conversionOutline)
/* harmony export */ });
// Compare this to wp.data.select('divi/settings').getSetting('shortcodeModuleDefinitions').et_pb_blurb.fields
var conversionOutline = {
  advanced: {
    admin_label: 'module.meta.adminLabel',
    animation: 'module.decoration.animation',
    background: 'module.decoration.background',
    borders: {
      default: 'module.decoration.border'
    },
    box_shadow: {
      default: 'module.decoration.boxShadow'
    },
    disabled_on: 'module.decoration.disabledOn',
    filters: {
      default: 'module.decoration.filters'
    },
    fonts: {
      body: 'content.decoration.bodyFont.body',
      body_link: 'content.decoration.bodyFont.link',
      body_ol: 'content.decoration.bodyFont.ol',
      body_quote: 'content.decoration.bodyFont.quote',
      body_ul: 'content.decoration.bodyFont.ul',
      header: 'title.decoration.font'
    },
    height: 'module.decoration.sizing',
    link_options: 'module.advanced.link',
    margin_padding: 'module.decoration.spacing',
    max_width: 'module.decoration.sizing',
    module: 'module.advanced.htmlAttributes',
    overflow: 'module.decoration.overflow',
    position_fields: 'module.decoration.position',
    scroll: 'module.decoration.scroll',
    sticky: 'module.decoration.sticky',
    text: 'module.advanced.text',
    text_shadow: {
      default: 'module.advanced.text.textShadow'
    },
    transform: 'module.decoration.transform',
    transition: 'module.decoration.transition',
    z_index: 'module.decoration.zIndex'
  },
  css: {
    after: 'css.*.after',
    before: 'css.*.before',
    main_element: 'css.*.mainElement',
    content: 'css.*.content',
    title: 'css.*.title'
  },
  module: {
    content: 'content.innerContent.*',
    title: 'title.innerContent.*',
    header_level: 'title.decoration.font.font.*.headingLevel'
  }
};

/***/ }),

/***/ "./src/components/d4-module/custom-css.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssFields: () => (/* binding */ cssFields)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/d4-module/module.json");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
// WordPress dependencies.


var customCssFields = _module_json__WEBPACK_IMPORTED_MODULE_1__.customCssFields;
customCssFields.title.label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title', 'd5-extension-example-modules');
customCssFields.content.label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Content', 'd5-extension-example-modules');
var cssFields = __assign({}, customCssFields);

/***/ }),

/***/ "./src/components/d4-module/edit.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D4ModuleEdit: () => (/* binding */ D4ModuleEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/d4-module/styles.tsx");
/* harmony import */ var _module_classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/d4-module/module-classnames.ts");
/* harmony import */ var _module_script_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/d4-module/module-script-data.tsx");
// External Dependencies.

// Divi Dependencies.




/**
 * Divi 4 Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {D4ModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
var D4ModuleEdit = function (props) {
  var attrs = props.attrs,
    id = props.id,
    name = props.name,
    elements = props.elements;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ModuleContainer, {
    attrs: attrs,
    elements: elements,
    id: id,
    name: name,
    stylesComponent: _styles__WEBPACK_IMPORTED_MODULE_2__.ModuleStyles,
    classnamesFunction: _module_classnames__WEBPACK_IMPORTED_MODULE_3__.moduleClassnames,
    scriptDataComponent: _module_script_data__WEBPACK_IMPORTED_MODULE_4__.ModuleScriptData
  }, elements.styleComponents({
    attrName: 'module'
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "example_d4_module_inner"
  }, elements.render({
    attrName: 'title'
  }), elements.render({
    attrName: 'content'
  })));
};


/***/ }),

/***/ "./src/components/d4-module/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d4Module: () => (/* binding */ d4Module)
/* harmony export */ });
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/components/d4-module/module.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/d4-module/edit.tsx");
/* harmony import */ var _placeholder_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/d4-module/placeholder-content.ts");
/* harmony import */ var _conversion_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/d4-module/conversion-outline.ts");
// Local dependencies.




var d4Module = {
  metadata: _module_json__WEBPACK_IMPORTED_MODULE_0__,
  placeholderContent: _placeholder_content__WEBPACK_IMPORTED_MODULE_2__.placeholderContent,
  conversionOutline: _conversion_outline__WEBPACK_IMPORTED_MODULE_3__.conversionOutline,
  renderers: {
    edit: _edit__WEBPACK_IMPORTED_MODULE_1__.D4ModuleEdit
  }
};

/***/ }),

/***/ "./src/components/d4-module/module-classnames.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleClassnames: () => (/* binding */ moduleClassnames)
/* harmony export */ });
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Module classnames function for Dynamic Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<D4ModuleAttrs>} param0 Function parameters.
 */
var moduleClassnames = function (_a) {
  var _b, _c;
  var classnamesInstance = _a.classnamesInstance,
    attrs = _a.attrs;
  // Text Options.
  classnamesInstance.add((0,_divi_module__WEBPACK_IMPORTED_MODULE_0__.textOptionsClassnames)((_c = (_b = attrs === null || attrs === void 0 ? void 0 : attrs.module) === null || _b === void 0 ? void 0 : _b.advanced) === null || _c === void 0 ? void 0 : _c.text));
};

/***/ }),

/***/ "./src/components/d4-module/module-script-data.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleScriptData: () => (/* binding */ ModuleScriptData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Divi 4 module's script data component.
 *
 * @since ??
 *
 * @param {ModuleScriptDataProps<D4ModuleAttrs>} props React component props.
 *
 * @returns {ReactElement}
 */
var ModuleScriptData = function (_a) {
  var elements = _a.elements;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, elements.scriptData({
    attrName: 'module'
  }));
};

/***/ }),

/***/ "./src/components/d4-module/module.json":
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"name":"example/d4-module","d4Shortcode":"d4_module","title":"Divi 4 Module","titles":"Divi 4 Modules","moduleIcon":"example/module-d4","moduleClassName":"example_d4_module","moduleOrderClassName":"example_d4_module","category":"module","attributes":{"module":{"type":"object","selector":"{{selector}}","default":{"meta":{"adminLabel":{"desktop":{"value":"D4 Module"}}}},"settings":{"meta":{"adminLabel":{}},"advanced":{"link":{},"text":{},"htmlAttributes":{}},"decoration":{"background":{},"bodyFont":{},"sizing":{},"spacing":{},"border":{},"boxShadow":{},"filters":{},"transform":{},"animation":{},"overflow":{},"disabledOn":{},"transition":{},"position":{},"zIndex":{},"scroll":{},"sticky":{}}}},"title":{"type":"object","selector":"{{selector}} .example_d4_module_title","default":{"decoration":{"font":{"font":{"desktop":{"value":{"headingLevel":"h2"}}}}}},"inlineEditor":"plainText","elementType":"heading","childrenSanitizer":"et_core_esc_previously","attributes":{"class":"example_d4_module_title"},"settings":{"innerContent":{"groupType":"group-item","item":{"groupName":"mainContent","priority":10,"render":true,"attrName":"title.innerContent","label":"Title","description":"Input your value to action title here.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/text","type":"field"}}},"decoration":{"font":{"priority":10,"component":{"props":{"groupLabel":"Title Text","fieldLabel":"Title"}}}}}},"content":{"type":"object","selector":"{{selector}} .example_d4_module_content","attributes":{"class":"example_d4_module_content"},"tagName":"div","inlineEditor":"richText","settings":{"innerContent":{"groupType":"group-item","item":{"groupName":"mainContent","priority":20,"render":true,"attrName":"content.innerContent","label":"Content","description":"Input the main text content for your module here.","features":{"sticky":false,"dynamicContent":{"type":"text"}},"component":{"name":"divi/richtext","type":"field"}}}}}},"customCssFields":{"title":{"subName":"title","selectorSuffix":" .example_d4_module_title"},"content":{"subName":"content","selectorSuffix":" .example_d4_module_content"}},"settings":{"content":"auto","design":"auto","advanced":"auto"}}');

/***/ }),

/***/ "./src/components/d4-module/placeholder-content.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   placeholderContent: () => (/* binding */ placeholderContent)
/* harmony export */ });
var placeholderContent = {
  title: {
    innerContent: {
      desktop: {
        value: 'placeholder.title'
      }
    }
  },
  content: {
    innerContent: {
      desktop: {
        value: 'placeholder.body'
      }
    }
  }
};

/***/ }),

/***/ "./src/components/d4-module/styles.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleStyles: () => (/* binding */ ModuleStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _custom_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/d4-module/custom-css.ts");
// External dependencies.

// Divi dependencies.


/**
 * Module's style components.
 *
 * @since ??
 */
var ModuleStyles = function (_a) {
  var _b, _c, _d, _e;
  var attrs = _a.attrs,
    settings = _a.settings,
    orderClass = _a.orderClass,
    mode = _a.mode,
    state = _a.state,
    noStyleTag = _a.noStyleTag,
    elements = _a.elements;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.StyleContainer, {
    mode: mode,
    state: state,
    noStyleTag: noStyleTag
  }, elements.style({
    attrName: 'module',
    styleProps: {
      disabledOn: {
        disabledModuleVisibility: settings === null || settings === void 0 ? void 0 : settings.disabledModuleVisibility
      }
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.TextStyle, {
    selector: "".concat(orderClass, " .example_d4_module_inner"),
    attr: (_c = (_b = attrs === null || attrs === void 0 ? void 0 : attrs.module) === null || _b === void 0 ? void 0 : _b.advanced) === null || _c === void 0 ? void 0 : _c.text
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CommonStyle, {
    selector: "".concat(orderClass, " .example_d4_module_inner"),
    attr: (_e = (_d = attrs === null || attrs === void 0 ? void 0 : attrs.module) === null || _d === void 0 ? void 0 : _d.decoration) === null || _e === void 0 ? void 0 : _e.background,
    declarationFunction: function (_a) {
      var _b, _c;
      var attrValue = _a.attrValue;
      if ('on' === ((_c = (_b = attrValue === null || attrValue === void 0 ? void 0 : attrValue.image) === null || _b === void 0 ? void 0 : _b.parallax) === null || _c === void 0 ? void 0 : _c.enabled)) {
        return 'position: relative;';
      }
      return '';
    }
  }), elements.style({
    attrName: 'title'
  }), elements.style({
    attrName: 'content'
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CssStyle, {
    selector: orderClass,
    attr: attrs === null || attrs === void 0 ? void 0 : attrs.css,
    cssFields: _custom_css__WEBPACK_IMPORTED_MODULE_2__.cssFields
  }));
};


/***/ }),

/***/ "./src/components/dynamic-module/edit.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DynamicModuleEdit: () => (/* binding */ DynamicModuleEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divi_rest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/rest");
/* harmony import */ var _divi_rest__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_rest__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/dynamic-module/styles.tsx");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _module_script_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/dynamic-module/module-script-data.tsx");
/* harmony import */ var _module_classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/dynamic-module/module-classnames.ts");
// External Dependencies.

// Divi Dependencies.







/**
 * Static Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {DynamicModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
var DynamicModuleEdit = function (props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
  var attrs = props.attrs,
    id = props.id,
    name = props.name,
    elements = props.elements;
  var _o = (0,_divi_rest__WEBPACK_IMPORTED_MODULE_2__.useFetch)([]),
    fetch = _o.fetch,
    response = _o.response,
    isLoading = _o.isLoading;
  var PostTitleHeading = (_f = (_e = (_d = (_c = (_b = (_a = attrs === null || attrs === void 0 ? void 0 : attrs.postTitle) === null || _a === void 0 ? void 0 : _a.decoration) === null || _b === void 0 ? void 0 : _b.font) === null || _c === void 0 ? void 0 : _c.font) === null || _d === void 0 ? void 0 : _d.desktop) === null || _e === void 0 ? void 0 : _e.value) === null || _f === void 0 ? void 0 : _f.headingLevel;
  var postsNumber = parseInt((_k = (_j = (_h = (_g = attrs === null || attrs === void 0 ? void 0 : attrs.postItems) === null || _g === void 0 ? void 0 : _g.innerContent) === null || _h === void 0 ? void 0 : _h.desktop) === null || _j === void 0 ? void 0 : _j.value) === null || _k === void 0 ? void 0 : _k.postsNumber);
  var fetchAbortRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  /**
   * Fetches new Portfolio Posts on parameter changes.
   */
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (fetchAbortRef.current) {
      fetchAbortRef.current.abort();
    }
    fetchAbortRef.current = new AbortController();
    fetch({
      restRoute: "/wp/v2/posts?context=view&per_page=".concat(postsNumber),
      method: 'GET',
      signal: fetchAbortRef.current.signal
    }).catch(function (error) {
      console.error(error);
    });
    return function () {
      if (fetchAbortRef.current) {
        fetchAbortRef.current.abort();
      }
    };
  }, [postsNumber]);
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ModuleContainer, {
    attrs: attrs,
    elements: elements,
    id: id,
    name: name,
    stylesComponent: _styles__WEBPACK_IMPORTED_MODULE_3__.ModuleStyles,
    classnamesFunction: _module_classnames__WEBPACK_IMPORTED_MODULE_7__.moduleClassnames,
    scriptDataComponent: _module_script_data__WEBPACK_IMPORTED_MODULE_6__.ModuleScriptData
  }, elements.styleComponents({
    attrName: 'module'
  }), !isLoading && react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ElementComponents, {
    attrs: (_m = (_l = attrs === null || attrs === void 0 ? void 0 : attrs.module) === null || _l === void 0 ? void 0 : _l.decoration) !== null && _m !== void 0 ? _m : {},
    id: id
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "example_dynamic_module__inner"
  }, elements.render({
    attrName: 'title'
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "example_dynamic_module__post-items"
  }, (0,lodash__WEBPACK_IMPORTED_MODULE_4__.map)(response, function (post) {
    var _a, _b;
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "example_dynamic_module__post-item",
      key: post === null || post === void 0 ? void 0 : post.id
    }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(PostTitleHeading, {
      className: "example_dynamic_module__post-item-title"
    }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
      href: post === null || post === void 0 ? void 0 : post.link,
      onClick: function () {
        return false;
      }
    }, (_a = post === null || post === void 0 ? void 0 : post.title) === null || _a === void 0 ? void 0 : _a.rendered)), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "example_dynamic_module__post-item-content",
      dangerouslySetInnerHTML: {
        __html: (_b = post === null || post === void 0 ? void 0 : post.excerpt) === null || _b === void 0 ? void 0 : _b.rendered
      }
    }));
  })))), !isLoading && response.length < 1 && react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('No post found.', 'd5-extension-example-modules')), isLoading && react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Loading...', 'd5-extension-example-modules')));
};


/***/ }),

/***/ "./src/components/dynamic-module/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dynamicModule: () => (/* binding */ dynamicModule)
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/components/dynamic-module/edit.tsx");
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/dynamic-module/module.json");
/* harmony import */ var _placeholder_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/dynamic-module/placeholder-content.ts");
/* harmony import */ var _module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/dynamic-module/module.scss");




var dynamicModule = {
  // Imported json has no inferred type hence type-cast is necessary.
  metadata: _module_json__WEBPACK_IMPORTED_MODULE_1__,
  placeholderContent: _placeholder_content__WEBPACK_IMPORTED_MODULE_2__.placeholderContent,
  renderers: {
    edit: _edit__WEBPACK_IMPORTED_MODULE_0__.DynamicModuleEdit
  }
};

/***/ }),

/***/ "./src/components/dynamic-module/module-classnames.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleClassnames: () => (/* binding */ moduleClassnames)
/* harmony export */ });
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Module classnames function for Dynamic Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<DynamicModuleAttrs>} param0 Function parameters.
 */
var moduleClassnames = function (_a) {
  var _b, _c;
  var classnamesInstance = _a.classnamesInstance,
    attrs = _a.attrs;
  // Text Options.
  classnamesInstance.add((0,_divi_module__WEBPACK_IMPORTED_MODULE_0__.textOptionsClassnames)((_c = (_b = attrs === null || attrs === void 0 ? void 0 : attrs.module) === null || _b === void 0 ? void 0 : _b.advanced) === null || _c === void 0 ? void 0 : _c.text));
};

/***/ }),

/***/ "./src/components/dynamic-module/module-script-data.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleScriptData: () => (/* binding */ ModuleScriptData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Dynamic module's script data component.
 *
 * @since ??
 *
 * @param {ModuleScriptDataProps<DynamicModuleAttrs>} props React component props.
 *
 * @returns {ReactElement}
 */
var ModuleScriptData = function (_a) {
  var elements = _a.elements;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, elements.scriptData({
    attrName: 'module'
  }));
};

/***/ }),

/***/ "./src/components/dynamic-module/module.json":
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"name":"example/dynamic-module","d4Shortcode":"","title":"Dynamic Module","titles":"Dynamic Modules","moduleIcon":"example/module-dynamic","moduleClassName":"example_dynamic_module","moduleOrderClassName":"example_dynamic_module","category":"module","attributes":{"module":{"type":"object","selector":"{{selector}}","default":{"meta":{"adminLabel":{"desktop":{"value":"Static Module"}}}},"styleProps":{"bodyFont":{"selector":"{{selector}} .example_dynamic_module__post-item-content"}},"settings":{"meta":{"adminLabel":{}},"advanced":{"link":{},"text":{},"htmlAttributes":{}},"decoration":{"background":{},"bodyFont":{},"sizing":{},"spacing":{},"border":{},"boxShadow":{},"filters":{},"transform":{},"animation":{},"overflow":{},"disabledOn":{},"transition":{},"position":{},"zIndex":{},"scroll":{},"sticky":{}}}},"title":{"type":"object","selector":"{{selector}} .example_dynamic_module__title","default":{"decoration":{"font":{"font":{"desktop":{"value":{"headingLevel":"h2"}}}}}},"inlineEditor":"plainText","elementType":"heading","childrenSanitizer":"et_core_esc_previously","attributes":{"class":"example_dynamic_module__title"},"settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"contentPosts","priority":10,"render":true,"attrName":"title.innerContent","label":"Title","description":"Title to show for module.","features":{"sticky":false,"dynamicContent":false},"component":{"name":"divi/text","type":"field"}}},"decoration":{"font":{"priority":10,"component":{"props":{"groupLabel":"Title Text","fieldLabel":"Title"}}}}}},"postItems":{"type":"object","default":{"innerContent":{"desktop":{"value":{"postsNumber":"5"}}}},"settings":{"innerContent":{"groupType":"group-items","items":{"src":{"groupSlug":"contentPosts","priority":20,"render":true,"subName":"postsNumber","label":"Number of posts","description":"Number of posts you want to show.","features":{"sticky":false,"responsive":false,"hover":false,"dynamicContent":false},"component":{"name":"divi/text","type":"field"}}}}}},"postTitle":{"type":"object","selector":"{{selector}} .example_dynamic_module__post-item-title","default":{"decoration":{"font":{"font":{"desktop":{"value":{"headingLevel":"h3"}}}}}},"settings":{"decoration":{"font":{"priority":10,"component":{"props":{"groupLabel":"Post Title Text","fieldLabel":"Post Title"}}}}}}},"customCssFields":{},"settings":{"content":"auto","design":"auto","advanced":"auto","groups":{"contentPosts":{"panel":"content","priority":10,"groupName":"contentPosts","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Posts"}}}}}}');

/***/ }),

/***/ "./src/components/dynamic-module/module.scss":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/dynamic-module/placeholder-content.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   placeholderContent: () => (/* binding */ placeholderContent)
/* harmony export */ });
var placeholderContent = {
  title: {
    innerContent: {
      desktop: {
        value: 'placeholder.title'
      }
    }
  }
};

/***/ }),

/***/ "./src/components/dynamic-module/styles.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleStyles: () => (/* binding */ ModuleStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
// External dependencies.

// Divi dependencies.

/**
 * Dynamic Module's style components.
 *
 * @since ??
 */
var ModuleStyles = function (_a) {
  var _b, _c;
  var settings = _a.settings,
    mode = _a.mode,
    state = _a.state,
    noStyleTag = _a.noStyleTag,
    elements = _a.elements,
    attrs = _a.attrs,
    orderClass = _a.orderClass;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.StyleContainer, {
    mode: mode,
    state: state,
    noStyleTag: noStyleTag
  }, elements.style({
    attrName: 'module',
    styleProps: {
      disabledOn: {
        disabledModuleVisibility: settings === null || settings === void 0 ? void 0 : settings.disabledModuleVisibility
      },
      advancedStyles: [{
        componentName: "divi/text",
        props: {
          selector: "".concat(orderClass, " .example_dynamic_module__inner"),
          attr: (_c = (_b = attrs === null || attrs === void 0 ? void 0 : attrs.module) === null || _b === void 0 ? void 0 : _b.advanced) === null || _c === void 0 ? void 0 : _c.text
        }
      }]
    }
  }), elements.style({
    attrName: 'title'
  }), elements.style({
    attrName: 'postTitle'
  }));
};


/***/ }),

/***/ "./src/components/parent-module/custom-css.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssFields: () => (/* binding */ cssFields)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/parent-module/module.json");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
// WordPress dependencies.


var customCssFields = _module_json__WEBPACK_IMPORTED_MODULE_1__.customCssFields;
customCssFields.contentContainer.label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Content Container', 'd5-extension-example-modules');
customCssFields.title.label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title', 'd5-extension-example-modules');
customCssFields.content.label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Content', 'd5-extension-example-modules');
customCssFields.icon.label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Icon', 'd5-extension-example-modules');
var cssFields = __assign({}, customCssFields);

/***/ }),

/***/ "./src/components/parent-module/edit.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ParentModuleEdit: () => (/* binding */ ParentModuleEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/parent-module/styles.tsx");
/* harmony import */ var _module_script_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/parent-module/module-script-data.tsx");
/* harmony import */ var _module_classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/parent-module/module-classnames.ts");
// External Dependencies.

// Divi Dependencies.




/**
 * Parent Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {ParentModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
var ParentModuleEdit = function (props) {
  var attrs = props.attrs,
    elements = props.elements,
    id = props.id,
    name = props.name,
    childrenIds = props.childrenIds;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ModuleContainer, {
    attrs: attrs,
    elements: elements,
    id: id,
    name: name,
    stylesComponent: _styles__WEBPACK_IMPORTED_MODULE_2__.ModuleStyles,
    scriptDataComponent: _module_script_data__WEBPACK_IMPORTED_MODULE_3__.ModuleScriptData,
    classnamesFunction: _module_classnames__WEBPACK_IMPORTED_MODULE_4__.moduleClassnames,
    tag: "ul"
  }, elements.styleComponents({
    attrName: 'module'
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ChildModulesContainer, {
    ids: childrenIds
  }));
};

/***/ }),

/***/ "./src/components/parent-module/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parentModule: () => (/* binding */ parentModule)
/* harmony export */ });
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/components/parent-module/module.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/parent-module/edit.tsx");
/* harmony import */ var _module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/parent-module/module.scss");
// Local dependencies.


// Styles.

/**
 * Call To Action module.
 *
 * @since ??
 */
var parentModule = {
  // Imported json has no inferred type hence type-cast is necessary.
  metadata: _module_json__WEBPACK_IMPORTED_MODULE_0__,
  childrenName: ['example/child-module'],
  template: [['example/child-module', {}], ['example/child-module', {}], ['example/child-module', {}]],
  renderers: {
    edit: _edit__WEBPACK_IMPORTED_MODULE_1__.ParentModuleEdit
  }
};

/***/ }),

/***/ "./src/components/parent-module/module-classnames.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleClassnames: () => (/* binding */ moduleClassnames)
/* harmony export */ });
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Module classnames function for Parent Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<ParentModuleAttrs>} param0 Function parameters.
 */
var moduleClassnames = function (_a) {
  var _b, _c, _d;
  var classnamesInstance = _a.classnamesInstance,
    attrs = _a.attrs;
  // Text Options.
  classnamesInstance.add((0,_divi_module__WEBPACK_IMPORTED_MODULE_0__.textOptionsClassnames)((_d = (_c = (_b = attrs === null || attrs === void 0 ? void 0 : attrs.module) === null || _b === void 0 ? void 0 : _b.advanced) === null || _c === void 0 ? void 0 : _c.text) !== null && _d !== void 0 ? _d : {}));
};

/***/ }),

/***/ "./src/components/parent-module/module-script-data.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleScriptData: () => (/* binding */ ModuleScriptData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Parent module's script data component.
 *
 * @since ??
 *
 * @param {ModuleScriptDataProps<ParentModuleAttrs>} props React component props.
 *
 * @returns {ReactElement}
 */
var ModuleScriptData = function (_a) {
  var elements = _a.elements;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, elements.scriptData({
    attrName: 'module'
  }));
};

/***/ }),

/***/ "./src/components/parent-module/module.json":
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"name":"example/parent-module","d4Shortcode":"","title":"Parent Module","titles":"Parent Modules","moduleIcon":"example/module-parent","moduleClassName":"example_parent_module","moduleOrderClassName":"example_parent_module","category":"module","childModuleName":"example/child-module","childModuleTitle":"Child Module","childrenName":["example/child-module"],"attributes":{"module":{"type":"object","selector":"{{selector}}","default":{"meta":{"adminLabel":{"desktop":{"value":"Parent Module"}}}},"styleProps":{"border":{"important":true}},"settings":{"meta":{"adminLabel":{}},"advanced":{"link":{},"text":{"component":{"props":{"fields":{"color":{"render":false}}}}},"htmlAttributes":{}},"decoration":{"background":{},"sizing":{},"spacing":{},"border":{},"boxShadow":{},"filters":{},"transform":{},"animation":{},"overflow":{},"disabledOn":{},"transition":{},"position":{},"zIndex":{},"scroll":{},"sticky":{}}}},"title":{"type":"object","selector":"{{selector}} .example_child_module__title","defaultPrintedStyle":{"decoration":{"font":{"font":{"desktop":{"value":{"size":"21px","lineHeight":"1em","weight":"600"}}}}}},"styleProps":{"font":{"important":{"font":{"desktop":{"value":{"color":true}}}}}},"settings":{"decoration":{"font":{"priority":10,"component":{"props":{"groupLabel":"Title Text","fieldLabel":"Title"}}}}}},"content":{"type":"object","selector":"{{selector}} .example_child_module__content","defaultPrintedStyle":{"decoration":{"bodyFont":{"body":{"font":{"desktop":{"value":{"color":"#868686","size":"13px","lineHeight":"1.6em"}}}}}}},"styleProps":{"bodyFont":{"selectors":{"desktop":{"value":"{{selector}} .example_child_module__content"}}}},"settings":{"decoration":{"bodyFont":{"attrName":"content.decoration.bodyFont"}}}},"icon":{"type":"object","selector":"{{selector}} .et-pb-icon","default":{"innerContent":{"desktop":{"value":{"unicode":"&#x39;","type":"divi","weight":"400"}}},"advanced":{"color":{"desktop":{"value":"#ae16f0"}},"size":{"desktop":{"value":"28px"}}}},"settings":{"innerContent":{"groupType":"group-item","item":{"groupSlug":"contentIcon","attrName":"icon.innerContent","label":"Icon","description":"Upload an Icon","render":true,"priority":10,"features":{"sticky":false},"component":{"type":"field","name":"divi/icon-picker"}}},"advanced":{"color":{"groupType":"group-item","item":{"groupSlug":"designIcon","label":"Icon Color","description":"Here you can define a custom color for your icon.","render":true,"priority":10,"features":{"sticky":false},"component":{"type":"field","name":"divi/color-picker"}}},"size":{"groupType":"group-item","item":{"groupSlug":"designIcon","label":"Icon Size","description":"Here you can choose icon width.","render":true,"priority":20,"features":{"sticky":false},"component":{"type":"field","name":"divi/range","props":{"min":1,"max":120,"allowedUnits":["%","em","rem","px","cm","mm","in","pt","pc","ex","vh","vw"]}}}}}}}},"customCssFields":{"contentContainer":{"subName":"contentContainer","selectorSuffix":" .example_parent_module__content-container"},"title":{"subName":"title","selectorSuffix":" .example_parent_module__title"},"content":{"subName":"content","selectorSuffix":" .example_parent_module__content"},"icon":{"subName":"icon","selectorSuffix":" .example_parent_module__icon.et-pb-icon"}},"settings":{"content":"auto","design":"auto","advanced":"auto","groups":{"contentIcon":{"panel":"content","priority":20,"groupName":"contentIcon","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Icon"}}},"designIcon":{"panel":"design","priority":10,"groupName":"designIcon","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Icon Style"}}}}}}');

/***/ }),

/***/ "./src/components/parent-module/module.scss":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/parent-module/styles.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleStyles: () => (/* binding */ ModuleStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _custom_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/parent-module/custom-css.ts");
/* harmony import */ var _child_module_style_declarations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/child-module/style-declarations/index.ts");
// External dependencies.

// Divi dependencies.



/**
 * Parent Module's style components.
 *
 * @since ??
 */
var ModuleStyles = function (_a) {
  var _b, _c, _d, _e, _f, _g;
  var attrs = _a.attrs,
    elements = _a.elements,
    settings = _a.settings,
    orderClass = _a.orderClass,
    mode = _a.mode,
    state = _a.state,
    noStyleTag = _a.noStyleTag;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.StyleContainer, {
    mode: mode,
    state: state,
    noStyleTag: noStyleTag
  }, elements.style({
    attrName: 'module',
    styleProps: {
      disabledOn: {
        disabledModuleVisibility: settings === null || settings === void 0 ? void 0 : settings.disabledModuleVisibility
      }
    }
  }), elements.style({
    attrName: 'title'
  }), elements.style({
    attrName: 'content'
  }), elements.style({
    attrName: 'icon',
    styleProps: {
      advancedStyles: [{
        componentName: "divi/common",
        props: {
          attr: (_c = (_b = attrs === null || attrs === void 0 ? void 0 : attrs.icon) === null || _b === void 0 ? void 0 : _b.innerContent) !== null && _c !== void 0 ? _c : {},
          declarationFunction: _child_module_style_declarations__WEBPACK_IMPORTED_MODULE_3__.iconFontDeclaration
        }
      }, {
        componentName: "divi/common",
        props: {
          attr: (_e = (_d = attrs === null || attrs === void 0 ? void 0 : attrs.icon) === null || _d === void 0 ? void 0 : _d.advanced) === null || _e === void 0 ? void 0 : _e.color,
          property: "color"
        }
      }, {
        componentName: "divi/common",
        props: {
          attr: (_g = (_f = attrs === null || attrs === void 0 ? void 0 : attrs.icon) === null || _f === void 0 ? void 0 : _f.advanced) === null || _g === void 0 ? void 0 : _g.size,
          property: "font-size"
        }
      }]
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CssStyle, {
    selector: orderClass,
    attr: attrs.css,
    cssFields: _custom_css__WEBPACK_IMPORTED_MODULE_2__.cssFields
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CssStyle, {
    selector: orderClass,
    attr: attrs.css,
    cssFields: _custom_css__WEBPACK_IMPORTED_MODULE_2__.cssFields
  }));
};

/***/ }),

/***/ "./src/components/static-module/custom-css.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cssFields: () => (/* binding */ cssFields)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/static-module/module.json");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
// WordPress dependencies.


var customCssFields = _module_json__WEBPACK_IMPORTED_MODULE_1__.customCssFields;
customCssFields.contentContainer.label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Content Container', 'd5-extension-example-modules');
customCssFields.title.label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title', 'd5-extension-example-modules');
customCssFields.content.label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Content', 'd5-extension-example-modules');
customCssFields.image.label = (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Image', 'd5-extension-example-modules');
var cssFields = __assign({}, customCssFields);

/***/ }),

/***/ "./src/components/static-module/edit.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StaticModuleEdit: () => (/* binding */ StaticModuleEdit)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/static-module/styles.tsx");
/* harmony import */ var _module_classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/static-module/module-classnames.ts");
/* harmony import */ var _module_script_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/static-module/module-script-data.tsx");
// External Dependencies.

// Divi Dependencies.




/**
 * Static Module edit component of visual builder.
 *
 * @since ??
 *
 * @param {StaticModuleEditProps} props React component props.
 *
 * @returns {ReactElement}
 */
var StaticModuleEdit = function (props) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
  var attrs = props.attrs,
    elements = props.elements,
    id = props.id,
    name = props.name;
  // Get image attributes.
  var imageSrc = (_e = (_d = (_c = (_b = (_a = attrs === null || attrs === void 0 ? void 0 : attrs.image) === null || _a === void 0 ? void 0 : _a.innerContent) === null || _b === void 0 ? void 0 : _b.desktop) === null || _c === void 0 ? void 0 : _c.value) === null || _d === void 0 ? void 0 : _d.src) !== null && _e !== void 0 ? _e : '';
  var imageAlt = (_k = (_j = (_h = (_g = (_f = attrs === null || attrs === void 0 ? void 0 : attrs.image) === null || _f === void 0 ? void 0 : _f.innerContent) === null || _g === void 0 ? void 0 : _g.desktop) === null || _h === void 0 ? void 0 : _h.value) === null || _j === void 0 ? void 0 : _j.alt) !== null && _k !== void 0 ? _k : '';
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.ModuleContainer, {
    attrs: attrs,
    elements: elements,
    id: id,
    name: name,
    stylesComponent: _styles__WEBPACK_IMPORTED_MODULE_2__.ModuleStyles,
    classnamesFunction: _module_classnames__WEBPACK_IMPORTED_MODULE_3__.moduleClassnames,
    scriptDataComponent: _module_script_data__WEBPACK_IMPORTED_MODULE_4__.ModuleScriptData
  }, elements.styleComponents({
    attrName: 'module'
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "example_static_module__inner"
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "example_static_module__image"
  }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: imageSrc,
    alt: imageAlt
  })), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "example_static_module__content-container"
  }, elements.render({
    attrName: 'title'
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "example_static_module__content"
  }, elements.render({
    attrName: 'content'
  })))));
};

/***/ }),

/***/ "./src/components/static-module/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   staticModule: () => (/* binding */ staticModule)
/* harmony export */ });
/* harmony import */ var _module_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/components/static-module/module.json");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/components/static-module/edit.tsx");
/* harmony import */ var _placeholder_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/static-module/placeholder-content.ts");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/static-module/style.scss");
/* harmony import */ var _module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/static-module/module.scss");
// Local dependencies.



// Styles.


var staticModule = {
  // Imported json has no inferred type hence type-cast is necessary.
  metadata: _module_json__WEBPACK_IMPORTED_MODULE_0__,
  placeholderContent: _placeholder_content__WEBPACK_IMPORTED_MODULE_2__.placeholderContent,
  renderers: {
    edit: _edit__WEBPACK_IMPORTED_MODULE_1__.StaticModuleEdit
  }
};

/***/ }),

/***/ "./src/components/static-module/module-classnames.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleClassnames: () => (/* binding */ moduleClassnames)
/* harmony export */ });
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Module classnames function for Static Module.
 *
 * @since ??
 *
 * @param {ModuleClassnamesParams<StaticModuleAttrs>} param0 Function parameters.
 */
var moduleClassnames = function (_a) {
  var _b, _c;
  var classnamesInstance = _a.classnamesInstance,
    attrs = _a.attrs;
  // Text Options.
  classnamesInstance.add((0,_divi_module__WEBPACK_IMPORTED_MODULE_0__.textOptionsClassnames)((_c = (_b = attrs === null || attrs === void 0 ? void 0 : attrs.module) === null || _b === void 0 ? void 0 : _b.advanced) === null || _c === void 0 ? void 0 : _c.text));
};

/***/ }),

/***/ "./src/components/static-module/module-script-data.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleScriptData: () => (/* binding */ ModuleScriptData)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Static module's script data component.
 *
 * @since ??
 *
 * @param {ModuleScriptDataProps<StaticModuleAttrs>} props React component props.
 *
 * @returns {ReactElement}
 */
var ModuleScriptData = function (_a) {
  var elements = _a.elements;
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, elements.scriptData({
    attrName: 'module'
  }));
};

/***/ }),

/***/ "./src/components/static-module/module.json":
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"name":"example/static-module","d4Shortcode":"","title":"Static Module","titles":"Static Modules","moduleIcon":"example/module-static","moduleClassName":"example_static_module","moduleOrderClassName":"example_static_module","category":"module","attributes":{"module":{"type":"object","selector":"{{selector}}","default":{"meta":{"adminLabel":{"desktop":{"value":"Static Module"}}},"advanced":{"text":{"text":{"desktop":{"value":{"color":"light"}}}}},"decoration":{"spacing":{"desktop":{"value":{"margin":{"top":"0px","right":"auto","bottom":"30px","left":"auto"}}}}}},"defaultPrintedStyle":{"decoration":{"background":{"desktop":{"value":{"color":"#ecf4f7"}}}}},"styleProps":{"border":{"important":true}},"settings":{"meta":{"adminLabel":{}},"advanced":{"link":{},"text":{},"htmlAttributes":{}},"decoration":{"background":{},"sizing":{},"spacing":{},"border":{},"boxShadow":{},"filters":{},"transform":{},"animation":{},"overflow":{},"disabledOn":{},"transition":{},"position":{},"zIndex":{},"scroll":{},"sticky":{}}}},"image":{"type":"object","selector":"{{selector}} .example_static_module__image img","styleProps":{"border":{"important":true}},"settings":{"innerContent":{"groupType":"group-items","items":{"src":{"groupSlug":"contentImage","priority":10,"render":true,"subName":"src","label":"Image","description":"Upload an Image","features":{"sticky":false,"dynamicContent":false},"component":{"name":"divi/upload","type":"field"}}}},"decoration":{"border":{"groupType":"group-item","item":{"groupSlug":"designImage","priority":10,"render":true,"component":{"type":"group","name":"divi/border","props":{"grouped":false}}}},"spacing":{"groupType":"group-item","item":{"groupSlug":"designImage","priority":20,"render":true,"component":{"type":"group","name":"divi/spacing","props":{"grouped":false}}}},"boxShadow":{"groupType":"group-item","item":{"groupSlug":"designImage","priority":30,"render":true,"component":{"type":"group","name":"divi/box-shadow","props":{"grouped":false}}}},"filters":{"groupType":"group-item","item":{"groupSlug":"designImage","priority":40,"render":true,"component":{"type":"group","name":"divi/filters","props":{"grouped":false}}}}}}},"title":{"type":"object","selector":"{{selector}} .example_static_module__title","default":{"decoration":{"font":{"font":{"desktop":{"value":{"headingLevel":"h2"}}}}}},"defaultPrintedStyle":{"decoration":{"font":{"font":{"desktop":{"value":{"size":"26px","lineHeight":"1em","weight":"500"}}}}}},"styleProps":{"font":{"important":{"font":{"desktop":{"value":{"color":true}}}}}},"settings":{"innerContent":{"groupType":"group-item","item":{"groupName":"mainContent","priority":10,"render":true,"attrName":"title.innerContent","label":"Title","description":"Input your value to action title here.","features":{"sticky":false,"dynamicContent":false},"component":{"name":"divi/text","type":"field"}}},"decoration":{"font":{"priority":10,"component":{"props":{"groupLabel":"Title Text","fieldLabel":"Title","fields":{"headingLevel":{"render":false}}}}}}},"tagName":"h2","attributes":{"class":"example_static_module__title"},"inlineEditor":"plainText","elementType":"heading","childrenSanitizer":"et_core_esc_previously"},"content":{"type":"object","selector":"{{selector}} .example_static_module__content","tagName":"div","attributes":{"class":"example_static_module__content"},"inlineEditor":"richText","childrenSanitizer":"et_core_esc_previously","styleProps":{"bodyFont":{"selectors":{"desktop":{"value":"{{selector}} .example_static_module__content"}}}},"settings":{"innerContent":{"groupType":"group-item","item":{"groupName":"mainContent","priority":20,"render":true,"attrName":"content.innerContent","label":"Content","description":"Input the main text content for your module here.","features":{"sticky":false,"dynamicContent":false},"component":{"name":"divi/richtext","type":"field"}}},"decoration":{"bodyFont":{}}}}},"customCssFields":{"contentContainer":{"subName":"contentContainer","selectorSuffix":" .example_static_module__content-container"},"title":{"subName":"title","selector":"div{{selector}}","selectorSuffix":" .example_static_module__title"},"content":{"subName":"content","selectorSuffix":" .example_static_module__content"},"image":{"subName":"image","selectorSuffix":" .example_static_module__image img"}},"settings":{"content":"auto","design":"auto","advanced":"auto","groups":{"contentImage":{"panel":"content","priority":20,"groupName":"contentImage","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Image"}}},"designImage":{"panel":"design","priority":10,"groupName":"designImage","multiElements":true,"component":{"name":"divi/composite","props":{"groupLabel":"Image Style"}}}}}}');

/***/ }),

/***/ "./src/components/static-module/module.scss":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/static-module/placeholder-content.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   placeholderContent: () => (/* binding */ placeholderContent)
/* harmony export */ });
var placeholderContent = {
  title: {
    innerContent: {
      desktop: {
        value: 'placeholder.title'
      }
    }
  },
  content: {
    innerContent: {
      desktop: {
        value: 'placeholder.body'
      }
    }
  },
  image: {
    innerContent: {
      desktop: {
        value: {
          src: 'placeholder.image.landscape'
        }
      }
    }
  }
};

/***/ }),

/***/ "./src/components/static-module/style.scss":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components/static-module/styles.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ModuleStyles: () => (/* binding */ ModuleStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@divi/module");
/* harmony import */ var _divi_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_divi_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _custom_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/components/static-module/custom-css.ts");
// External dependencies.

// Divi dependencies.


/**
 * Static Module's style components.
 *
 * @since ??
 */
var ModuleStyles = function (_a) {
  var _b, _c;
  var attrs = _a.attrs,
    elements = _a.elements,
    settings = _a.settings,
    orderClass = _a.orderClass,
    mode = _a.mode,
    state = _a.state,
    noStyleTag = _a.noStyleTag;
  var textSelector = "".concat(orderClass, " .example_static_module__content-container");
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.StyleContainer, {
    mode: mode,
    state: state,
    noStyleTag: noStyleTag
  }, elements.style({
    attrName: 'module',
    styleProps: {
      disabledOn: {
        disabledModuleVisibility: settings === null || settings === void 0 ? void 0 : settings.disabledModuleVisibility
      },
      advancedStyles: [{
        componentName: "divi/text",
        props: {
          selector: textSelector,
          attr: (_c = (_b = attrs === null || attrs === void 0 ? void 0 : attrs.module) === null || _b === void 0 ? void 0 : _b.advanced) === null || _c === void 0 ? void 0 : _c.text
        }
      }]
    }
  }), elements.style({
    attrName: 'image'
  }), elements.style({
    attrName: 'title'
  }), elements.style({
    attrName: 'content'
  }), react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_divi_module__WEBPACK_IMPORTED_MODULE_1__.CssStyle, {
    selector: orderClass,
    attr: attrs.css,
    cssFields: _custom_css__WEBPACK_IMPORTED_MODULE_2__.cssFields
  }));
};

/***/ }),

/***/ "./src/icons/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   moduleD4: () => (/* reexport module object */ _module_d4__WEBPACK_IMPORTED_MODULE_2__),
/* harmony export */   moduleDynamic: () => (/* reexport module object */ _module_dynamic__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   moduleParent: () => (/* reexport module object */ _module_parent__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   moduleStatic: () => (/* reexport module object */ _module_static__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _module_parent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/icons/module-parent/index.tsx");
/* harmony import */ var _module_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/icons/module-static/index.tsx");
/* harmony import */ var _module_d4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/icons/module-d4/index.tsx");
/* harmony import */ var _module_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/icons/module-dynamic/index.tsx");









/***/ }),

/***/ "./src/icons/module-d4/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   component: () => (/* binding */ component),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   viewBox: () => (/* binding */ viewBox)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// Icon data.
var name = 'example/module-d4'; // Unique name.
var viewBox = '0 96 960 960'; // You will need to adjust this to match your SVG.
var component = function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M480.276 1006q-88.916 0-167.743-33.104-78.828-33.103-137.577-91.852-58.749-58.749-91.852-137.535Q50 664.723 50 575.542q0-89.438 33.162-167.491 33.163-78.053 92.175-136.942 59.011-58.889 137.533-91.999Q391.393 146 480.458 146q89.428 0 167.518 33.093T784.94 271.06q58.874 58.874 91.967 137.215Q910 486.615 910 575.808q0 89.192-33.11 167.518-33.11 78.326-91.999 137.337-58.889 59.012-137.167 92.174Q569.447 1006 480.276 1006ZM523 774h97V378h-97v161h-86V378h-97v259h183v137Z"
  });
}; // Your SVG path. without the svg tag.

/***/ }),

/***/ "./src/icons/module-dynamic/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   component: () => (/* binding */ component),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   viewBox: () => (/* binding */ viewBox)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// Icon data.
var name = 'example/module-dynamic'; // Unique name.
var viewBox = '0 96 960 960'; // You will need to adjust this to match your SVG.
var component = function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "m552 240-36 312h192L415 912h-21l48-264H282l248-408h22Z"
  });
}; // Your SVG path. without the svg tag.

/***/ }),

/***/ "./src/icons/module-parent/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   component: () => (/* binding */ component),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   viewBox: () => (/* binding */ viewBox)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// Icon data.
var name = 'example/module-parent'; // Unique name.
var viewBox = '0 96 960 960'; // You will need to adjust this to match your SVG.
var component = function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M238 879 62 704l91-90 84 85 170-171 91 91-260 260Zm0-312L62 392l91-90 85 85 169-171 91 91-260 260Zm291 229V668h369v128H529Zm0-312V356h369v128H529Z"
  });
}; // Your SVG path. without the svg tag.

/***/ }),

/***/ "./src/icons/module-static/index.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   component: () => (/* binding */ component),
/* harmony export */   name: () => (/* binding */ name),
/* harmony export */   viewBox: () => (/* binding */ viewBox)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

// Icon data.
var name = 'example/module-static'; // Unique name.
var viewBox = '0 96 960 960'; // You will need to adjust this to match your SVG.
var component = function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M114 838V710h491v128H114Zm0-198V512h733v128H114Zm0-198V314h733v128H114Z"
  });
}; // Your SVG path. without the svg tag.

/***/ }),

/***/ "./src/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _divi_module_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@divi/module-library");
/* harmony import */ var _divi_module_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_divi_module_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_child_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/components/child-module/index.ts");
/* harmony import */ var _components_d4_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/components/d4-module/index.ts");
/* harmony import */ var _components_dynamic_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/components/dynamic-module/index.ts");
/* harmony import */ var _components_parent_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/components/parent-module/index.ts");
/* harmony import */ var _components_static_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/components/static-module/index.ts");
/* harmony import */ var _module_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/module-icons.ts");









// Register modules.
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addAction)('divi.moduleLibrary.registerModuleLibraryStore.after', 'extensionExample', function () {
  (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_2__.registerModule)(_components_static_module__WEBPACK_IMPORTED_MODULE_7__.staticModule.metadata, (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(_components_static_module__WEBPACK_IMPORTED_MODULE_7__.staticModule, 'metadata'));
  (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_2__.registerModule)(_components_dynamic_module__WEBPACK_IMPORTED_MODULE_5__.dynamicModule.metadata, (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(_components_dynamic_module__WEBPACK_IMPORTED_MODULE_5__.dynamicModule, 'metadata'));
  (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_2__.registerModule)(_components_child_module__WEBPACK_IMPORTED_MODULE_3__.childModule.metadata, (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(_components_child_module__WEBPACK_IMPORTED_MODULE_3__.childModule, 'metadata'));
  (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_2__.registerModule)(_components_parent_module__WEBPACK_IMPORTED_MODULE_6__.parentModule.metadata, (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(_components_parent_module__WEBPACK_IMPORTED_MODULE_6__.parentModule, 'metadata'));
  (0,_divi_module_library__WEBPACK_IMPORTED_MODULE_2__.registerModule)(_components_d4_module__WEBPACK_IMPORTED_MODULE_4__.d4Module.metadata, (0,lodash__WEBPACK_IMPORTED_MODULE_0__.omit)(_components_d4_module__WEBPACK_IMPORTED_MODULE_4__.d4Module, 'metadata'));
});

/***/ }),

/***/ "./src/module-icons.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@wordpress/hooks");
/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/icons/index.ts");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};


// Add module icons to the icon library.
(0,_wordpress_hooks__WEBPACK_IMPORTED_MODULE_0__.addFilter)('divi.iconLibrary.icon.map', 'extensionExample', function (icons) {
  var _a;
  return __assign(__assign({}, icons), (_a = {}, _a[_icons__WEBPACK_IMPORTED_MODULE_1__.moduleParent.name] = _icons__WEBPACK_IMPORTED_MODULE_1__.moduleParent, _a[_icons__WEBPACK_IMPORTED_MODULE_1__.moduleStatic.name] = _icons__WEBPACK_IMPORTED_MODULE_1__.moduleStatic, _a[_icons__WEBPACK_IMPORTED_MODULE_1__.moduleDynamic.name] = _icons__WEBPACK_IMPORTED_MODULE_1__.moduleDynamic, _a[_icons__WEBPACK_IMPORTED_MODULE_1__.moduleD4.name] = _icons__WEBPACK_IMPORTED_MODULE_1__.moduleD4, _a));
});

/***/ }),

/***/ "@divi/icon-library":
/***/ ((module) => {

module.exports = divi.iconLibrary;

/***/ }),

/***/ "@divi/module":
/***/ ((module) => {

module.exports = divi.module;

/***/ }),

/***/ "@divi/module-library":
/***/ ((module) => {

module.exports = divi.moduleLibrary;

/***/ }),

/***/ "@divi/module-utils":
/***/ ((module) => {

module.exports = divi.moduleUtils;

/***/ }),

/***/ "@divi/rest":
/***/ ((module) => {

module.exports = divi.rest;

/***/ }),

/***/ "@divi/style-library":
/***/ ((module) => {

module.exports = divi.styleLibrary;

/***/ }),

/***/ "@wordpress/hooks":
/***/ ((module) => {

module.exports = vendor.wp.hooks;

/***/ }),

/***/ "@wordpress/i18n":
/***/ ((module) => {

module.exports = vendor.wp.i18n;

/***/ }),

/***/ "lodash":
/***/ ((module) => {

module.exports = lodash;

/***/ }),

/***/ "react":
/***/ ((module) => {

module.exports = vendor.React;

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
/******/ 			"./style-bundle": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["./style-bundle"], () => (__webpack_require__("./src/index.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map