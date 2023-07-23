new Vue({
  el: '#app',
  template: '#my-component-template',
  data(){
    return{
      userData:{
        email:'',
        password:'',
        age:''
      },
      message:'',
      sendMail:[],
      gender:'Male',
      selectedPriority:'Medium',
      priorities:['High', 'Medium', 'Low'],
      isSubmitted:false,
    }
  },
  methods: {
    submitted(){
      this.isSubmitted = true;
    }
  },
});