<template>
  <div>
    <title>
        day14
    </title>
    <h2>Form Projesi</h2>
    <form action=""  @submit.prevent="handleSubmit()">
      <label>Email:</label>
      <input type="text" required v-model="email" />
      <label for="">Şifre :</label>
      <input type="password" v-model="password" />
      <div class="passwordError" v-if="passwordError">
       {{ passwordError }}

         </div>
      <label>Cinsiyet</label>
      <select name="" id="" v-model="gender">
        <option value="">Lütfen Seçiminizi Yapınız</option>
        <option value="male">Erkek</option>
        <option value="female">Kadın</option>
      </select>

      <label for="">Bildiğiniz Diller</label>
      <input type="text" v-model="skill" v-on:keyup.alt="addSkill($event)" />
      <div class="skillItem" v-for="skilItem in skills" :key="skilItem">
        <span v-on:click="deleteSkill(skilItem)">{{ skilItem }}</span>
      </div>

      <div class="term">
        <input class="checkBox" type="checkbox" required v-model="term" />
        <label for="">Kullanim Koşullarini Kabul ediniz .</label>
      </div>

      <div>
        <button class="btnDiv" >Kaydol</button>
      </div>
    </form>
    <p>{{ email }}</p>
    <p>{{ password }}</p>
    <p>{{ gender }}</p>
    <p>{{ term ? "doğruladı" : "kabul etmedi" }}</p>
  </div>
</template>


   
   <script>
export default {
  data() {
    return {
      gender: "",
      email: "",
      password: "",
      term: false,
      skill: "",
      skills: [],
      passwordError : null ,

    };
  },
  methods: {
    addSkill(e) {
      if (e.key === "," && this.skill.trim()) {
        if (!this.skills.includes(this.skill)) {
          this.skill;
          this.skills.push(this.skill);
          this.skill = "";
        }
      }
    },
    deleteSkill(skill) {
      this.skills = this.skills.filter((item) => {
        return skill !== item;
      });
    },
    handleSubmit(){
        this.passwordError=this.password.length > 5 ? '' : 'Lütfen Minimum 6 karakterli bir şifre giriniz ' 
        console.log('Email',this.email);
        console.log('Password',this.password);
        console.log('Gender',this.gender);
        console.log('term',this.term);
        console.log('Skills ',this.skills);


    }
  },
};
</script>
   
   <style>
form {
  margin: 20px auto;
  text-align: left;
  max-width: 450px;
  width: 100%;
  background-color: antiquewhite;
  padding: 40px;
  border-radius: 20px;
}
input,
select {
  display: block;
  width: 100%;
  padding: 10px 8px;
  border-radius: 20px;
  border: none;
  outline: none;
}
label {
  margin: 15px 10px;
  display: inline-block;
  font-size: larger;
  letter-spacing: 2px;
  font-weight: bolder;
}
.term {
  display: flex;
  align-items: center;
}
.checkBox {
  width: 16px;
}

button {
  border: none;
  background-color: rgb(54, 107, 0);
  padding: 10px 15px;
  color: white;
  border-radius: 20px;
  font-size: large;
}
.skillItem {
  background-color: white;
  margin: 20px 10px;
  display: inline-block;
  border-radius: 15px;
  padding: 15px;
  color: gray;
  letter-spacing: 1px;
  font-weight: bold;
  cursor: pointer;
}

.passwordError{
    color: red;
    background-color: bisque;
    margin-top: 10px;
    font-size: large;
    font-weight: bold;
    letter-spacing: 1px;
}
</style>
   