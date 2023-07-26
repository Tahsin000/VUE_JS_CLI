new Vue({
    el:"#app",
    data:{
        data:[],
        loading: true,
        error:false,
        errorMsg:"",
    },
    mounted() {
        this.handleQuote();
    },
    methods: {
        handleQuote(){
            this.loading = true;
            fetch('https://api.quotable.io/random')
            .then(res => res.json())
            .then(data => {
                this.data = data;
                this.loading = false;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                this.loading = false;
                this.error = true;
                this.errorMsg = `Error fetching data: ${error.message}`;
            });
        },
       
    },
})