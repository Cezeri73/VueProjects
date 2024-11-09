const app = Vue.createApp({

    data() {
        return {
            firstGoal: 'Html',
            SecondGoal :'Css',
            ThirdGoal :"JavaScript",
            LastGoal : "VueJs",
            vHtmlTest : " <h4>More FrameWorks </h4>",
            mylinkedin: 'https://www.linkedin.com/in/murat-kaynar-589b1422b/'
        }
    },
    methods: {
        ourGoal(){
            const randomNumber = Math.random();
            if(randomNumber<0.5){
                return "Our Goal is lower than 0,,5 : " + randomNumber + this.firstGoal ;
            }
            else {
                return "our goal is bigger than 0.5 :  " +  randomNumber + this.SecondGoal;
            }
            
        },
        longTimeGoal(){
            return 'My Long time Goal is Being a good Engineer'

        }
    },
});

app.mount('#frontend');
