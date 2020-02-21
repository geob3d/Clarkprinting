(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Banner/BannerAddSideBar.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Banner/BannerAddSideBar.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    return {
      loading: false,
      banners: {},
      buttontext: 'Add',
      error: null,
      banner: {
        company_id: '',
        chain_no: '',
        name: ''
      },
      bannerform: {},
      companies: []
    };
  },
  created: function created() {
    var _this = this;

    this.getbanners();
    var uri = "/api/banners/".concat(this.$route.params.id);
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(uri).then(function (response) {
      _this.banner = response.data.data;
    });
    this.companydropdown;
  },
  watch: {},
  mounted: function mounted() {
    this.buttonvalue(), this.companydropdown();
  },
  methods: {
    getbanners: function getbanners() {
      var _this2 = this;

      this.error = this.banners = null;
      this.loading = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/banners').then(function (response) {
        _this2.loading = false;
        _this2.banners = response.data;
      });
    },
    addbanner: function addbanner() {
      var _this3 = this;

      this.error = this.banners = null;
      this.loading = true;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/banner', this.banner).then(function (response) {
        _this3.getbanners();
      }).then(function (data) {
        _this3.getbanners();
      }).catch(function (err) {
        return console.log(err);
      });
    },
    updatebanner: function updatebanner() {
      var _this4 = this;

      var uri = "/api/banner/".concat(this.$route.params.id);
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(uri, this.banner).then(function (response) {
        _this4.$router.push({
          name: 'bannerInfo'
        });
      });
    },
    bannerFormValue: function bannerFormValue() {
      if ("id" in this.$route.params) {
        console.log("".concat(this.$route.params.id));
        this.updatebanner();
      } else {
        console.log("myMessage");
        this.addbanner();
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
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Banner/BannerAddSideBar.vue?vue&type=template&id=9dff49e0&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Banner/BannerAddSideBar.vue?vue&type=template&id=9dff49e0& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
            return _vm.bannerFormValue($event)
          }
        }
      },
      [
        _c(
          "vs-select",
          {
            staticClass: "selectExample",
            attrs: { label: "Company Name" },
            model: {
              value: _vm.banner.company_id,
              callback: function($$v) {
                _vm.$set(_vm.banner, "company_id", $$v)
              },
              expression: "banner.company_id"
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
        _c("vs-input", {
          attrs: { label: "Chain No.", placeholder: "Chain No." },
          model: {
            value: _vm.banner.chain_no,
            callback: function($$v) {
              _vm.$set(_vm.banner, "chain_no", $$v)
            },
            expression: "banner.chain_no"
          }
        }),
        _vm._v(" "),
        _c("vs-input", {
          attrs: { label: "Banner Name", placeholder: "Name" },
          model: {
            value: _vm.banner.name,
            callback: function($$v) {
              _vm.$set(_vm.banner, "name", $$v)
            },
            expression: "banner.name"
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
          [_vm._v(_vm._s(_vm.buttontext) + " Banner")]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/Banner/BannerAddSideBar.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/views/Banner/BannerAddSideBar.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BannerAddSideBar_vue_vue_type_template_id_9dff49e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BannerAddSideBar.vue?vue&type=template&id=9dff49e0& */ "./resources/js/src/views/Banner/BannerAddSideBar.vue?vue&type=template&id=9dff49e0&");
/* harmony import */ var _BannerAddSideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BannerAddSideBar.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Banner/BannerAddSideBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BannerAddSideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BannerAddSideBar_vue_vue_type_template_id_9dff49e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BannerAddSideBar_vue_vue_type_template_id_9dff49e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Banner/BannerAddSideBar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Banner/BannerAddSideBar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/Banner/BannerAddSideBar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerAddSideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BannerAddSideBar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Banner/BannerAddSideBar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerAddSideBar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Banner/BannerAddSideBar.vue?vue&type=template&id=9dff49e0&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/Banner/BannerAddSideBar.vue?vue&type=template&id=9dff49e0& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerAddSideBar_vue_vue_type_template_id_9dff49e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BannerAddSideBar.vue?vue&type=template&id=9dff49e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Banner/BannerAddSideBar.vue?vue&type=template&id=9dff49e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerAddSideBar_vue_vue_type_template_id_9dff49e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerAddSideBar_vue_vue_type_template_id_9dff49e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);