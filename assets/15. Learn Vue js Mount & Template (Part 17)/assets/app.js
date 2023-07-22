const temp = `<div id="app" class="border p-3 rounded-lg lead bg-info text-white shadow w-50">
<div class="lead">{{name}}</div>
</div>`

const App1 = new Vue({
  data:{
    name: "Luffy",
  },
  template: temp
})

setTimeout(()=>{
  App1.$mount("#app");
}, 2000)