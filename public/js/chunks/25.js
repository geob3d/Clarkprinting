(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Company/CompanyAddSideBar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Company/CompanyAddSideBar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      loading: false,
      companies: {},
      buttontext: 'Add',
      error: null,
      company: {
        name: '',
        company_code: ''
      },
      companyform: {}
    };
  },
  created: function created() {
    var _this = this;

    this.getCompanies();
    var uri = "/api/companies/".concat(this.$route.params.id);
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(uri).then(function (response) {
      _this.company = response.data.data;
    });
  },
  watch: {},
  mounted: function mounted() {
    this.buttonvalue();
  },
  methods: {
    getCompanies: function getCompanies() {
      var _this2 = this;

      this.error = this.companies = null;
      this.loading = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/companies').then(function (response) {
        _this2.loading = false;
        _this2.companies = response.data;
      });
    },
    addCompany: function addCompany() {
      var _this3 = this;

      this.error = this.companies = null;
      this.loading = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/company', this.company).then(function (response) {
        _this3.getCompanies();
      }).then(function (data) {
        _this3.getCompanies();
      }).catch(function (err) {
        return console.log(err);
      });
    },
    updateCompany: function updateCompany() {
      var _this4 = this;

      var uri = "/api/company/".concat(this.$route.params.id);
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(uri, this.company).then(function (response) {
        _this4.$router.push({
          name: 'CompanyInfo'
        });
      });
    },
    companyFormValue: function companyFormValue() {
      if ("id" in this.$route.params) {
        this.buttontext = 'Update';
        this.updateCompany();
      } else {
        this.addCompany();
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Company/CompanyAddSideBar.vue?vue&type=template&id=3cc0cbcc&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Company/CompanyAddSideBar.vue?vue&type=template&id=3cc0cbcc& ***!
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
  return _c("div", { staticClass: "centerx labelx" }, [
    _c(
      "form",
      {
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.companyFormValue($event)
          }
        }
      },
      [
        _c("vs-input", {
          attrs: { label: "Company Code", placeholder: "Company Code" },
          model: {
            value: _vm.company.company_code,
            callback: function($$v) {
              _vm.$set(_vm.company, "company_code", $$v)
            },
            expression: "company.company_code"
          }
        }),
        _vm._v(" "),
        _c("vs-input", {
          attrs: { label: "Company Name", placeholder: "Company Name" },
          model: {
            value: _vm.company.name,
            callback: function($$v) {
              _vm.$set(_vm.company, "name", $$v)
            },
            expression: "company.name"
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
          [_vm._v(_vm._s(_vm.buttontext) + " Company")]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/Company/CompanyAddSideBar.vue":
/*!**************************************************************!*\
  !*** ./resources/js/src/views/Company/CompanyAddSideBar.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CompanyAddSideBar_vue_vue_type_template_id_3cc0cbcc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanyAddSideBar.vue?vue&type=template&id=3cc0cbcc& */ "./resources/js/src/views/Company/CompanyAddSideBar.vue?vue&type=template&id=3cc0cbcc&");
/* harmony import */ var _CompanyAddSideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanyAddSideBar.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Company/CompanyAddSideBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CompanyAddSideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompanyAddSideBar_vue_vue_type_template_id_3cc0cbcc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CompanyAddSideBar_vue_vue_type_template_id_3cc0cbcc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Company/CompanyAddSideBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Company/CompanyAddSideBar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/Company/CompanyAddSideBar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyAddSideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyAddSideBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Company/CompanyAddSideBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyAddSideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Company/CompanyAddSideBar.vue?vue&type=template&id=3cc0cbcc&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/Company/CompanyAddSideBar.vue?vue&type=template&id=3cc0cbcc& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyAddSideBar_vue_vue_type_template_id_3cc0cbcc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyAddSideBar.vue?vue&type=template&id=3cc0cbcc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Company/CompanyAddSideBar.vue?vue&type=template&id=3cc0cbcc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyAddSideBar_vue_vue_type_template_id_3cc0cbcc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyAddSideBar_vue_vue_type_template_id_3cc0cbcc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);