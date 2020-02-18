(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Product/ProductAddSideBar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Product/ProductAddSideBar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProductAttributeForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductAttributeForm */ "./resources/js/src/views/Product/ProductAttributeForm.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    ProductAttr: _ProductAttributeForm__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      props: ['uploadurl'],
      files: [],
      fileIsUploading: false,
      loading: false,
      products: {},
      buttontext: 'Add',
      error: null,
      product: {
        sku: '',
        name: '',
        description: '',
        price: '',
        ordering_company_id_fk: '',
        prod_cat_fk: '',
        prodimage: ''
      },
      productform: {}
    };
  },
  created: function created() {
    var _this = this;

    this.getProducts();
    var uri = "/api/products/".concat(this.$route.params.id);
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(uri).then(function (response) {
      console.log(response);
      _this.product = response.data.data;
    });
  },
  watch: {},
  mounted: function mounted() {
    this.buttonvalue(), this.uploadFile();
  },
  methods: {
    getProducts: function getProducts() {
      var _this2 = this;

      this.error = this.products = null;
      this.loading = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/products').then(function (response) {
        console.log(_this2.$route.params.id);
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
    },
    uploadFile: function uploadFile(event) {
      var _this5 = this;

      this.fileIsUploading = true;
      this.tableIsUploading = true; //let uploadurl = 'api/files/upload'

      var data = new FormData();
      data.append('file', event.file);
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/files/upload/".concat(this.$route.params.id), data).then(function (response) {
        var responseData = response.data.data; // send event back to parent file was uploaded and return file data

        _this5.$emit('upload-success', {
          'model_id': _this5.$route.params.id,
          'created_at': responseData.created_at,
          'name': responseData.name,
          'mime_type': responseData.mime_type,
          'size': responseData.size
        });

        _this5.fileIsUploading = false;
      }).catch(function (error) {
        _this5.fileIsUploading = false;
        _this5.tableIsUploading = false;

        _this5.$notify.error({
          title: 'Error',
          message: error.response.data.errors.message
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Product/ProductAttributeForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Product/ProductAttributeForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_good_table_dist_vue_good_table_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-good-table/dist/vue-good-table.css */ "./node_modules/vue-good-table/dist/vue-good-table.css");
/* harmony import */ var vue_good_table_dist_vue_good_table_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_good_table_dist_vue_good_table_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_good_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-good-table */ "./node_modules/vue-good-table/dist/vue-good-table.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    VueGoodTable: vue_good_table__WEBPACK_IMPORTED_MODULE_3__["VueGoodTable"]
  },
  data: function data() {
    return {
      loading: false,
      productattrs: {},
      buttontext: 'Add',
      error: null,
      companies: {},
      singleProdAttr: {},
      attrClick: {
        edit: true,
        save: false
      }
    };
  },
  watch: {},
  mounted: function mounted() {},
  computed: {},
  methods: {
    getProductAttrs: function getProductAttrs() {
      var _this = this;

      //let uri = `/api/product/${this.$route.params.id}`;
      this.error = this.productattrs = null;
      var prodId = this.$route.params.id;
      this.loading = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/product/attributes').then(function (response) {
        console.log('The id is: ' + _this.$route.params.id); //   console.log(uri);
        //this.loading = false;s

        _this.productattrs = response.data.data;
        var product = response.data.data;
        _this.productattrs = product.filter(function (product) {
          return product.Prod_ID_fk == prodId;
        });
        console.log(product);
      });
    },
    getSingleProdAttr: function getSingleProdAttr() {
      var _this2 = this;

      var uri = "product/attribute/";
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(uri, this.singleProdAttr).then(function (response) {
        _this2.singleProdAttr = response.data;
      });
    },
    //For the Company Dropdown
    companylist: function companylist() {
      var _this3 = this;

      this.error = this.companies = null;
      this.loading = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/companies').then(function (response) {
        _this3.loading = false;
        _this3.companies = response.data.data; /// the data.data fixed the issue

        console.log(response);
      });
    },
    edit: function edit(obj) {
      this.$set(obj, 'editmode', true); //this.$set(obj, this.edit, this.attrClick);
    },
    save: function save(obj) {
      this.$set(obj, 'editmode', false); //this.$set(obj,this.save, this.attrClick);
    },
    updateProductAttr: function updateProductAttr(id) {}
  },
  created: function created() {
    this.getProductAttrs();
    this.getSingleProdAttr();
    this.companylist(); //this.edit();
    //this.save();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Product/ProductAttributeForm.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Product/ProductAttributeForm.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#data-list-list-view .vs-con-table {\n  /*\n    Below media-queries is fix for responsiveness of action buttons\n    Note: If you change action buttons or layout of this page, Please remove below style\n  */\n}\n@media (max-width: 689px) {\n#data-list-list-view .vs-con-table .vs-table--search {\n    max-width: unset;\n    width: 100%;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--search {\n    margin-left: 0;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--search {\n    margin-right: 0;\n}\n#data-list-list-view .vs-con-table .vs-table--search .vs-table--search-input {\n    width: 100%;\n}\n}\n@media (max-width: 461px) {\n#data-list-list-view .vs-con-table .items-per-page-handler {\n    display: none;\n}\n}\n@media (max-width: 341px) {\n#data-list-list-view .vs-con-table .data-list-btn-container {\n    width: 100%;\n}\n#data-list-list-view .vs-con-table .data-list-btn-container .dd-actions,\n#data-list-list-view .vs-con-table .data-list-btn-container .btn-add-new {\n    width: 100%;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .data-list-btn-container .dd-actions, [dir=ltr] #data-list-list-view .vs-con-table .data-list-btn-container .btn-add-new {\n    margin-right: 0 !important;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .data-list-btn-container .dd-actions, [dir=rtl] #data-list-list-view .vs-con-table .data-list-btn-container .btn-add-new {\n    margin-left: 0 !important;\n}\n}\n#data-list-list-view .vs-con-table .product-name {\n  max-width: 23rem;\n}\n#data-list-list-view .vs-con-table .vs-table--header {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--header {\n  margin-left: 1.5rem;\n  margin-right: 1.5rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--header {\n  margin-right: 1.5rem;\n  margin-left: 1.5rem;\n}\n#data-list-list-view .vs-con-table .vs-table--header > span {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search {\n  padding-top: 0;\n}\n#data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input {\n  font-size: 1rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input {\n  padding: 0.9rem 2.5rem;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input + i {\n  left: 1rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input + i {\n  right: 1rem;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input:focus + i {\n  left: 1rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input:focus + i {\n  right: 1rem;\n}\n#data-list-list-view .vs-con-table .vs-table {\n  border-collapse: separate;\n  border-spacing: 0 1.3rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table {\n  padding: 0 1rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table tr {\n  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);\n}\n[dir] #data-list-list-view .vs-con-table .vs-table tr td {\n  padding: 20px;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table tr td:first-child {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table tr td:first-child {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table tr td:last-child {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table tr td:last-child {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table tr td.td-check {\n  padding: 20px !important;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--thead th {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n#data-list-list-view .vs-con-table .vs-table--thead th .vs-table-text {\n  text-transform: uppercase;\n  font-weight: 600;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--thead th.td-check {\n  padding: 0 15px !important;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--thead tr {\n  background: none;\n  box-shadow: none;\n}\n#data-list-list-view .vs-con-table .vs-table--pagination {\n  -webkit-box-pack: center;\n          justify-content: center;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Product/ProductAttributeForm.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Product/ProductAttributeForm.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductAttributeForm.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Product/ProductAttributeForm.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Product/ProductAddSideBar.vue?vue&type=template&id=2b517bb0&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Product/ProductAddSideBar.vue?vue&type=template&id=2b517bb0& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "centerx labelx" },
    [
      _c(
        "vs-tabs",
        [
          _c("vs-tab", { attrs: { label: "Product Information" } }, [
            _c("div", { staticClass: "con-tab-ejemplo" }, [
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
                    attrs: {
                      label: "Product Name",
                      placeholder: "Product Name"
                    },
                    model: {
                      value: _vm.product.name,
                      callback: function($$v) {
                        _vm.$set(_vm.product, "name", $$v)
                      },
                      expression: "product.name"
                    }
                  }),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("vs-input", {
                    attrs: { label: "Product Description" },
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
                    attrs: {
                      label: "Ordering Company",
                      placeholder: "Ordering Company"
                    },
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
                    attrs: {
                      label: "Product Category",
                      placeholder: "Product Category"
                    },
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
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col-xs-12" },
                      [
                        _c(
                          "el-upload",
                          {
                            staticClass: "upload-demo",
                            staticStyle: {
                              display: "inline-block",
                              "margin-right": "10px"
                            },
                            attrs: {
                              drag: "",
                              action: "uploadurl",
                              "file-list": _vm.files,
                              "show-file-list": false,
                              multiple: true,
                              "http-request": _vm.uploadFile,
                              loading: _vm.fileIsUploading
                            }
                          },
                          [
                            _c("i", {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: !_vm.fileIsUploading,
                                  expression: "!fileIsUploading"
                                }
                              ],
                              staticClass: "el-icon-upload"
                            }),
                            _vm._v(" "),
                            _c("i", {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.fileIsUploading,
                                  expression: "fileIsUploading"
                                }
                              ],
                              staticClass: "el-icon-loading",
                              staticStyle: {
                                "font-size": "67px",
                                color: "#c0c4cc",
                                margin: "40px 0 16px",
                                "line-height": "50px"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: !_vm.fileIsUploading,
                                    expression: "!fileIsUploading"
                                  }
                                ],
                                staticClass: "el-upload__text"
                              },
                              [_vm._v("Upload Image Here ")]
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ])
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c(
            "vs-tab",
            { attrs: { label: "Product Attribute" } },
            [_c("product-attr")],
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Product/ProductAttributeForm.vue?vue&type=template&id=3a9f708a&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Product/ProductAttributeForm.vue?vue&type=template&id=3a9f708a& ***!
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
    [
      _c(
        "vs-table",
        [
          _vm._l(_vm.companies, function(comp, indextr) {
            return _c(
              "vs-tr",
              { key: indextr },
              [
                _c(
                  "template",
                  { slot: "thead" },
                  [_c("vs-th", [_vm._v("ID")])],
                  1
                ),
                _vm._v(" "),
                _c("vs-td", [
                  _vm._v(
                    "\n        " +
                      _vm._s(comp.name) +
                      " : " +
                      _vm._s(comp.id) +
                      "\n    "
                  )
                ]),
                _vm._v(" "),
                _c("template", { staticClass: "expand-user", slot: "expand" }, [
                  _c(
                    "div",
                    { staticClass: "con-expand-users w-full" },
                    _vm._l(_vm.productattrs, function(item, indextr) {
                      return _c(
                        "vs-list",
                        { key: indextr },
                        [
                          _c("vs-list-item", [
                            _c(
                              "div",
                              [
                                item.ordering_company_id_fk == comp.id
                                  ? _c(
                                      "vs-tr",
                                      [
                                        _c("vs-td", [
                                          item.editmode
                                            ? _c(
                                                "span",
                                                [
                                                  _c("vs-input", {
                                                    attrs: {
                                                      label: "Company Name",
                                                      placeholder:
                                                        "Company Name"
                                                    },
                                                    model: {
                                                      value:
                                                        item.ordering_company_id_fk,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          item,
                                                          "ordering_company_id_fk",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "item.ordering_company_id_fk"
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            : _c("span", [
                                                _vm._v(
                                                  _vm._s(
                                                    item.ordering_company_id_fk
                                                  )
                                                )
                                              ])
                                        ]),
                                        _vm._v(" "),
                                        _c("vs-td", [
                                          item.editmode
                                            ? _c(
                                                "span",
                                                [
                                                  _c("vs-input", {
                                                    attrs: {
                                                      label: "Company Name",
                                                      placeholder:
                                                        "Company Name"
                                                    },
                                                    model: {
                                                      value: item.Banner_ID_fk,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          item,
                                                          "Banner_ID_fk",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "item.Banner_ID_fk"
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            : _c("span", [
                                                _vm._v(
                                                  _vm._s(item.Banner_ID_fk)
                                                )
                                              ])
                                        ]),
                                        _vm._v(" "),
                                        _c("vs-td", [
                                          item.editmode
                                            ? _c(
                                                "span",
                                                [
                                                  _c("vs-input", {
                                                    attrs: {
                                                      label: "Company Name",
                                                      placeholder:
                                                        "Company Name"
                                                    },
                                                    model: {
                                                      value: item.Dept_ID_fk,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          item,
                                                          "Dept_ID_fk",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "item.Dept_ID_fk"
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            : _c("span", [
                                                _vm._v(_vm._s(item.Dept_ID_fk))
                                              ])
                                        ]),
                                        _vm._v(" "),
                                        _c("vs-td", [
                                          !item.editmode
                                            ? _c("span", [
                                                _c(
                                                  "button",
                                                  {
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.edit(item)
                                                      }
                                                    }
                                                  },
                                                  [_vm._v("Edit")]
                                                )
                                              ])
                                            : _c("span", [
                                                _c(
                                                  "button",
                                                  {
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.save(item)
                                                      }
                                                    }
                                                  },
                                                  [_vm._v("Save")]
                                                )
                                              ])
                                        ])
                                      ],
                                      1
                                    )
                                  : _vm._e()
                              ],
                              1
                            )
                          ])
                        ],
                        1
                      )
                    }),
                    1
                  )
                ])
              ],
              2
            )
          })
        ],
        2
      ),
      _vm._v("\n" + _vm._s(_vm.productattrs) + "\n ")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/Product/ProductAddSideBar.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/views/Product/ProductAddSideBar.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductAddSideBar_vue_vue_type_template_id_2b517bb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductAddSideBar.vue?vue&type=template&id=2b517bb0& */ "./resources/js/src/views/Product/ProductAddSideBar.vue?vue&type=template&id=2b517bb0&");
/* harmony import */ var _ProductAddSideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductAddSideBar.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Product/ProductAddSideBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductAddSideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductAddSideBar_vue_vue_type_template_id_2b517bb0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductAddSideBar_vue_vue_type_template_id_2b517bb0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Product/ProductAddSideBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Product/ProductAddSideBar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/Product/ProductAddSideBar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAddSideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductAddSideBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Product/ProductAddSideBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAddSideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Product/ProductAddSideBar.vue?vue&type=template&id=2b517bb0&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/Product/ProductAddSideBar.vue?vue&type=template&id=2b517bb0& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAddSideBar_vue_vue_type_template_id_2b517bb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductAddSideBar.vue?vue&type=template&id=2b517bb0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Product/ProductAddSideBar.vue?vue&type=template&id=2b517bb0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAddSideBar_vue_vue_type_template_id_2b517bb0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAddSideBar_vue_vue_type_template_id_2b517bb0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Product/ProductAttributeForm.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/src/views/Product/ProductAttributeForm.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductAttributeForm_vue_vue_type_template_id_3a9f708a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductAttributeForm.vue?vue&type=template&id=3a9f708a& */ "./resources/js/src/views/Product/ProductAttributeForm.vue?vue&type=template&id=3a9f708a&");
/* harmony import */ var _ProductAttributeForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductAttributeForm.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Product/ProductAttributeForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProductAttributeForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductAttributeForm.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/Product/ProductAttributeForm.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProductAttributeForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductAttributeForm_vue_vue_type_template_id_3a9f708a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductAttributeForm_vue_vue_type_template_id_3a9f708a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Product/ProductAttributeForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Product/ProductAttributeForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/views/Product/ProductAttributeForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAttributeForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductAttributeForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Product/ProductAttributeForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAttributeForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Product/ProductAttributeForm.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/Product/ProductAttributeForm.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAttributeForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductAttributeForm.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Product/ProductAttributeForm.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAttributeForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAttributeForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAttributeForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAttributeForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAttributeForm_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/Product/ProductAttributeForm.vue?vue&type=template&id=3a9f708a&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/views/Product/ProductAttributeForm.vue?vue&type=template&id=3a9f708a& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAttributeForm_vue_vue_type_template_id_3a9f708a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductAttributeForm.vue?vue&type=template&id=3a9f708a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Product/ProductAttributeForm.vue?vue&type=template&id=3a9f708a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAttributeForm_vue_vue_type_template_id_3a9f708a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductAttributeForm_vue_vue_type_template_id_3a9f708a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);