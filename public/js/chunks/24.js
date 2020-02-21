(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/ProductAttribute/ProductAttributeAddSideBar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/ProductAttribute/ProductAttributeAddSideBar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
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
      products: {},
      buttontext: 'Add',
      error: null,
      product: {
        sku: ''
      },
      productform: {}
    };
  },
  created: function created() {
    var _this = this;

    this.getProducts();
    var uri = "/api/products/".concat(this.$route.params.id);
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(uri).then(function (response) {
      _this.product = response.data.data;
    });
  },
  watch: {},
  mounted: function mounted() {
    this.buttonvalue();
  },
  methods: {
    getProducts: function getProducts() {
      var _this2 = this;

      this.error = this.products = null;
      this.loading = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/products').then(function (response) {
        _this2.loading = false;
        _this2.products = response.data;
      });
    },
    addProduct: function addProduct() {
      var _this3 = this;

      this.error = this.products = null;
      this.loading = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/product', this.product).then(function (response) {
        _this3.getProducts();
      }).then(function (data) {
        _this3.getProducts();
      }).catch(function (err) {
        return console.log(err);
      });
    },
    updateProduct: function updateProduct() {
      var _this4 = this;

      var uri = "/api/product/".concat(this.$route.params.id);
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(uri, this.product).then(function (response) {
        _this4.$router.push({
          name: 'ProductInfo'
        });
      });
    },
    productFormValue: function productFormValue() {
      if ("id" in this.$route.params) {
        this.buttontext = 'Update';
        this.updateProduct();
      } else {
        this.addProduct();
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/ProductAttribute/ProductAttributeAddSideBar.vue?vue&type=template&id=29c43a70&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/ProductAttribute/ProductAttributeAddSideBar.vue?vue&type=template&id=29c43a70& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
            return _vm.productFormValue($event)
          }
        }
      },
      [
        _c("vs-input", {
          attrs: { label: "SKU", placeholder: "SKU" },
          model: {
            value: _vm.product.sku,
            callback: function($$v) {
              _vm.$set(_vm.product, "sku", $$v)
            },
            expression: "product.sku"
          }
        }),
        _vm._v(" "),
        _c("vs-input", {
          attrs: { label: "Product Name", placeholder: "Product Name" },
          model: {
            value: _vm.product.name,
            callback: function($$v) {
              _vm.$set(_vm.product, "name", $$v)
            },
            expression: "product.name"
          }
        }),
        _vm._v(" "),
        _c("vs-input", {
          attrs: {
            label: "Product Description",
            placeholder: "Product Description"
          },
          model: {
            value: _vm.product.description,
            callback: function($$v) {
              _vm.$set(_vm.product, "description", $$v)
            },
            expression: "product.description"
          }
        }),
        _vm._v(" "),
        _c("vs-input", {
          attrs: { label: "Price", placeholder: "Price" },
          model: {
            value: _vm.product.price,
            callback: function($$v) {
              _vm.$set(_vm.product, "price", $$v)
            },
            expression: "product.price"
          }
        }),
        _vm._v(" "),
        _c("vs-input", {
          attrs: { label: "Ordering Company", placeholder: "Ordering Company" },
          model: {
            value: _vm.product.ordering_company_id_fk,
            callback: function($$v) {
              _vm.$set(_vm.product, "ordering_company_id_fk", $$v)
            },
            expression: "product.ordering_company_id_fk"
          }
        }),
        _vm._v(" "),
        _c("vs-input", {
          attrs: { label: "Product Category", placeholder: "Product Category" },
          model: {
            value: _vm.product.prod_cat_fk,
            callback: function($$v) {
              _vm.$set(_vm.product, "prod_cat_fk", $$v)
            },
            expression: "product.prod_cat_fk"
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
          [_vm._v(_vm._s(_vm.buttontext) + " Product")]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/ProductAttribute/ProductAttributeAddSideBar.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/ProductAttribute/ProductAttributeAddSideBar.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductAttributeAddSideBar_vue_vue_type_template_id_29c43a70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductAttributeAddSideBar.vue?vue&type=template&id=29c43a70& */ "./resources/js/src/views/ProductAttribute/ProductAttributeAddSideBar.vue?vue&type=template&id=29c43a70&");
/* harmony import */ var _ProductAttributeAddSideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductAttributeAddSideBar.vue?vue&type=script&lang=js& */ "./resources/js/src/views/ProductAttribute/ProductAttributeAddSideBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductAttributeAddSideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductAttributeAddSideBar_vue_vue_type_template_id_29c43a70___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductAttributeAddSideBar_vue_vue_type_template_id_29c43a70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/ProductAttribute/ProductAttributeAddSideBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/ProductAttribute/ProductAttributeAddSideBar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/views/ProductAttribute/ProductAttributeAddSideBar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAttributeAddSideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductAttributeAddSideBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/ProductAttribute/ProductAttributeAddSideBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAttributeAddSideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/ProductAttribute/ProductAttributeAddSideBar.vue?vue&type=template&id=29c43a70&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/src/views/ProductAttribute/ProductAttributeAddSideBar.vue?vue&type=template&id=29c43a70& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAttributeAddSideBar_vue_vue_type_template_id_29c43a70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductAttributeAddSideBar.vue?vue&type=template&id=29c43a70& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/ProductAttribute/ProductAttributeAddSideBar.vue?vue&type=template&id=29c43a70&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAttributeAddSideBar_vue_vue_type_template_id_29c43a70___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAttributeAddSideBar_vue_vue_type_template_id_29c43a70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);