/*=========================================================================================
  File Name: store.js
  Description: Vuex store
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/


import Vue from 'vue'
import Vuex from 'vuex'


import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

Vue.use(Vuex)

import moduleECommerce from './eCommerce/moduleECommerce.js'
//import moduleAuth from './eCommerce/moduleECommerce.js'
//\Vue.axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";


export default new Vuex.Store({
    getters,
    mutations,
    state,
    actions,

    modules: {
      // todo: moduleTodo,
      // calendar: moduleCalendar,
      // chat: moduleChat,
      // email: moduleEmail,
     // auth: moduleAuth,
      eCommerce: moduleECommerce,
  },
    strict: process.env.NODE_ENV !== 'production',

  







})
