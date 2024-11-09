<template>
  <form action="" v-on:submit.prevent="handleSubmit">
    <input class="searchInput" type="text" v-model="searchTerm" />
    <button type="submit" class="SearchBtn">Ara</button>
  </form>
</template>

<script>
export default {
  emits: ["termChange"],
  data() {
    return {
      searchTerm: "",
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("termChange", this.searchTerm);
    },
  },
};
</script>

<style scoped>
form {
  margin: 20px 0px;
  display: flex;
}
.searchInput {
  padding: 8px;
  margin-right: 10px;
  width: 85%;
  border-radius: 20px;
}
.SearchBtn {
  width: 15%;
  background: green;
  color: white;
  border-radius: 10px;
}
</style>