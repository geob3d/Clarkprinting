(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Page2.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Page2.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_prism_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-prism-component */ "./node_modules/vue-prism-component/dist/vue-prism-component.common.js");
/* harmony import */ var vue_prism_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_prism_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_free_transform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-free-transform */ "./node_modules/vue-free-transform/dist/FreeTransform.common.js");
/* harmony import */ var vue_free_transform__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_free_transform__WEBPACK_IMPORTED_MODULE_2__);
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
  components: {
    FreeTransform: vue_free_transform__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      rows: [],
      "fields": [{
        "label": "Input",
        "name": "fulllName",
        "type": "text"
      }, {
        "label": "Date",
        "name": "Date",
        "type": "date"
      }, {
        "label": "Time",
        "name": "Time",
        "type": "time"
      }]
    };
  },
  mounted: function mounted() {
    this.offsetX = this.$refs.workspace.offsetLeft;
    this.offsetY = this.$refs.workspace.offsetTop;
  },
  methods: {
    update: function update(id, payload) {
      this.rows = this.rows.map(function (item) {
        if (item.id === id) {
          return _objectSpread({}, item, {}, payload);
        }

        return item;
      });
    },
    getElementStyles: function getElementStyles(row) {
      var styles = row.styles ? row.styles : {};
      return _objectSpread({
        width: "".concat(row.width, "px"),
        height: "".concat(row.height, "px")
      }, styles);
    },
    addRow: function addRow() {
      var elem = document.createElement('tr');
      this.rows.push({
        id: "",
        //!model id
        prodID: "",
        // user this. param
        Name: "",
        fieldType: "",
        field: " ",
        x: 225,
        y: 225,
        scaleX: 1,
        scaleY: 1,
        width: 80,
        height: 50,
        angle: 0
      });

      offsetX: 0;

      offsetY: 0;
    },
    removeElement: function removeElement(index) {
      this.rows.splice(index, 1);
    },
    setFilename: function setFilename(event, row) {
      var file = event.target.files[0];
      row.file = file;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Page2.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Page2.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fileContainer {\n  overflow: hidden;\n  position: relative;\n}\n.fileContainer [type=file] {\n  display: block;\n  font-size: 999px;\n  filter: alpha(opacity=0);\n  min-height: 21px;\n  min-width: 100%;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n}\n[dir] .fileContainer [type=file] {\n  cursor: inherit;\n}\n[dir=ltr] .fileContainer [type=file] {\n  right: 0;\n  text-align: right;\n}\n[dir=rtl] .fileContainer [type=file] {\n  left: 0;\n  text-align: left;\n}\n.fileContainer {\n  height: 21px;\n}\n[dir] .fileContainer {\n  background: #E3E3E3;\n  padding: 0.5em;\n}\n[dir=ltr] .fileContainer {\n  float: left;\n}\n[dir=rtl] .fileContainer {\n  float: right;\n}\n[dir] .fileContainer [type=file] {\n  cursor: pointer;\n}\n[dir] #app {\n  background: #f8fafc;\n}\n.wrapper {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n.workspace {\n  width: 800px;\n  height: 800px;\n}\n[dir] .workspace {\n  margin: 25px auto;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  background: #fff;\n}\n* {\n  box-sizing: border-box;\n}\n.tr-transform__content {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.tr-transform__rotator {\n  top: -45px;\n}\n[dir=ltr] .tr-transform__rotator {\n  left: calc(50% - 7px);\n}\n[dir=rtl] .tr-transform__rotator {\n  right: calc(50% - 7px);\n}\n.tr-transform__rotator,\n.tr-transform__scale-point {\n  width: 15px;\n  height: 15px;\n  position: absolute;\n}\n[dir] .tr-transform__rotator, [dir] .tr-transform__scale-point {\n  background: #fff;\n  border-radius: 50%;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  cursor: pointer;\n}\n[dir] .tr-transform__rotator:hover, [dir] .tr-transform__scale-point:hover {\n  background: #f1f5f8;\n}\n[dir] .tr-transform__rotator:active, [dir] .tr-transform__scale-point:active {\n  background: #dae1e7;\n}\n.tr-transform__scale-point--tl {\n  top: -7px;\n}\n[dir=ltr] .tr-transform__scale-point--tl {\n  left: -7px;\n}\n[dir=rtl] .tr-transform__scale-point--tl {\n  right: -7px;\n}\n.tr-transform__scale-point--ml {\n  top: calc(50% - 7px);\n}\n[dir=ltr] .tr-transform__scale-point--ml {\n  left: -7px;\n}\n[dir=rtl] .tr-transform__scale-point--ml {\n  right: -7px;\n}\n.tr-transform__scale-point--tr {\n  top: -7px;\n}\n[dir=ltr] .tr-transform__scale-point--tr {\n  left: calc(100% - 7px);\n}\n[dir=rtl] .tr-transform__scale-point--tr {\n  right: calc(100% - 7px);\n}\n.tr-transform__scale-point--tm {\n  top: -7px;\n}\n[dir=ltr] .tr-transform__scale-point--tm {\n  left: calc(50% - 7px);\n}\n[dir=rtl] .tr-transform__scale-point--tm {\n  right: calc(50% - 7px);\n}\n.tr-transform__scale-point--mr {\n  top: calc(50% - 7px);\n}\n[dir=ltr] .tr-transform__scale-point--mr {\n  left: calc(100% - 7px);\n}\n[dir=rtl] .tr-transform__scale-point--mr {\n  right: calc(100% - 7px);\n}\n.tr-transform__scale-point--bl {\n  top: calc(100% - 7px);\n}\n[dir=ltr] .tr-transform__scale-point--bl {\n  left: -7px;\n}\n[dir=rtl] .tr-transform__scale-point--bl {\n  right: -7px;\n}\n.tr-transform__scale-point--bm {\n  top: calc(100% - 7px);\n}\n[dir=ltr] .tr-transform__scale-point--bm {\n  left: calc(50% - 7px);\n}\n[dir=rtl] .tr-transform__scale-point--bm {\n  right: calc(50% - 7px);\n}\n.tr-transform__scale-point--br {\n  top: calc(100% - 7px);\n}\n[dir=ltr] .tr-transform__scale-point--br {\n  left: calc(100% - 7px);\n}\n[dir=rtl] .tr-transform__scale-point--br {\n  right: calc(100% - 7px);\n}\n#data-list-list-view .vs-con-table {\n  /*\n    Below media-queries is fix for responsiveness of action buttons\n    Note: If you change action buttons or layout of this page, Please remove below style\n  */\n}\n@media (max-width: 689px) {\n#data-list-list-view .vs-con-table .vs-table--search {\n    max-width: unset;\n    width: 100%;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--search {\n    margin-left: 0;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--search {\n    margin-right: 0;\n}\n#data-list-list-view .vs-con-table .vs-table--search .vs-table--search-input {\n    width: 100%;\n}\n}\n@media (max-width: 461px) {\n#data-list-list-view .vs-con-table .items-per-page-handler {\n    display: none;\n}\n}\n@media (max-width: 341px) {\n#data-list-list-view .vs-con-table .data-list-btn-container {\n    width: 100%;\n}\n#data-list-list-view .vs-con-table .data-list-btn-container .dd-actions,\n#data-list-list-view .vs-con-table .data-list-btn-container .btn-add-new {\n    width: 100%;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .data-list-btn-container .dd-actions, [dir=ltr] #data-list-list-view .vs-con-table .data-list-btn-container .btn-add-new {\n    margin-right: 0 !important;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .data-list-btn-container .dd-actions, [dir=rtl] #data-list-list-view .vs-con-table .data-list-btn-container .btn-add-new {\n    margin-left: 0 !important;\n}\n}\n#data-list-list-view .vs-con-table .product-name {\n  max-width: 23rem;\n}\n#data-list-list-view .vs-con-table .vs-table--header {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--header {\n  margin-left: 1.5rem;\n  margin-right: 1.5rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--header {\n  margin-right: 1.5rem;\n  margin-left: 1.5rem;\n}\n#data-list-list-view .vs-con-table .vs-table--header > span {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search {\n  padding-top: 0;\n}\n#data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input {\n  font-size: 1rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input {\n  padding: 0.9rem 2.5rem;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input + i {\n  left: 1rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input + i {\n  right: 1rem;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input:focus + i {\n  left: 1rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input:focus + i {\n  right: 1rem;\n}\n#data-list-list-view .vs-con-table .vs-table {\n  border-collapse: separate;\n  border-spacing: 0 1.3rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table {\n  padding: 0 1rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table tr {\n  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);\n}\n[dir] #data-list-list-view .vs-con-table .vs-table tr td {\n  padding: 20px;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table tr td:first-child {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table tr td:first-child {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table tr td:last-child {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table tr td:last-child {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table tr td.td-check {\n  padding: 20px !important;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--thead th {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n#data-list-list-view .vs-con-table .vs-table--thead th .vs-table-text {\n  text-transform: uppercase;\n  font-weight: 600;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--thead th.td-check {\n  padding: 0 15px !important;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--thead tr {\n  background: none;\n  box-shadow: none;\n}\n#data-list-list-view .vs-con-table .vs-table--pagination {\n  -webkit-box-pack: center;\n          justify-content: center;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Page2.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Page2.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Page2.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Page2.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Page2.vue?vue&type=template&id=b5ffdd6e&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Page2.vue?vue&type=template&id=b5ffdd6e& ***!
  \*******************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    {
      staticClass: "data-list-container",
      attrs: { id: "app data-list-list-view" }
    },
    [
      _c(
        "vs-row",
        [
          _c(
            "vs-col",
            {
              attrs: {
                "vs-type": "flex",
                "vs-justify": "center",
                "vs-align": "center",
                "vs-w": "12"
              }
            },
            [
              [
                _c("div", { staticClass: "App" }, [
                  _c("div", { staticClass: "wrapper" }, [
                    _c(
                      "div",
                      { ref: "workspace", staticClass: "workspace" },
                      _vm._l(_vm.rows, function(row) {
                        return _c(
                          "div",
                          [
                            _c(
                              "FreeTransform",
                              {
                                key: row.id,
                                attrs: {
                                  x: row.x,
                                  y: row.y,
                                  "scale-x": row.scaleX,
                                  "scale-y": row.scaleY,
                                  width: row.width,
                                  height: row.height,
                                  angle: row.angle,
                                  "offset-x": _vm.offsetX,
                                  "offset-y": _vm.offsetY,
                                  "disable-scale": row.disableScale === true
                                },
                                on: {
                                  update: function($event) {
                                    return _vm.update(row.id, $event)
                                  }
                                }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass: "element",
                                    style: _vm.getElementStyles(_vm.rows)
                                  },
                                  [
                                    _vm._v(
                                      "\n                  " +
                                        _vm._s(row.field) +
                                        "\n                "
                                    )
                                  ]
                                )
                              ]
                            )
                          ],
                          1
                        )
                      }),
                      0
                    )
                  ])
                ])
              ]
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("vs-divider", { attrs: { position: "center" } }, [
        _vm._v("\n      Add Fields    \n  ")
      ]),
      _vm._v(" "),
      _c(
        "vs-row",
        [
          _c(
            "div",
            [
              _c(
                "vs-button",
                {
                  staticClass:
                    " items-center btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary",
                  attrs: { color: "primary", type: "border", icon: "add" },
                  on: { click: _vm.addRow }
                },
                [_vm._v(" Add Row")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-col",
            {
              attrs: {
                "vs-type": "flex",
                "vs-justify": "center",
                "vs-align": "center",
                "vs-w": "12"
              }
            },
            [
              _c("vs-table", { staticClass: "table" }, [
                _c(
                  "thead",
                  [
                    _c(
                      "vs-tr",
                      [
                        _c("vs-th", [_c("strong", [_vm._v("ProductID")])]),
                        _vm._v(" "),
                        _c("vs-th", [_c("strong", [_vm._v("Row ID")])]),
                        _vm._v(" "),
                        _c("vs-th", [_c("strong", [_vm._v("Field Name")])]),
                        _vm._v(" "),
                        _c("vs-th", [_c("strong", [_vm._v("Field Type")])]),
                        _vm._v(" "),
                        _c("vs-th", [_c("strong", [_vm._v("Field Value")])]),
                        _vm._v(" "),
                        _c("vs-th", [_c("strong", [_vm._v("Width")])]),
                        _vm._v(" "),
                        _c("vs-th", [_c("strong", [_vm._v("Height")])])
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.rows, function(row, index) {
                    return _c(
                      "tr",
                      [
                        _c("vs-td", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: row.prodID,
                                expression: "row.prodID"
                              }
                            ],
                            attrs: { type: "text" },
                            domProps: { value: row.prodID },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(row, "prodID", $event.target.value)
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("vs-td", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: row.id,
                                expression: "row.id"
                              }
                            ],
                            attrs: { type: "text" },
                            domProps: { value: row.id },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(row, "id", $event.target.value)
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("vs-td", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: row.name,
                                expression: "row.name"
                              }
                            ],
                            attrs: { type: "text" },
                            domProps: { value: row.name },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(row, "name", $event.target.value)
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c(
                          "vs-td",
                          [
                            _c(
                              "el-select",
                              {
                                attrs: {
                                  filterable: "",
                                  placeholder: "Select"
                                },
                                model: {
                                  value: row.fieldType,
                                  callback: function($$v) {
                                    _vm.$set(row, "fieldType", $$v)
                                  },
                                  expression: "row.fieldType"
                                }
                              },
                              _vm._l(_vm.fields, function(item) {
                                return _c("el-option", {
                                  key: item.id,
                                  attrs: { label: item.label, value: item.type }
                                })
                              }),
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("vs-td", [
                          row.fieldType === "checkbox" && row.fieldType
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: row.field,
                                    expression: "row.field"
                                  }
                                ],
                                key: "field-" + _vm.label,
                                attrs: {
                                  name: _vm.name,
                                  placeholder: _vm.label,
                                  type: "checkbox"
                                },
                                domProps: {
                                  checked: Array.isArray(row.field)
                                    ? _vm._i(row.field, null) > -1
                                    : row.field
                                },
                                on: {
                                  change: function($event) {
                                    var $$a = row.field,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = null,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          _vm.$set(
                                            row,
                                            "field",
                                            $$a.concat([$$v])
                                          )
                                      } else {
                                        $$i > -1 &&
                                          _vm.$set(
                                            row,
                                            "field",
                                            $$a
                                              .slice(0, $$i)
                                              .concat($$a.slice($$i + 1))
                                          )
                                      }
                                    } else {
                                      _vm.$set(row, "field", $$c)
                                    }
                                  }
                                }
                              })
                            : row.fieldType === "radio" && row.fieldType
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: row.field,
                                    expression: "row.field"
                                  }
                                ],
                                key: "field-" + _vm.label,
                                attrs: {
                                  name: _vm.name,
                                  placeholder: _vm.label,
                                  type: "radio"
                                },
                                domProps: { checked: _vm._q(row.field, null) },
                                on: {
                                  change: function($event) {
                                    return _vm.$set(row, "field", null)
                                  }
                                }
                              })
                            : row.fieldType
                            ? _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: row.field,
                                    expression: "row.field"
                                  }
                                ],
                                key: "field-" + _vm.label,
                                attrs: {
                                  name: _vm.name,
                                  placeholder: _vm.label,
                                  type: row.fieldType
                                },
                                domProps: { value: row.field },
                                on: {
                                  input: function($event) {
                                    if ($event.target.composing) {
                                      return
                                    }
                                    _vm.$set(row, "field", $event.target.value)
                                  }
                                }
                              })
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("vs-td", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: row.width,
                                expression: "row.width"
                              }
                            ],
                            attrs: { type: "text" },
                            domProps: { value: row.width },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(row, "width", $event.target.value)
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("vs-td", [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: row.height,
                                expression: "row.height"
                              }
                            ],
                            attrs: { type: "text" },
                            domProps: { value: row.height },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(row, "height", $event.target.value)
                              }
                            }
                          })
                        ]),
                        _vm._v(" "),
                        _c("vs-td", [
                          _c(
                            "a",
                            {
                              staticClass:
                                " items-center btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary",
                              staticStyle: { cursor: "pointer" },
                              attrs: {
                                color: "primary",
                                "vs-align": "center",
                                type: "border"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.removeElement(index)
                                }
                              }
                            },
                            [_vm._v("Remove")]
                          )
                        ])
                      ],
                      1
                    )
                  }),
                  0
                )
              ])
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/Page2.vue":
/*!******************************************!*\
  !*** ./resources/js/src/views/Page2.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Page2_vue_vue_type_template_id_b5ffdd6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page2.vue?vue&type=template&id=b5ffdd6e& */ "./resources/js/src/views/Page2.vue?vue&type=template&id=b5ffdd6e&");
/* harmony import */ var _Page2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Page2.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Page2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Page2_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Page2.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/Page2.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Page2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Page2_vue_vue_type_template_id_b5ffdd6e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Page2_vue_vue_type_template_id_b5ffdd6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Page2.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Page2.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/Page2.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Page2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Page2.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Page2.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Page2_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Page2.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/Page2.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Page2_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Page2.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Page2.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Page2_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Page2_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Page2_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Page2_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Page2_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/Page2.vue?vue&type=template&id=b5ffdd6e&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/Page2.vue?vue&type=template&id=b5ffdd6e& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Page2_vue_vue_type_template_id_b5ffdd6e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Page2.vue?vue&type=template&id=b5ffdd6e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Page2.vue?vue&type=template&id=b5ffdd6e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Page2_vue_vue_type_template_id_b5ffdd6e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Page2_vue_vue_type_template_id_b5ffdd6e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);