<template>
    <div>
        
        <b-container  class="album-container">
          <b-row><b-col> <h3 class="album-session-intro">  Album </h3>  </b-col></b-row>
           
              <albumGrid :posts="MyAlbumList"/>
                
        </b-container>
<br>
        <b-container  class="album-container">
          <b-row><b-col> <h3 class="album-session-intro"> collaboration / discography </h3>  </b-col></b-row>
           
              <albumGrid :posts="CollabAlbumList"/>
                
        </b-container>
        

   
    </div>
</template>

<script>


export default {

    
    data () { 
        return {
             MyAlbumList: [
        {
        id: 'album/half-hour-exercise-1',
          title: "half-hour exercise #1",
          previewText: "I spent around 30mins to twist each freelance job session and play",
          thumbnail:
            "halfhour-exercise-set.svg",
          albumArtist:"wongchunhoi9",
          year:"2016",
          medium:"CD",
          category:"compilation"
        },
             ],

             CollabAlbumList: [
        {
          id: 'album/about-a-stalker',
          title: "about a stalker 路人崇拜",
          previewText: "",
          thumbnail:
            "about-a-stalker.jpg",
          albumArtist:"王和平 PEACE",
          year:"2019",
          medium:"CD",
          category:" ? ..  track 3: clarinet by hoi9 ...  "
        },
        {
          id: 'album/soundsheepsheep-ep-1',
          title: "坐這山 望這山",
          previewText: "",
          thumbnail:
            "soundyoung-ep-1-album-cover.png",
          albumArtist:"sound羊",
          year:"2016",
          medium:"EP | CD",
          category:"anti-folk?"
        },
        
        {
        id: 'album/day-after',
          title: "DAY AFTER 翌日 [2014. 9.29 - 12.12",
          previewText: "",
          thumbnail:
            "day-after-cd-front.png",
          albumArtist:"Publisher 出版｜soundpocket 聲音掏腰包",
          year:"2015",
          medium:"CD",
          category:"compilation"
        },
      ]
        }
    }
    
}
</script>
<style scoped>

.album-container {
      background-image: linear-gradient(to right top, #90abb8c5, #6daba8, #72a67d, #99984e, #c87c42);
      justify-content: center;
      height: 100%;
      /* max-width: 1200px; */    
}

.album-session-intro {
  color: azure;
  
  margin: 5px;
}
</style>