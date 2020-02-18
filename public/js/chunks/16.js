(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/shop/ECommerceItemDetailView.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/shop/ECommerceItemDetailView.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper_dist_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/dist/css/swiper.min.css */ "./node_modules/swiper/dist/css/swiper.min.css");
/* harmony import */ var swiper_dist_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(swiper_dist_css_swiper_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-awesome-swiper */ "./node_modules/vue-awesome-swiper/dist/vue-awesome-swiper.js");
/* harmony import */ var vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! algoliasearch/lite */ "./node_modules/algoliasearch/src/browser/builds/algoliasearchLite.js");
/* harmony import */ var algoliasearch_lite__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(algoliasearch_lite__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue_star_rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-star-rating */ "./node_modules/vue-star-rating/dist/star-rating.min.js");
/* harmony import */ var vue_star_rating__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(vue_star_rating__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var instantsearch_css_themes_algolia_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! instantsearch.css/themes/algolia-min.css */ "./node_modules/instantsearch.css/themes/algolia-min.css");
/* harmony import */ var instantsearch_css_themes_algolia_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(instantsearch_css_themes_algolia_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
    swiper: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_2__["swiper"],
    swiperSlide: vue_awesome_swiper__WEBPACK_IMPORTED_MODULE_2__["swiperSlide"],
    StarRating: vue_star_rating__WEBPACK_IMPORTED_MODULE_4___default.a
  },
  data: function data() {
    return {
      product: {},
      products: {},
      algolia_index: algoliasearch_lite__WEBPACK_IMPORTED_MODULE_3___default()('latency', '6be0576ff61c053d5f9a3225e2a90f76').initIndex("instant_search"),
      item_data: null,
      error_occured: false,
      error_msg: "",
      // Below is data which is common in any item
      // Algolia's dataSet don't provide this kind of data. So, here's dummy data for demo
      available_item_colors: ["#7367F0", "#28C76F", "#EA5455", "#FF9F43", "#1E1E1E"],
      opt_color: "#7367F0",
      is_hearted: false
    };
  },
  computed: {
    item_qty: function item_qty() {
      var item = this.$store.getters['eCommerce/getCartItem'](this.product.id);
      return Object.keys(item).length ? item.quantity : 1;
    },
    itemColor: function itemColor() {
      return function (obj) {
        var style_obj = {};
        obj.style.forEach(function (p) {
          style_obj[p] = obj.color;
        });
        return style_obj;
      };
    },
    isInWishList: function isInWishList() {//return (itemId) => this.$store.getters['eCommerce/isInWishList'](itemId)
    },
    isInCart: function isInCart() {
      var _this = this;

      return function (itemId) {
        return _this.$store.getters['eCommerce/isInCart'](itemId);
      };
    }
  },
  methods: {
    getProducts: function getProducts() {
      var _this2 = this;

      this.error = this.products = null;
      this.loading = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/products').then(function (response) {
        console.log(response);
        _this2.loading = false;
        _this2.products = response.data;
      });
    },
    getSingleProduct: function getSingleProduct() {
      var _this3 = this;

      this.getProducts();
      var uri = "/api/products/".concat(this.$route.params.item_id);
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(uri).then(function (response) {
        console.log(response);
        _this3.product = response.data.data;
      });
    },
    toggleItemInWishList: function toggleItemInWishList(item) {
      this.$store.dispatch('eCommerce/toggleItemInWishList', item);
    },
    toggleItemInCart: function toggleItemInCart(item) {
      this.$store.dispatch('eCommerce/toggleItemInCart', item);
    },
    fetch_item_details: function fetch_item_details(id) {
      var _this4 = this;

      this.algolia_index.getObject(id, function (err, content) {
        if (err) {
          _this4.error_occured = true;
          _this4.error_msg = err.message;
          console.error(err);
        } else {
          _this4.item_data = content;
        }
      });
    }
  },
  created: function created() {
    this.fetch_item_details(this.$route.params.item_id);
    this.getProducts();
    this.getSingleProduct();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/shop/ECommerceItemDetailView.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/shop/ECommerceItemDetailView.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#item-detail-page .color-radio {\n  height: 2.28rem;\n  width: 2.28rem;\n}\n#item-detail-page .color-radio > div {\n  top: 50%;\n}\n[dir=ltr] #item-detail-page .color-radio > div {\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n[dir=rtl] #item-detail-page .color-radio > div {\n  right: 50%;\n  -webkit-transform: translate(50%, -50%);\n          transform: translate(50%, -50%);\n}\n[dir] #item-detail-page .item-features {\n  background-color: #f7f7f7;\n}\n[dir=ltr] #item-detail-page .product-sales-meta-list .vs-list--icon {\n  padding-left: 0;\n}\n[dir=rtl] #item-detail-page .product-sales-meta-list .vs-list--icon {\n  padding-right: 0;\n}\n[dir] #item-detail-page .related-product-swiper .swiper-wrapper {\n  padding-bottom: 2rem;\n}\n[dir] #item-detail-page .related-product-swiper .swiper-wrapper > .swiper-slide {\n  background-color: #f7f7f7;\n  box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.1), 0 5px 12px 0 rgba(0, 0, 0, 0.08) !important;\n}\n#item-detail-page .related-product-swiper .swiper-button-next,\n#item-detail-page .related-product-swiper .swiper-button-prev {\n  -webkit-filter: hue-rotate(40deg);\n          filter: hue-rotate(40deg);\n}\n[dir] #item-detail-page .related-product-swiper .swiper-button-next, [dir] #item-detail-page .related-product-swiper .swiper-button-prev {\n  -webkit-transform: scale(0.5);\n          transform: scale(0.5);\n}\n[dir=ltr] #item-detail-page .related-product-swiper .swiper-button-next {\n  right: 0;\n}\n[dir=rtl] #item-detail-page .related-product-swiper .swiper-button-next {\n  left: 0;\n}\n[dir=ltr] #item-detail-page .related-product-swiper .swiper-button-prev {\n  left: 0;\n}\n[dir=rtl] #item-detail-page .related-product-swiper .swiper-button-prev {\n  right: 0;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/shop/ECommerceItemDetailView.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/shop/ECommerceItemDetailView.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceItemDetailView.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/shop/ECommerceItemDetailView.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/shop/ECommerceItemDetailView.vue?vue&type=template&id=4e55765a&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/shop/ECommerceItemDetailView.vue?vue&type=template&id=4e55765a& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "item-detail-page" } },
    [
      _vm.product
        ? _c(
            "vx-card",
            { key: _vm.product.id },
            [
              _c("template", { slot: "no-body" }, [
                _c("div", { staticClass: "item-content" }, [
                  _c("div", { staticClass: "product-details p-6" }, [
                    _c("div", { staticClass: "vx-row mt-6" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "vx-col md:w-2/5 w-full flex items-center justify-center"
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "product-img-container w-3/5 mx-auto mb-10 md:mb-0"
                            },
                            [
                              _vm.product.media[0]
                                ? _c("img", {
                                    staticClass: "responsive",
                                    attrs: {
                                      src:
                                        "/storage/" +
                                        _vm.product.media[0].order_column +
                                        "/" +
                                        _vm.product.media[0].file_name,
                                      alt: _vm.product.name
                                    }
                                  })
                                : _c("div", [_vm._v(" No Image to Display")])
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "vx-col md:w-3/5 w-full" },
                        [
                          _c("h3", [_vm._v(_vm._s(_vm.product.name))]),
                          _vm._v(" "),
                          _c("p", { staticClass: "my-2" }, [
                            _c("span", { staticClass: "mr-2" }, [_vm._v("by")])
                          ]),
                          _vm._v(" "),
                          _c(
                            "p",
                            { staticClass: "flex items-center flex-wrap" },
                            [
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "text-2xl leading-none font-medium text-primary mr-4 mt-2"
                                },
                                [_vm._v("$" + _vm._s(_vm.product.price))]
                              ),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  staticClass:
                                    "cursor-pointer leading-none mt-2"
                                },
                                [_vm._v("424 ratings")]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("vs-divider"),
                          _vm._v(" "),
                          _c("p", [_vm._v(_vm._s(_vm.product.description))]),
                          _vm._v(" "),
                          _c("vs-divider"),
                          _vm._v(" "),
                          _c("div", { staticClass: "vx-row" }, [
                            _c("div", { staticClass: "vx-col w-full" }, [
                              _c("p", { staticClass: "my-2" }, [
                                _c("span", [_vm._v("Available")]),
                                _vm._v(" "),
                                _c("span", { staticClass: "mx-2" }, [
                                  _vm._v("-")
                                ]),
                                _vm._v(" "),
                                _c("span", { staticClass: "text-success" }, [
                                  _vm._v("In Stock")
                                ])
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "vx-col w-full" }, [
                              _c(
                                "div",
                                {
                                  staticClass: "flex flex-wrap items-start mb-4"
                                },
                                [
                                  !_vm.isInCart(_vm.product.id)
                                    ? _c(
                                        "vs-button",
                                        {
                                          staticClass: "mr-4 mb-4",
                                          attrs: {
                                            "icon-pack": "feather",
                                            icon: "icon-shopping-cart"
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.toggleItemInCart(
                                                _vm.product
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                      ADD TO CART\n                    "
                                          )
                                        ]
                                      )
                                    : _c(
                                        "vs-button",
                                        {
                                          staticClass: "mr-4 mb-4",
                                          attrs: {
                                            "icon-pack": "feather",
                                            icon: "icon-shopping-cart"
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.$router
                                                .push({
                                                  name: "ecommerce-checkout"
                                                })
                                                .catch(function(err) {})
                                            }
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                      VIEW IN CART\n                    "
                                          )
                                        ]
                                      )
                                ],
                                1
                              )
                            ])
                          ])
                        ],
                        1
                      )
                    ])
                  ])
                ])
              ])
            ],
            2
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/shop/ECommerceItemDetailView.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/src/views/shop/ECommerceItemDetailView.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ECommerceItemDetailView_vue_vue_type_template_id_4e55765a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ECommerceItemDetailView.vue?vue&type=template&id=4e55765a& */ "./resources/js/src/views/shop/ECommerceItemDetailView.vue?vue&type=template&id=4e55765a&");
/* harmony import */ var _ECommerceItemDetailView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ECommerceItemDetailView.vue?vue&type=script&lang=js& */ "./resources/js/src/views/shop/ECommerceItemDetailView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ECommerceItemDetailView_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ECommerceItemDetailView.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/shop/ECommerceItemDetailView.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ECommerceItemDetailView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ECommerceItemDetailView_vue_vue_type_template_id_4e55765a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ECommerceItemDetailView_vue_vue_type_template_id_4e55765a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/shop/ECommerceItemDetailView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/shop/ECommerceItemDetailView.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/shop/ECommerceItemDetailView.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceItemDetailView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceItemDetailView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/shop/ECommerceItemDetailView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceItemDetailView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/shop/ECommerceItemDetailView.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/shop/ECommerceItemDetailView.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceItemDetailView_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceItemDetailView.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/shop/ECommerceItemDetailView.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceItemDetailView_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceItemDetailView_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceItemDetailView_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceItemDetailView_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceItemDetailView_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/shop/ECommerceItemDetailView.vue?vue&type=template&id=4e55765a&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/shop/ECommerceItemDetailView.vue?vue&type=template&id=4e55765a& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceItemDetailView_vue_vue_type_template_id_4e55765a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ECommerceItemDetailView.vue?vue&type=template&id=4e55765a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/shop/ECommerceItemDetailView.vue?vue&type=template&id=4e55765a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceItemDetailView_vue_vue_type_template_id_4e55765a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ECommerceItemDetailView_vue_vue_type_template_id_4e55765a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);