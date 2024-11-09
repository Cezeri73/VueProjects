const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      fullname: " ",
      lastName: "",
    };
  },
  watch: { counter(value){
    if(value  > 20){
        alert("You reached 20 ! ");
    }
},
   
    name(value) {
      if (value == "") {
        this.fullname = "";
      } else this.fullname = value;
    },
    lastName(value) {
      this.fullname = this.name + " " + value;
    },
  },
  computed: {
    fullnameComputed() {
      if (this.name == "" || this.lastName == "") {
        return "";
      }
      console.log("Execute edildi ");
      return this.name + " " + this.lastName;
    },
  },
  methods: {
    resetScore(event) {
      this.counter = 0;
      this.name = " ";
      this.lastName = "";
    },
    submitForm(event) {
      // event.preventDefault();

      alert("You Logged in ");
    },
    setName(event, lastname) {
      debugger;
      this.name = event.target.value + " " + lastname;
    },
    add(number) {
      this.counter = this.counter + number;
    },
    reduce(number) {
      this.counter = this.counter - number;
    },
  },
});
app.mount("#sectionPart");
