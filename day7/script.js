const app = Vue.createApp({

    data() {
        return {
            skills : [],
            skill : ' ' ,

        };

    },
    methods: {
        addSkill(){

            

            this.skills.push(this.skill);
        },
       
        removeSkill(index){

            this.skills.splice(index,1);

        },
    },
});

app.mount('#frontEnd')