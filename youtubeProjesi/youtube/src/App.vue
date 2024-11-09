<template>
  <div class="container">
    <h1 class="title">Youtube Uygulaması</h1>

    <SearchBar @termChange="onTermChange" />
    <div class="videoDetail">
      <videoDetail :video="selectedVideo" />
       <VideoList @videoSelect="onVideoSelect"  :videos="videos" />
    </div>
   
    
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import VideoList from "./components/VideoList.vue";
import VideoDetail from "./components/VideoDetail.vue";

import axios from "axios";

export default {
  
  name: "App",
  data() {
    return {
      selectedVideo:null ,
      videos:[]
    }
  },
  components: {
    
    SearchBar,
    VideoList,
    VideoDetail,
  },
  methods: {
    onVideoSelect(video){

      this.selectedVideo=video 
    },
    onTermChange(searchTerm) {
      axios.get('https://www.googleapis.com/youtube/v3/search',{
        params: {
          part: 'snippet',
          type: 'video',
          key: 'AIzaSyDOqqv2c7N16L0WPYAQg-qaLXt3Fdj9dSg',
          q: searchTerm
        }
          

        })
        .then(response => {
            
         this.videos=response.data.items
          console.log(response);
        })
        .catch(error => {
          
          console.log(error);
        });
    },
  },
};
</script>

<style>
.videoDetail{
  display: flex;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {

  max-width: 1200px;
  width: 100%;
  margin: 50px auto;
}
.title {
  text-align: center;
}
</style>
