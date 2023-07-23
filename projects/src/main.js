import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false

Vue.directive('awesome', {
  bind(el, binding ){
    el.innerHTML =  binding.value;
    // (binding.arg === 'green') ? el.style.color = "green" : (binding.arg === 'red') ?  el.style.color = "red" : ""; 
    if(binding.modifiers.green){
      el.style.color = "green";
    } 
    if(binding.modifiers.red){
      el.style.color = "red";
    } 
    if(binding.modifiers.big){
      el.style.fontSize = "3rem";
    } 
    if(binding.modifiers.small){
      el.style.fontSize = "1.2rem";
    } 
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
