const app = Vue.createApp({

    data() {

        // Here we defined the array of tasks and the visibilty of the tasks
        return {
            tasks : [],
            enteredTask : ' ' ,
            isVisible : true ,

        };

    },
    methods: {


        // we add tasks to the array
        addTask(){

            this.tasks.push(this.enteredTask);
        },

        // we remove the task from array
        removeTask(index){

            this.tasks.splice(index,1);
            if(tasks.length===0){
                windows.alert('Lütfen Önce Görev Tanımlayınızz ..')
            }

        },
       
        // we supply a optipn to user if show or hide
        
        hideOrshow(isVisible){
             this.isVisible = !this.isVisible;
            
        }
    },
});

app.mount('#frontEnd');