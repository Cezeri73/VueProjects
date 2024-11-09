<template>
   
  <div class="showVideo" v-if="video">
    <div>
        <iframe :src="`https://www.youtube.com/embed/${video.id.videoId}`" frameborder="0"></iframe>
    </div>
    <div>
        <h4>{{  video.snippet.title}}</h4>
        <p>{{ video.snippet.description }}</p>
    </div>
  </div>

</template>

<script>
export default {
props :[
    'video'
],
computed:{
    videoUrl(){
        
        return 'https://www.youtube.com/embed/${videoId}'
    }
}
}
</script>

<style>

.showVideo iframe{
   margin: 20px auto;
   width: 100%;
}
</style>