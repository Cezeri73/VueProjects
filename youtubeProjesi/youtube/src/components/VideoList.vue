<template>
  
  <ul class="videoList">
  
<VideoListItem @videoSelect="onVideoSelect"  v-for="video in videos "  :key="video.etag"  :video="video"/>
   
  </ul>
</template>

<script>
import VideoListItem from "./VideoListItem.vue";
export default {
    emits :[
        'videoSelect'
    ],
    methods: {
        onVideoSelect(video){
        this.$emit('videoSelect',video)

        }},
    
props : ['videos'],
components:{VideoListItem}
    
}
</script>

<style>
.videoList{
    list-style-type: none;
    width: 100%;
}



</style>