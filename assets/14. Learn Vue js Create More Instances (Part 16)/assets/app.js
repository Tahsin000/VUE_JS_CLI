const App11 = new Vue({
  el:"#app1",
  data:{
   value:"1st"
  },
  methods: {
    handleInstances(){
      return App12.value = "change";
    }
  },
})
const App12 = new Vue({
  el:"#app2",
  data:{
   value:"2nd"
  }
})