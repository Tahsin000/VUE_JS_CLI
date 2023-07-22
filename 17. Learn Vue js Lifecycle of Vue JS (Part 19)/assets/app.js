
new Vue({
  el:"#app",
  data:{
    name:"Luffy",
  },
  methods: {
    updateName(){
      this.name = "Hotash! tumi amake update kore dile"
    },
    destroyed(){
      this.name = "Hotashai ami more jabo!"
      this.$destroy();
    }
  },
  beforeCreate() {
    document.getElementById('beforeCreate').classList.remove('d-none')
    console.log("beforeCreate");
  },
  created() {
    document.getElementById('created').classList.remove('d-none')
    console.log("created");
  },
  beforeMount() {
    document.getElementById('beforeMount').classList.remove('d-none')
    console.log("beforeMount")
  },
  mounted() {
    document.getElementById('mounted').classList.remove('d-none')
    console.log("mounted");
  },
  beforeUpdate() {
    document.getElementById('beforeUpdate').classList.remove('d-none')
    console.log("beforeUpdate")
  },
  updated() {
    document.getElementById('updated').classList.remove('d-none')
    console.log("updated")
  },
  beforeDestroy() {
    document.getElementById('beforeDestroy').classList.remove('d-none')
    console.log("beforeDestroy")
  },
  destroyed() {
    document.getElementById('destroyed').classList.remove('d-none')
    console.log("destroyed");
  },

})