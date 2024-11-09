function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const app = Vue.createApp({
    data() {
      return {
        winner: null,
        myHealth: 100,
        computerHealth: 100,
        superAttackUsed: false, //To use the suuper attack once
      };
    },
    methods: {
      attackToComputer() {
        const attackValue = getRandomValue(10, 20);  // Player attack
        this.computerHealth -= attackValue;
        if (this.computerHealth < 0) {
          this.computerHealth = 0;
        }
        if (this.computerHealth === 0) {
          this.winner = 'me';
        } else {
          this.attackMe();
        }
      },
      superAttackToComputer() {
        const attackValue = getRandomValue(25, 40);  // Super Attack
        this.computerHealth -= attackValue;
        if (this.computerHealth < 0) {
          this.computerHealth = 0;
        }
        if (this.computerHealth === 0) {
          this.winner = 'me';
        } else {
          this.attackMe();
        }
        this.superAttackUsed = true; //diasble button after super attack
      },
      attackMe() {
        const attackValue = getRandomValue(10, 20);  // Computer attack
        this.myHealth -= attackValue;
        if (this.myHealth < 0) {
          this.myHealth = 0;
        }
        if (this.myHealth === 0) {
          this.winner = 'computer';
        }
      },
      healMe() {
        const healValue = getRandomValue(15, 25);  // healing
        this.myHealth += healValue;
        if (this.myHealth > 100) {
          this.myHealth = 100;
        }
        this.attackMe();
      },
      resetGame() {
        this.myHealth = 100;
        this.computerHealth = 100;
        this.winner = null;
        this.superAttackUsed = false; 
    },
  }});
  
  app.mount("#frontEnd");
  