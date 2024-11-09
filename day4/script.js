const app = Vue.createApp({

    data() {
        return {
            counter : 0 ,
            name : '' ,

        }
    },
    methods: {
        resetScore(event){
            this.counter = 0 ;  
            this.name =" ";

        },
        submitForm(event){
            // event.preventDefault();
            

            alert("You Logged in ");
        },
        setName(event,lastname){
            debugger;
            this.name = event.target.value +' ' + lastname ;
        },
        add(number){
            this.counter = this.counter + number;
        } ,
        reduce(number){
            this.counter=this.counter -number ;

        }

    },
});
app.mount("#sectionPart");