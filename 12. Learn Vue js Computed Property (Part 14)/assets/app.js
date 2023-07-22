new Vue({
  el:"#app",
  data:{
   a:0,
   b:0,
   salary:10
  },
  methods: {
   
  },
  computed:{
    addToA(){
      console.log("add A")
      return this.a + this.salary;
    },
    addToB(){
      console.log("add B")
      return this.b + this.salary;
    }
  }
  
})