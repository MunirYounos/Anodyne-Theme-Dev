import Vue from "vue";
window.Vue = Vue;
Vue.config.productionTip = false
let axios = require('axios');
window.axios = axios;
window.Noty = require('noty');
require('./components/productForm.js');
require('./components/cart.js');