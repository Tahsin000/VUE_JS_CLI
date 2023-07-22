new Vue({
  el:"#app",
  data:{
    name:"Luffy",
    x : 0,
    y : 0,
    formValue:"",
  },
  methods: {
   updateName(value, event) {
    this.name = value
    console.log(event)
   },
   handleForm(event){
    this.formValue = event.target.form.value;
   }
  },
  
})