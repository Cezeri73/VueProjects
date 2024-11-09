<template>
  <li class="videoItem" @click="onVideoSelect">
    <img class="videoImg" :src="imageUrl" alt="" />
    <div>
      {{ video.snippet.title }}
    </div>
  </li>
</template>

<script>
export default {
  emits: ["videoSelect"],
  props: ["video"],
  computed: {
    imageUrl() {
      return this.video.snippet.thumbnails.medium.url;
    },
  },
  methods: {
    onVideoSelect() {
      this.$emit("videoSelect", this.video);
    },
  },
};
</script>

<style scoped>
.videoItem {
  display: flex;
  border: 1px solid green;
  border-radius: 30px;
  margin: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  align-items: center;
}

.videoImg {
  border-radius: 30px 0px 0px 30px;
  margin-right: 20px;
}
</style>