import Vue from "vue";
window.Vue = Vue;
Vue.config.productionTip = false
let axios = require('axios');
window.axios = axios;
window.Noty = require('noty');

// Vue custom filter
require('./filters/money.js');

require('./components/productForm.js');
require('./components/cart.js');
require('./components/miniCart.js');