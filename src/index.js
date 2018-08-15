
import DaumPostcode from './DaumPostcode.vue'
import Vue from 'vue'

module.exports = {
  install: function (Vue, options) {
    Vue.component('vuejs-daum-postcode', DaumPostcode)
  }
};
