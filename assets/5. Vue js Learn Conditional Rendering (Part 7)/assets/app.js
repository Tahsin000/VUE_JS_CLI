new Vue({
  el:"#app",
  data:{
    user:"luffy",
    userAge: 16,
    allowedAge: 18
  },
  methods:{
    changeUser(){
        return this.user === "luffy" ? true : false;
    }
  },
  
})