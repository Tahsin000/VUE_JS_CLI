import Vue from 'vue'
import App from './App.vue'

import myFooter from './components/share/MyFooter.vue';

Vue.component('app-footer', myFooter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
