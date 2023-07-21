new Vue({
  el:"#app",
  data:{
    user:"luffy1",
    userAge: 26,
    allowedAge: 18
  },
  methods:{
    changeUser(){
        return this.user === "luffy" ? true : false;
    }
  },
  
})