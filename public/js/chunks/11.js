(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Company/CompanyIndex.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Company/CompanyIndex.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_prism_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-prism-component */ "./node_modules/vue-prism-component/dist/vue-prism-component.common.js");
/* harmony import */ var vue_prism_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_prism_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CompanyAddSideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CompanyAddSideBar */ "./resources/js/src/views/Company/CompanyAddSideBar.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    Prism: vue_prism_component__WEBPACK_IMPORTED_MODULE_1___default.a,
    CompanyAdd: _CompanyAddSideBar__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      popupActivo: false,
      selected: [],
      // Companies: [],
      itemsPerPage: 4,
      isMounted: false,
      // Data Sidebar
      addNewDataSidebar: false,
      sidebarData: {},
      companies: []
    };
  },
  computed: {
    currentPage: function currentPage() {
      if (this.isMounted) {
        return this.$refs.table.currentx;
      }

      return 0;
    },
    companiesquery: function companiesquery() {
      return this.$store.state.dataList.companies;
    },
    queriedItems: function queriedItems() {
      return this.$refs.table ? this.$refs.table.queriedResults.length : this.companies.length;
    }
  },
  created: function created() {
    var _this = this;

    this.getCompanies();
    var uri = "/api/companies/".concat(this.$route.params.id);
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(uri).then(function (response) {
      _this.companies = response.data.data;
    });
  },
  methods: {
    getCompanies: function getCompanies() {
      var _this2 = this;

      this.error = this.companies = null;
      this.loading = true;
      var vm = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/companies').then(function (response) {
        console.log(response);
        _this2.loading = false;
        vm.companies = response.data.data; /// the data.data fixed the issue
      });
    },
    handleSelected: function handleSelected(tr) {
      this.$vs.notify({
        title: "Selected ".concat(tr.company_code),
        text: "Company: ".concat(tr.name)
      });
    },
    // toggleDataSidebar(val=false) {
    //   this.addNewDataSidebar = val
    //},
    deleteCompanies: function deleteCompanies(id) {
      if (confirm("Are you sure you want to delete Companies ".concat(id, "?"))) {
        var uri = "/api/company/".concat(id);
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(uri).then(function (response) {});
        this.getCompanies();
      }
    }
  } //end//

});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Company/CompanyIndex.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Company/CompanyIndex.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#data-list-list-view .vs-con-table {\n  /*\n    Below media-queries is fix for responsiveness of action buttons\n    Note: If you change action buttons or layout of this page, Please remove below style\n  */\n}\n@media (max-width: 689px) {\n#data-list-list-view .vs-con-table .vs-table--search {\n    max-width: unset;\n    width: 100%;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--search {\n    margin-left: 0;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--search {\n    margin-right: 0;\n}\n#data-list-list-view .vs-con-table .vs-table--search .vs-table--search-input {\n    width: 100%;\n}\n}\n@media (max-width: 461px) {\n#data-list-list-view .vs-con-table .items-per-page-handler {\n    display: none;\n}\n}\n@media (max-width: 341px) {\n#data-list-list-view .vs-con-table .data-list-btn-container {\n    width: 100%;\n}\n#data-list-list-view .vs-con-table .data-list-btn-container .dd-actions,\n#data-list-list-view .vs-con-table .data-list-btn-container .btn-add-new {\n    width: 100%;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .data-list-btn-container .dd-actions, [dir=ltr] #data-list-list-view .vs-con-table .data-list-btn-container .btn-add-new {\n    margin-right: 0 !important;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .data-list-btn-container .dd-actions, [dir=rtl] #data-list-list-view .vs-con-table .data-list-btn-container .btn-add-new {\n    margin-left: 0 !important;\n}\n}\n#data-list-list-view .vs-con-table .product-name {\n  max-width: 23rem;\n}\n#data-list-list-view .vs-con-table .vs-table--header {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--header {\n  margin-left: 1.5rem;\n  margin-right: 1.5rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--header {\n  margin-right: 1.5rem;\n  margin-left: 1.5rem;\n}\n#data-list-list-view .vs-con-table .vs-table--header > span {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search {\n  padding-top: 0;\n}\n#data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input {\n  font-size: 1rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input {\n  padding: 0.9rem 2.5rem;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input + i {\n  left: 1rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input + i {\n  right: 1rem;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input:focus + i {\n  left: 1rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input:focus + i {\n  right: 1rem;\n}\n#data-list-list-view .vs-con-table .vs-table {\n  border-collapse: separate;\n  border-spacing: 0 1.3rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table {\n  padding: 0 1rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table tr {\n  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);\n}\n[dir] #data-list-list-view .vs-con-table .vs-table tr td {\n  padding: 20px;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table tr td:first-child {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table tr td:first-child {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table tr td:last-child {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table tr td:last-child {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table tr td.td-check {\n  padding: 20px !important;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--thead th {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n#data-list-list-view .vs-con-table .vs-table--thead th .vs-table-text {\n  text-transform: uppercase;\n  font-weight: 600;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--thead th.td-check {\n  padding: 0 15px !important;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--thead tr {\n  background: none;\n  box-shadow: none;\n}\n#data-list-list-view .vs-con-table .vs-table--pagination {\n  -webkit-box-pack: center;\n          justify-content: center;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Company/CompanyIndex.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Company/CompanyIndex.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyIndex.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Company/CompanyIndex.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Company/CompanyIndex.vue?vue&type=template&id=0a4c5b71&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Company/CompanyIndex.vue?vue&type=template&id=0a4c5b71& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
      attrs: { id: "data-list-list-view" }
    },
    [
      _c(
        "vx-card",
        { attrs: { title: "Multiple Selected" } },
        [
          _c(
            "vs-table",
            {
              attrs: { multiple: "", data: _vm.companies },
              on: { selected: _vm.handleSelected },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var data = ref.data
                    return _vm._l(data, function(tr, indextr) {
                      return _c(
                        "vs-tr",
                        { key: indextr, attrs: { data: tr } },
                        [
                          _c("vs-td", { attrs: { data: data[indextr].id } }, [
                            _vm._v(
                              "\n                   " +
                                _vm._s(data[indextr].id) +
                                "\n               "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: data[indextr].company_code } },
                            [
                              _vm._v(
                                "\n                   " +
                                  _vm._s(data[indextr].company_code) +
                                  "\n               "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: data[indextr].name } }, [
                            _vm._v(
                              "\n                   " +
                                _vm._s(data[indextr].name) +
                                "\n               "
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: data[indextr].created_at } },
                            [
                              _vm._v(
                                "\n                   " +
                                  _vm._s(data[indextr].created_at) +
                                  "\n               "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: data[indextr].updated_at } },
                            [
                              _vm._v(
                                "\n                   " +
                                  _vm._s(data[indextr].updated_at) +
                                  "\n               "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { staticClass: "whitespace-no-wrap" },
                            [
                              _c(
                                "router-link",
                                {
                                  attrs: {
                                    to: {
                                      name: "EditCompany",
                                      params: { id: tr.id }
                                    }
                                  }
                                },
                                [
                                  _c("feather-icon", {
                                    attrs: {
                                      icon: "EditIcon",
                                      svgClasses:
                                        "w-5 h-5 hover:text-primary stroke-current"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("feather-icon", {
                                staticClass: "ml-2",
                                attrs: {
                                  icon: "TrashIcon",
                                  svgClasses:
                                    "w-5 h-5 hover:text-danger stroke-current"
                                },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.deleteCompanies(tr.id)
                                  }
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    })
                  }
                }
              ]),
              model: {
                value: _vm.selected,
                callback: function($$v) {
                  _vm.selected = $$v
                },
                expression: "selected"
              }
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "flex flex-wrap-reverse items-center flex-grow justify-between",
                  attrs: { slot: "header" },
                  slot: "header"
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "flex flex-wrap-reverse items-center data-list-btn-container"
                    },
                    [
                      _c(
                        "vs-dropdown",
                        {
                          staticClass: "dd-actions cursor-pointer mr-4 mb-4",
                          attrs: { "vs-trigger-click": "" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "p-4 shadow-drop rounded-lg d-theme-dark-bg cursor-pointer flex items-center justify-center text-lg font-medium w-32 w-full"
                            },
                            [
                              _c("span", { staticClass: "mr-2" }, [
                                _vm._v("Actions")
                              ]),
                              _vm._v(" "),
                              _c("feather-icon", {
                                attrs: {
                                  icon: "ChevronDownIcon",
                                  svgClasses: "h-4 w-4"
                                }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-dropdown-menu",
                            [
                              _c("vs-dropdown-item", [
                                _c(
                                  "span",
                                  { staticClass: "flex items-center" },
                                  [
                                    _c("feather-icon", {
                                      staticClass: "mr-2",
                                      attrs: {
                                        icon: "TrashIcon",
                                        svgClasses: "h-4 w-4"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("span", [_vm._v("Delete")])
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-dropdown-item", [
                                _c(
                                  "span",
                                  { staticClass: "flex items-center" },
                                  [
                                    _c("feather-icon", {
                                      staticClass: "mr-2",
                                      attrs: {
                                        icon: "ArchiveIcon",
                                        svgClasses: "h-4 w-4"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("span", [_vm._v("Archive")])
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-dropdown-item", [
                                _c(
                                  "span",
                                  { staticClass: "flex items-center" },
                                  [
                                    _c("feather-icon", {
                                      staticClass: "mr-2",
                                      attrs: {
                                        icon: "FileIcon",
                                        svgClasses: "h-4 w-4"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("span", [_vm._v("Print")])
                                  ],
                                  1
                                )
                              ]),
                              _vm._v(" "),
                              _c("vs-dropdown-item", [
                                _c(
                                  "span",
                                  { staticClass: "flex items-center" },
                                  [
                                    _c("feather-icon", {
                                      staticClass: "mr-2",
                                      attrs: {
                                        icon: "SaveIcon",
                                        svgClasses: "h-4 w-4"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("span", [_vm._v("Another Action")])
                                  ],
                                  1
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "centerx " },
                        [
                          _c(
                            "vs-button",
                            {
                              staticClass:
                                "btn-add-new p-3 mb-4 mr-4 rounded-lg cursor-pointer flex items-center justify-center text-lg font-medium text-base text-primary border border-solid border-primary",
                              attrs: {
                                color: "primary",
                                type: "border",
                                icon: "add"
                              },
                              on: {
                                click: function($event) {
                                  _vm.popupActivo = true
                                }
                              }
                            },
                            [_vm._v(" Add New")]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-popup",
                            {
                              staticClass: "holamundo",
                              attrs: {
                                title: "Add New Company",
                                active: _vm.popupActivo
                              },
                              on: {
                                "update:active": function($event) {
                                  _vm.popupActivo = $event
                                }
                              }
                            },
                            [_c("company-add")],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-dropdown",
                    {
                      staticClass:
                        "cursor-pointer mb-4 mr-4 items-per-page-handler",
                      attrs: { "vs-trigger-click": "" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "p-4 border border-solid d-theme-border-grey-light rounded-full d-theme-dark-bg cursor-pointer flex items-center justify-between font-medium"
                        },
                        [
                          _c("span", { staticClass: "mr-2" }, [
                            _vm._v(
                              _vm._s(
                                _vm.currentPage * _vm.itemsPerPage -
                                  (_vm.itemsPerPage - 1)
                              ) +
                                " - " +
                                _vm._s(
                                  _vm.companies.length -
                                    _vm.currentPage * _vm.itemsPerPage >
                                    0
                                    ? _vm.currentPage * _vm.itemsPerPage
                                    : _vm.companies.length
                                ) +
                                " of " +
                                _vm._s(_vm.queriedItems)
                            )
                          ]),
                          _vm._v(" "),
                          _c("feather-icon", {
                            attrs: {
                              icon: "ChevronDownIcon",
                              svgClasses: "h-4 w-4"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "vs-dropdown-menu",
                        [
                          _c(
                            "vs-dropdown-item",
                            {
                              on: {
                                click: function($event) {
                                  _vm.itemsPerPage = 4
                                }
                              }
                            },
                            [_c("span", [_vm._v("4")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-dropdown-item",
                            {
                              on: {
                                click: function($event) {
                                  _vm.itemsPerPage = 10
                                }
                              }
                            },
                            [_c("span", [_vm._v("10")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-dropdown-item",
                            {
                              on: {
                                click: function($event) {
                                  _vm.itemsPerPage = 15
                                }
                              }
                            },
                            [_c("span", [_vm._v("15")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-dropdown-item",
                            {
                              on: {
                                click: function($event) {
                                  _vm.itemsPerPage = 20
                                }
                              }
                            },
                            [_c("span", [_vm._v("20")])]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "template",
                { slot: "thead" },
                [
                  _c("vs-th", [_vm._v("ID")]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "company_code" } }, [
                    _vm._v("Company Code")
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "name" } }, [
                    _vm._v("Name")
                  ]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Create At")]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Updated At")])
                ],
                1
              )
            ],
            2
          ),
          _vm._v(" "),
          _c("br")
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



/***/ }),

/***/ "./resources/js/src/views/Company/CompanyIndex.vue":
/*!*********************************************************!*\
  !*** ./resources/js/src/views/Company/CompanyIndex.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CompanyIndex_vue_vue_type_template_id_0a4c5b71___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanyIndex.vue?vue&type=template&id=0a4c5b71& */ "./resources/js/src/views/Company/CompanyIndex.vue?vue&type=template&id=0a4c5b71&");
/* harmony import */ var _CompanyIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanyIndex.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Company/CompanyIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CompanyIndex_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CompanyIndex.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/Company/CompanyIndex.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CompanyIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CompanyIndex_vue_vue_type_template_id_0a4c5b71___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CompanyIndex_vue_vue_type_template_id_0a4c5b71___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Company/CompanyIndex.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Company/CompanyIndex.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/Company/CompanyIndex.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyIndex.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Company/CompanyIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Company/CompanyIndex.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/Company/CompanyIndex.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyIndex_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyIndex.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Company/CompanyIndex.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyIndex_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyIndex_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyIndex_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyIndex_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyIndex_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/Company/CompanyIndex.vue?vue&type=template&id=0a4c5b71&":
/*!****************************************************************************************!*\
  !*** ./resources/js/src/views/Company/CompanyIndex.vue?vue&type=template&id=0a4c5b71& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyIndex_vue_vue_type_template_id_0a4c5b71___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CompanyIndex.vue?vue&type=template&id=0a4c5b71& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Company/CompanyIndex.vue?vue&type=template&id=0a4c5b71&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyIndex_vue_vue_type_template_id_0a4c5b71___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyIndex_vue_vue_type_template_id_0a4c5b71___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);