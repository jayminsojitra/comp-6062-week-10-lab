const app = Vue.createApp({
    data(){
        return{
            fName: '',
            lName: '',
            quantity: 0,
            price: 10
        };
    },
    computed: {
        fullName(){
            return this.fName + ' ' + this.lName;
        },
        TotalPrice(){
            return this.quantity * this.price;
        }
    },
    methods: {
        clearField() {
            this.fName =  '';
            this.lName = '';
            this.quantity = 0;
        }
    }
})

app.mount('#app');