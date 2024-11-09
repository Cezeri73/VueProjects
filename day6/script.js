const app = Vue.createApp({
    data() {
      return {
        firstBox: false,
        secondBox: false,
        thirdBox: false,
        renk1: '',
      };
    },
    computed:{
        boxOneSelected(){
          return {selecteds:this.firstBox};
        }
    },
    methods: {
      chooseBox(number) {
        
        this.firstBox = false;
        this.secondBox = false;
        this.thirdBox = false;
  
        
        if (number === '1') { 
          this.firstBox = true;
        } else if (number === '2') {
          this.secondBox = true;
        } else if (number === '3') {
          this.thirdBox = true;
        }
      },
    },
  });
  
  app.mount('#frontEnd'); 
  