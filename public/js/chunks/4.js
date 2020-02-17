(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Store/StoreAddSideBar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Store/StoreAddSideBar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_1__);
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  data: function data() {
    var _store;

    return {
      loading: false,
      stores: {},
      buttontext: 'Add',
      error: null,
      store: (_store = {
        company_id_fk: '',
        banner_id_fk: '',
        customer_no: '',
        corporate_office: '',
        address: '',
        city: '',
        state: ''
      }, _defineProperty(_store, "corporate_office", ''), _defineProperty(_store, "zip_code", ''), _defineProperty(_store, "phone", ''), _store),
      storeform: {},
      companies: [],
      banners: [],
      corporateSwitch: true
    };
  },
  created: function created() {
    var _this = this;

    this.getstores();
    var uri = "/api/stores/".concat(this.$route.params.id);
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(uri).then(function (response) {
      _this.store = response.data.data;
    });
    this.companydropdown;
  },
  watch: {},
  mounted: function mounted() {
    this.buttonvalue(), this.companydropdown();
    this.bannerDropdown();
  },
  methods: {
    getstores: function getstores() {
      var _this2 = this;

      this.error = this.stores = null;
      this.loading = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/stores').then(function (response) {
        _this2.loading = false;
        _this2.stores = response.data;
      });
    },
    addstore: function addstore() {
      var _this3 = this;

      this.error = this.stores = null;
      this.loading = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/store', this.store).then(function (response) {
        _this3.getstores();
      }).then(function (data) {
        _this3.getstores();
      }).catch(function (err) {
        return console.log(err);
      });
    },
    updatestore: function updatestore() {
      var _this4 = this;

      var uri = "/api/store/".concat(this.$route.params.id);
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(uri, this.store).then(function (response) {
        _this4.$router.push({
          name: 'storeInfo'
        });
      });
    },
    storeFormValue: function storeFormValue() {
      if ("id" in this.$route.params) {
        console.log("".concat(this.$route.params.id));
        this.updatestore();
      } else {
        console.log("myMessage");
        this.addstore();
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
    //For the Company Dropdown
    companydropdown: function companydropdown() {
      var _this5 = this;

      this.error = this.companies = null;
      this.loading = true;
      var vm = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/companies').then(function (response) {
        //console.log(response);
        _this5.loading = false;
        vm.companies = response.data.data; /// the data.data fixed the issue
      });
    },
    //For the Banner Dropdown
    bannerDropdown: function bannerDropdown() {
      var _this6 = this;

      this.error = this.banners = null;
      this.loading = true;
      var vm = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/banners').then(function (response) {
        //console.log(response);
        _this6.loading = false;
        vm.banners = response.data.data; /// the data.data fixed the issue
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Store/StoreAddSideBar.vue?vue&type=template&id=1c934e14&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Store/StoreAddSideBar.vue?vue&type=template&id=1c934e14& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "centerx " }, [
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.storeFormValue($event)
          }
        }
      },
      [
        _c("vs-divider", [_vm._v("\n     Company Information\n   ")]),
        _vm._v(" "),
        _c(
          "vs-select",
          {
            staticClass: "selectExample",
            attrs: { label: "Company Name" },
            model: {
              value: _vm.store.company_id_fk,
              callback: function($$v) {
                _vm.$set(_vm.store, "company_id_fk", $$v)
              },
              expression: "store.company_id_fk"
            }
          },
          _vm._l(_vm.companies, function(item, index) {
            return _c("vs-select-item", {
              key: index,
              attrs: { value: item.id, text: item.name }
            })
          }),
          1
        ),
        _vm._v(" "),
        _c(
          "vs-select",
          {
            staticClass: "selectExample",
            attrs: { label: "Banner Name" },
            model: {
              value: _vm.store.banner_id_fk,
              callback: function($$v) {
                _vm.$set(_vm.store, "banner_id_fk", $$v)
              },
              expression: "store.banner_id_fk"
            }
          },
          _vm._l(_vm.banners, function(item, index) {
            return _c("vs-select-item", {
              key: index,
              attrs: { value: item.id, text: item.name }
            })
          }),
          1
        ),
        _vm._v(" "),
        _c("vs-divider", [_vm._v("\n     Store Information\n   ")]),
        _vm._v(" "),
        _c("vs-input", {
          attrs: { label: "Customer No.", placeholder: "Customer No." },
          model: {
            value: _vm.store.customer_no,
            callback: function($$v) {
              _vm.$set(_vm.store, "customer_no", $$v)
            },
            expression: "store.customer_no"
          }
        }),
        _vm._v(" "),
        _c("vs-input", {
          attrs: { label: "Store Name", placeholder: "Store Name" },
          model: {
            value: _vm.store.name,
            callback: function($$v) {
              _vm.$set(_vm.store, "name", $$v)
            },
            expression: "store.name"
          }
        }),
        _vm._v(" "),
        _c(
          "vs-switch",
          {
            model: {
              value: _vm.store.corporate_office,
              callback: function($$v) {
                _vm.$set(_vm.store, "corporate_office", $$v)
              },
              expression: "store.corporate_office"
            }
          },
          [
            _c("span", { attrs: { slot: "on" }, slot: "on" }, [_vm._v(" On ")]),
            _vm._v(" "),
            _c("span", { attrs: { slot: "off" }, slot: "off" }, [
              _vm._v(" Off ")
            ])
          ]
        ),
        _vm._v(" "),
        _c("vs-divider", [_vm._v("\n     Store Contact Information\n   ")]),
        _vm._v(" "),
        _c(
          "vs-row",
          [
            _c(
              "vs-col",
              { attrs: { "vs-type": "flex", "vs-w": "12" } },
              [
                _c("vs-input", {
                  attrs: { label: "Address", placeholder: "Address" },
                  model: {
                    value: _vm.store.address,
                    callback: function($$v) {
                      _vm.$set(_vm.store, "address", $$v)
                    },
                    expression: "store.address"
                  }
                })
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("vs-input", {
          attrs: { label: "City", placeholder: "City" },
          model: {
            value: _vm.store.city,
            callback: function($$v) {
              _vm.$set(_vm.store, "city", $$v)
            },
            expression: "store.city"
          }
        }),
        _vm._v(" "),
        _c("vs-input", {
          attrs: { label: "Zip Code", placeholder: "Zip Code" },
          model: {
            value: _vm.store.zip_code,
            callback: function($$v) {
              _vm.$set(_vm.store, "zip_code", $$v)
            },
            expression: "store.zip_code"
          }
        }),
        _vm._v(" "),
        _c("vs-input", {
          attrs: { label: "Phone", placeholder: "Phone" },
          model: {
            value: _vm.store.phone,
            callback: function($$v) {
              _vm.$set(_vm.store, "phone", $$v)
            },
            expression: "store.phone"
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
          [_vm._v(_vm._s(_vm.buttontext) + " Store")]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/Store/StoreAddSideBar.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/Store/StoreAddSideBar.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StoreAddSideBar_vue_vue_type_template_id_1c934e14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StoreAddSideBar.vue?vue&type=template&id=1c934e14& */ "./resources/js/src/views/Store/StoreAddSideBar.vue?vue&type=template&id=1c934e14&");
/* harmony import */ var _StoreAddSideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StoreAddSideBar.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Store/StoreAddSideBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StoreAddSideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StoreAddSideBar_vue_vue_type_template_id_1c934e14___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StoreAddSideBar_vue_vue_type_template_id_1c934e14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Store/StoreAddSideBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Store/StoreAddSideBar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/Store/StoreAddSideBar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreAddSideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StoreAddSideBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Store/StoreAddSideBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreAddSideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Store/StoreAddSideBar.vue?vue&type=template&id=1c934e14&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/Store/StoreAddSideBar.vue?vue&type=template&id=1c934e14& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreAddSideBar_vue_vue_type_template_id_1c934e14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StoreAddSideBar.vue?vue&type=template&id=1c934e14& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Store/StoreAddSideBar.vue?vue&type=template&id=1c934e14&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreAddSideBar_vue_vue_type_template_id_1c934e14___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StoreAddSideBar_vue_vue_type_template_id_1c934e14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);