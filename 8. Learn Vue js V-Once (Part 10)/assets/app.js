new Vue({
  el:"#app",
  data:{
    name:"Luffy",
  },
  methods: {
    update() {
      setTimeout(()=>{
        this.name = 'Tahsin'
      }, 2000)
    },
  },
  
})