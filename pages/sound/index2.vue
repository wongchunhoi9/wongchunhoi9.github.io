<template>
    <div>
        
        <b-container  class="album-container">
            
              <albumGrid :posts="albumList"/>
                
        </b-container>
   
    </div>
</template>

<script>
import albumGrid from "@/components/soundPreview/albumGrid";

export default {
  components: {
        albumGrid
    }, 
    
    data () { 
        return {
             

             albumList: [
        {
          id: 'soundsheepsheep-ep-1',
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
        id: 'half-hour-exercise-1',
          title: "half-hour exercise #1",
          previewText: "I spent around 30mins to twist each freelance job session and play",
          thumbnail:
            "halfhour-exercise-set.svg",
          albumArtist:"wongchunhoi9",
          year:"2016",
          medium:"CD",
          category:"compilation"
        },
        {
        id: 'hardworking-circuit-1-4',
          title: "hardworking circuit #1.4 勤力電路＃1.4",
          previewText: "",
          thumbnail:
            "soundyoung-ep-1-album-cover.png",
          albumArtist:"electronics",
          year:"2018",
          medium:"installation | electronics | stupid  | toy",
          category:"XXX"
        },
        {
        id: 'hardworking-circuit-1-4',
          title: "hardworking circuit #1.4 勤力電路＃1.4",
          previewText: "",
          thumbnail:
            "soundyoung-ep-1-album-cover.png",
          albumArtist:"electronics",
          year:"2018",
          medium:"installation | electronics | stupid  | toy",
          category:"XXX"
        }
       

      ]
        }
    }
    
}
</script>
<style scoped>

.album-container {
      background-image: linear-gradient(to right top, #90abb8, #6daba8, #72a67d, #99984e, #c87c42);
      justify-content: center;
      height: 100%;
      /* max-width: 1200px; */
      
      
    
    
    
}
</style>