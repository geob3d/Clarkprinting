(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/ProductCategories/ProductCatAddSideBar.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/ProductCategories/ProductCatAddSideBar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
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
  data: function data() {
    return {
      loading: false,
      prodCategories: {},
      buttontext: 'Add',
      error: null,
      prodCategory: {
        name: '',
        description: ''
      },
      prodCategoryform: {}
    };
  },
  created: function created() {
    var _this = this;

    this.getProdCategories();
    var uri = "/api/product/categories/".concat(this.$route.params.id);
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(uri).then(function (response) {
      _this.prodCategory = response.data.data;
    });
  },
  watch: {},
  mounted: function mounted() {
    this.buttonvalue();
  },
  methods: {
    getProdCategories: function getProdCategories() {
      var _this2 = this;

      this.error = this.prodCategories = null;
      this.loading = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/product/categories').then(function (response) {
        _this2.loading = false;
        _this2.prodCategories = response.data;
      });
    },
    addProdCategory: function addProdCategory() {
      var _this3 = this;

      this.error = this.prodCategories = null;
      this.loading = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/company', this.prodCategory).then(function (response) {
        _this3.getProdCategories();
      }).then(function (data) {
        _this3.getProdCategories();
      }).catch(function (err) {
        return console.log(err);
      });
    },
    updateProdCategory: function updateProdCategory() {
      var _this4 = this;

      var uri = "/api/product/category/".concat(this.$route.params.id);
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(uri, this.prodCategory).then(function (response) {
        _this4.$router.push({
          name: 'ProductCategoryInfo'
        });
      });
    },
    productCatFormValue: function productCatFormValue() {
      if ("id" in this.$route.params) {
        this.buttontext = 'Update';
        this.updateProdCategory();
      } else {
        this.addProdCategory();
      }

      ;
    },
    //For the Dynamic Button
    buttonvalue: function buttonvalue() {
      if ("id" in this.$route.params) {
        this.buttontext = 'Update';
      } else {
        this.buttontext;
      }

      ;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/ProductCategories/ProductCatAddSideBar.vue?vue&type=template&id=87a001e0&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/ProductCategories/ProductCatAddSideBar.vue?vue&type=template&id=87a001e0& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "centerx labelx" }, [
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.productCatFormValue($event)
          }
        }
      },
      [
        _c("vs-input", {
          attrs: { label: "Company Name", placeholder: "Company Name" },
          model: {
            value: _vm.prodCategory.name,
            callback: function($$v) {
              _vm.$set(_vm.prodCategory, "name", $$v)
            },
            expression: "prodCategory.name"
          }
        }),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("vs-textarea", {
          attrs: {
            label: "Company Code",
            width: "50%",
            placeholder: "Company Code"
          },
          model: {
            value: _vm.prodCategory.description,
            callback: function($$v) {
              _vm.$set(_vm.prodCategory, "description", $$v)
            },
            expression: "prodCategory.description"
          }
        }),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass:
              "btn btn-primary btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary",
            attrs: { type: "submit" }
          },
          [_vm._v(_vm._s(_vm.buttontext) + " Product Category")]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/ProductCategories/ProductCatAddSideBar.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/ProductCategories/ProductCatAddSideBar.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductCatAddSideBar_vue_vue_type_template_id_87a001e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductCatAddSideBar.vue?vue&type=template&id=87a001e0& */ "./resources/js/src/views/ProductCategories/ProductCatAddSideBar.vue?vue&type=template&id=87a001e0&");
/* harmony import */ var _ProductCatAddSideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductCatAddSideBar.vue?vue&type=script&lang=js& */ "./resources/js/src/views/ProductCategories/ProductCatAddSideBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductCatAddSideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductCatAddSideBar_vue_vue_type_template_id_87a001e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductCatAddSideBar_vue_vue_type_template_id_87a001e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/ProductCategories/ProductCatAddSideBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/ProductCategories/ProductCatAddSideBar.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/views/ProductCategories/ProductCatAddSideBar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCatAddSideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductCatAddSideBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/ProductCategories/ProductCatAddSideBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCatAddSideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/ProductCategories/ProductCatAddSideBar.vue?vue&type=template&id=87a001e0&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/views/ProductCategories/ProductCatAddSideBar.vue?vue&type=template&id=87a001e0& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCatAddSideBar_vue_vue_type_template_id_87a001e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductCatAddSideBar.vue?vue&type=template&id=87a001e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/ProductCategories/ProductCatAddSideBar.vue?vue&type=template&id=87a001e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCatAddSideBar_vue_vue_type_template_id_87a001e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductCatAddSideBar_vue_vue_type_template_id_87a001e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);