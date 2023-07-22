Vue.component('my-component', {
  data(){
    return {
      name:'Luffy'
    }
  },
  template:`
  <div id="app" class="border p-3 rounded-lg lead bg-info text-white shadow w-50">
    <div class="lead">{{name}}</div>
  </div>
  `
})

new Vue({
  el:'#app'
})
