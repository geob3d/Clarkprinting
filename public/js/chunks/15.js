(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_free_transform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-free-transform */ "./node_modules/vue-free-transform/dist/FreeTransform.common.js");
/* harmony import */ var vue_free_transform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_free_transform__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "app",
  components: {
    FreeTransform: vue_free_transform__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      elements: [{
        id: "el-1",
        x: 100,
        y: 50,
        scaleX: 1,
        scaleY: 1,
        width: 100,
        height: 100,
        angle: 0,
        classPrefix: "tr",
        styles: {
          background: "linear-gradient(135deg, #0FF0B3 0%,#036ED9 100%)"
        }
      }, {
        id: "el-2",
        x: 225,
        y: 225,
        scaleX: 1,
        scaleY: 1,
        width: 100,
        height: 100,
        angle: 0,
        classPrefix: "tr2",
        text: "Scale Enabled",
        styles: {
          padding: "5px",
          background: "linear-gradient(135deg, #fad961 0%,#f76b1c 100%)"
        }
      }, {
        id: "el-3",
        x: 100,
        y: 225,
        scaleX: 1,
        scaleY: 1,
        width: 100,
        height: 100,
        angle: 0,
        classPrefix: "tr2",
        text: "Scale Disabled",
        styles: {
          padding: 5,
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #fad961 0%,#f76b1c 100%)"
        },
        disableScale: true
      }, {
        id: "el-4",
        x: 100,
        y: 400,
        scaleX: 1,
        scaleY: 1,
        width: 100,
        height: 100,
        angle: 45,
        classPrefix: "tr3",
        styles: {
          background: "linear-gradient(135deg, #b1ea4d 0%,#459522 100%)"
        }
      }],
      offsetX: 0,
      offsetY: 0
    };
  },
  mounted: function mounted() {
    this.offsetX = this.$refs.workspace.offsetLeft;
    this.offsetY = this.$refs.workspace.offsetTop;
  },
  methods: {
    update: function update(id, payload) {
      this.elements = this.elements.map(function (item) {
        if (item.id === id) {
          return _objectSpread({}, item, {}, payload);
        }

        return item;
      });
    },
    getElementStyles: function getElementStyles(element) {
      var styles = element.styles ? element.styles : {};
      return _objectSpread({
        width: "".concat(element.width, "px"),
        height: "".concat(element.height, "px")
      }, styles);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#app {\n  display: -webkit-box;\n  display: flex;\n}[dir] #app {\n  background: #f8fafc;\n}\n.wrapper {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.workspace {\n  width: 800px;\n  height: 800px;\n}\n[dir] .workspace {\n  margin: 25px auto;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  background: #fff;\n}\n* {\n  box-sizing: border-box;\n}\n.tr-transform__content {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.tr-transform__rotator {\n  top: -45px;\n}\n[dir=ltr] .tr-transform__rotator {\n  left: calc(50% - 7px);\n}\n[dir=rtl] .tr-transform__rotator {\n  right: calc(50% - 7px);\n}\n.tr-transform__rotator,\r\n.tr-transform__scale-point {\n  width: 15px;\n  height: 15px;\n  position: absolute;\n}\n[dir] .tr-transform__rotator, [dir] .tr-transform__scale-point {\n  background: #fff;\n  border-radius: 50%;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n}\n[dir] .tr-transform__rotator:hover, [dir] .tr-transform__scale-point:hover {\n  background: #f1f5f8;\n}\n[dir] .tr-transform__rotator:active, [dir] .tr-transform__scale-point:active {\n  background: #dae1e7;\n}\n.tr-transform__scale-point--tl {\n  top: -7px;\n}\n[dir=ltr] .tr-transform__scale-point--tl {\n  left: -7px;\n}\n[dir=rtl] .tr-transform__scale-point--tl {\n  right: -7px;\n}\n.tr-transform__scale-point--ml {\n  top: calc(50% - 7px);\n}\n[dir=ltr] .tr-transform__scale-point--ml {\n  left: -7px;\n}\n[dir=rtl] .tr-transform__scale-point--ml {\n  right: -7px;\n}\n.tr-transform__scale-point--tr {\n  top: -7px;\n}\n[dir=ltr] .tr-transform__scale-point--tr {\n  left: calc(100% - 7px);\n}\n[dir=rtl] .tr-transform__scale-point--tr {\n  right: calc(100% - 7px);\n}\n.tr-transform__scale-point--tm {\n  top: -7px;\n}\n[dir=ltr] .tr-transform__scale-point--tm {\n  left: calc(50% - 7px);\n}\n[dir=rtl] .tr-transform__scale-point--tm {\n  right: calc(50% - 7px);\n}\n.tr-transform__scale-point--mr {\n  top: calc(50% - 7px);\n}\n[dir=ltr] .tr-transform__scale-point--mr {\n  left: calc(100% - 7px);\n}\n[dir=rtl] .tr-transform__scale-point--mr {\n  right: calc(100% - 7px);\n}\n.tr-transform__scale-point--bl {\n  top: calc(100% - 7px);\n}\n[dir=ltr] .tr-transform__scale-point--bl {\n  left: -7px;\n}\n[dir=rtl] .tr-transform__scale-point--bl {\n  right: -7px;\n}\n.tr-transform__scale-point--bm {\n  top: calc(100% - 7px);\n}\n[dir=ltr] .tr-transform__scale-point--bm {\n  left: calc(50% - 7px);\n}\n[dir=rtl] .tr-transform__scale-point--bm {\n  right: calc(50% - 7px);\n}\n.tr-transform__scale-point--br {\n  top: calc(100% - 7px);\n}\n[dir=ltr] .tr-transform__scale-point--br {\n  left: calc(100% - 7px);\n}\n[dir=rtl] .tr-transform__scale-point--br {\n  right: calc(100% - 7px);\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "app" } }, [
    _c("div", { staticClass: "App" }, [
      _c("div", { staticClass: "wrapper" }, [
        _c(
          "div",
          { ref: "workspace", staticClass: "workspace" },
          _vm._l(_vm.elements, function(element) {
            return _c(
              "FreeTransform",
              {
                key: element.id,
                attrs: {
                  x: element.x,
                  y: element.y,
                  "scale-x": element.scaleX,
                  "scale-y": element.scaleY,
                  width: element.width,
                  height: element.height,
                  angle: element.angle,
                  "offset-x": _vm.offsetX,
                  "offset-y": _vm.offsetY,
                  "disable-scale": element.disableScale === true
                },
                on: {
                  update: function($event) {
                    return _vm.update(element.id, $event)
                  }
                }
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "element",
                    style: _vm.getElementStyles(element)
                  },
                  [
                    _vm._v(
                      "\n            " + _vm._s(element.text) + "\n          "
                    )
                  ]
                )
              ]
            )
          }),
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/Home.vue":
/*!*****************************************!*\
  !*** ./resources/js/src/views/Home.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=e85b2cee& */ "./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Home.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/src/views/Home.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=e85b2cee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);