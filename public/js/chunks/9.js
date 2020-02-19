(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Banner/BannerIndex.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Banner/BannerIndex.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_prism_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-prism-component */ "./node_modules/vue-prism-component/dist/vue-prism-component.common.js");
/* harmony import */ var vue_prism_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_prism_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BannerAddSideBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BannerAddSideBar */ "./resources/js/src/views/Banner/BannerAddSideBar.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    BannerAdd: _BannerAddSideBar__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      popupActivo: false,
      selected: [],
      // banners: [],
      itemsPerPage: 4,
      isMounted: false,
      // Data Sidebar
      addNewDataSidebar: false,
      sidebarData: {},
      banners: []
    };
  },
  computed: {
    currentPage: function currentPage() {
      if (this.isMounted) {
        return this.$refs.table.currentx;
      }

      return 0;
    },
    bannersquery: function bannersquery() {
      return this.$store.state.dataList.banners;
    },
    queriedItems: function queriedItems() {
      return this.$refs.table ? this.$refs.table.queriedResults.length : this.banners.length;
    }
  },
  created: function created() {
    var _this = this;

    this.getBanners();
    var uri = "/api/banners/".concat(this.$route.params.id);
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(uri).then(function (response) {
      _this.book = response.data.data;
    });
  },
  methods: {
    getBanners: function getBanners() {
      var _this2 = this;

      this.error = this.banners = null;
      this.loading = true;
      var vm = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/banners').then(function (response) {
        console.log(response);
        _this2.loading = false;
        vm.banners = response.data.data; /// the data.data fixed the issue
      });
    },
    handleSelected: function handleSelected(tr) {
      this.$vs.notify({
        title: "Selected ".concat(tr.chain_no),
        text: "Banner: ".concat(tr.name)
      });
    },
    deletebanners: function deletebanners(id) {
      if (confirm("Are you sure you want to delete banners ".concat(id, "?"))) {
        var uri = "/api/banner/".concat(id);
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(uri).then(function (response) {});
        this.getBanners();
      }
    }
  } //end//

});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Banner/BannerIndex.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Banner/BannerIndex.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#data-list-list-view .vs-con-table {\n  /*\n    Below media-queries is fix for responsiveness of action buttons\n    Note: If you change action buttons or layout of this page, Please remove below style\n  */\n}\n@media (max-width: 689px) {\n#data-list-list-view .vs-con-table .vs-table--search {\n    max-width: unset;\n    width: 100%;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--search {\n    margin-left: 0;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--search {\n    margin-right: 0;\n}\n#data-list-list-view .vs-con-table .vs-table--search .vs-table--search-input {\n    width: 100%;\n}\n}\n@media (max-width: 461px) {\n#data-list-list-view .vs-con-table .items-per-page-handler {\n    display: none;\n}\n}\n@media (max-width: 341px) {\n#data-list-list-view .vs-con-table .data-list-btn-container {\n    width: 100%;\n}\n#data-list-list-view .vs-con-table .data-list-btn-container .dd-actions,\n#data-list-list-view .vs-con-table .data-list-btn-container .btn-add-new {\n    width: 100%;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .data-list-btn-container .dd-actions, [dir=ltr] #data-list-list-view .vs-con-table .data-list-btn-container .btn-add-new {\n    margin-right: 0 !important;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .data-list-btn-container .dd-actions, [dir=rtl] #data-list-list-view .vs-con-table .data-list-btn-container .btn-add-new {\n    margin-left: 0 !important;\n}\n}\n#data-list-list-view .vs-con-table .product-name {\n  max-width: 23rem;\n}\n#data-list-list-view .vs-con-table .vs-table--header {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--header {\n  margin-left: 1.5rem;\n  margin-right: 1.5rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--header {\n  margin-right: 1.5rem;\n  margin-left: 1.5rem;\n}\n#data-list-list-view .vs-con-table .vs-table--header > span {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search {\n  padding-top: 0;\n}\n#data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input {\n  font-size: 1rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input {\n  padding: 0.9rem 2.5rem;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input + i {\n  left: 1rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input + i {\n  right: 1rem;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input:focus + i {\n  left: 1rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table--header .vs-table--search .vs-table--search-input:focus + i {\n  right: 1rem;\n}\n#data-list-list-view .vs-con-table .vs-table {\n  border-collapse: separate;\n  border-spacing: 0 1.3rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table {\n  padding: 0 1rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table tr {\n  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);\n}\n[dir] #data-list-list-view .vs-con-table .vs-table tr td {\n  padding: 20px;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table tr td:first-child {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table tr td:first-child {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n[dir=ltr] #data-list-list-view .vs-con-table .vs-table tr td:last-child {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n[dir=rtl] #data-list-list-view .vs-con-table .vs-table tr td:last-child {\n  border-top-left-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table tr td.td-check {\n  padding: 20px !important;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--thead th {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n#data-list-list-view .vs-con-table .vs-table--thead th .vs-table-text {\n  text-transform: uppercase;\n  font-weight: 600;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--thead th.td-check {\n  padding: 0 15px !important;\n}\n[dir] #data-list-list-view .vs-con-table .vs-table--thead tr {\n  background: none;\n  box-shadow: none;\n}\n#data-list-list-view .vs-con-table .vs-table--pagination {\n  -webkit-box-pack: center;\n          justify-content: center;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Banner/BannerIndex.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Banner/BannerIndex.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BannerIndex.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Banner/BannerIndex.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Banner/BannerIndex.vue?vue&type=template&id=041951ad&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Banner/BannerIndex.vue?vue&type=template&id=041951ad& ***!
  \********************************************************************************************************************************************************************************************************************/
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
              attrs: { multiple: "", data: _vm.banners },
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
                            { attrs: { data: data[indextr].companies.name } },
                            [
                              _vm._v(
                                "\n                   " +
                                  _vm._s(data[indextr].companies.company_code) +
                                  "\n               "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            { attrs: { data: data[indextr].chain_no } },
                            [
                              _vm._v(
                                "\n                   " +
                                  _vm._s(data[indextr].chain_no) +
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
                                      name: "EditBanner",
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
                                    return _vm.deletebanners(tr.id)
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
                                title: "Add New Banner",
                                active: _vm.popupActivo
                              },
                              on: {
                                "update:active": function($event) {
                                  _vm.popupActivo = $event
                                }
                              }
                            },
                            [_c("banner-add")],
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
                                  _vm.banners.length -
                                    _vm.currentPage * _vm.itemsPerPage >
                                    0
                                    ? _vm.currentPage * _vm.itemsPerPage
                                    : _vm.banners.length
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
                  _c("vs-th", { attrs: { "sort-key": "company_id" } }, [
                    _vm._v("Company Name")
                  ]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Chain No.")]),
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



/***/ }),

/***/ "./resources/js/src/views/Banner/BannerIndex.vue":
/*!*******************************************************!*\
  !*** ./resources/js/src/views/Banner/BannerIndex.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BannerIndex_vue_vue_type_template_id_041951ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BannerIndex.vue?vue&type=template&id=041951ad& */ "./resources/js/src/views/Banner/BannerIndex.vue?vue&type=template&id=041951ad&");
/* harmony import */ var _BannerIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BannerIndex.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Banner/BannerIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BannerIndex_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BannerIndex.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/Banner/BannerIndex.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BannerIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BannerIndex_vue_vue_type_template_id_041951ad___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BannerIndex_vue_vue_type_template_id_041951ad___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Banner/BannerIndex.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Banner/BannerIndex.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/src/views/Banner/BannerIndex.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BannerIndex.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Banner/BannerIndex.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerIndex_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Banner/BannerIndex.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/Banner/BannerIndex.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerIndex_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BannerIndex.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Banner/BannerIndex.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerIndex_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerIndex_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerIndex_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerIndex_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerIndex_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/Banner/BannerIndex.vue?vue&type=template&id=041951ad&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/Banner/BannerIndex.vue?vue&type=template&id=041951ad& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerIndex_vue_vue_type_template_id_041951ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BannerIndex.vue?vue&type=template&id=041951ad& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Banner/BannerIndex.vue?vue&type=template&id=041951ad&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerIndex_vue_vue_type_template_id_041951ad___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BannerIndex_vue_vue_type_template_id_041951ad___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);