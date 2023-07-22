new Vue({
  el:"#app",
  data:{
    formData:{
      firstName:"",
      lastName:""
    }
    ,
    formValue:"",
  },
  methods: {
   updateName(value, event) {
    this.name = value
    console.log(event)
   },
   handleForm(){
    this.formValue = this.formData;
   }
  },
  
})