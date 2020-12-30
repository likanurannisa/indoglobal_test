/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import Multiselect from 'vue-multiselect';

import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)

import VueNumeric from 'vue-numeric';
Vue.use(VueNumeric)

import { ClientTable } from 'vue-tables-2'

Vue.use(ClientTable);

import VMdDateRangePicker from "v-md-date-range-picker";

Vue.use(VMdDateRangePicker);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));
Vue.component('login-form', require('./components/view/Login.vue').default);
Vue.component('pemesanan-produk', require('./components/view/admin/PemesananProduk.vue').default);




Vue.component('multiselect',Multiselect);

const masks = {
    currency: {
      mask (value) {

       var number_string = value.toString()
          var split = number_string.split(','),
                  sisa = split[0].lenght % 3,
                  rupiah = split[0].substr(0, sisa),
                  ribuan = split[0].substr(sisa).match(/\d{1,3}/gi),
                  separator = '';

          if(ribuan){
              separator = sisa ? '.' : '';
              rupiah += separator + ribuan.join('.');
          }

          rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;

          return rupiah;
      },
      unmask (value) {
          return value;
      },
    },
  }

  Vue.component('MaskedInput', {
    props: {
        value: null,
      maskType: String,
      placeHolder: '',
      nameInput: '',
      event: null,
    },
    // template: `
    //   <div>
    //     <input
    //     	v-model="displayValue"
    //     	class="form-control"
    //     	:placeholder="placeHolder"
    //     	:name="nameInput"
    //     	type="text"
    //     	v-on:keypress="isNumber(event)"
    //       @blur="handleInputState"
    //       @focus="handleInputState">
    //   </div>`,
    template: `
      <div>
        <vue-numeric
            separator="."
            decimal-separator=","
            type="text"
            empty-value="null"
            v-bind:precision="2"
            v-model="displayValue"
            @keypress.native="isNumber(event)"
            class="form-control" />
      </div>`,
    data: function() {
      return {
        inputFocused: false
      }
    },
    methods: {
        handleInputState (event) {
          this.inputFocused = event.type === 'focus'
      },
      unmask (value) {
          return masks[this.maskType].unmask(value)
      },
      mask (value) {
          return masks[this.maskType].mask(value)
      },
      isNumber: function(evt) {
        evt = (evt) ? evt : window.event;
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if ((charCode > 31 && (charCode < 48 || charCode > 57))) {
          if(charCode == 44 || charCode == 46 ){
              return true;
          }
          evt.preventDefault();
        } else {
          return true;
        }
      },
    },
    computed: {
      displayValue: {
        get: function() {
          return this.value
        },
        set: function(modifiedValue) {
          this.$emit('input', modifiedValue)
        }
      }
    }
  });

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
});
