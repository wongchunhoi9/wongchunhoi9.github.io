<template>
    <div>
        
        <b-container  class="album-container">
          <b-row><b-col> <h3 class="album-session-intro"> Sound Design / Engineering </h3>  </b-col></b-row>
           
              <soundDesignGrid :posts="albumList"/>
                
        </b-container>
        <br>

   
    </div>
</template>

<script>
import soundDesignGrid from "@/components/soundPreview/soundDesignGrid";

export default {
  components: {
        soundDesignGrid
    }, 
    
    data () { 
        return {
             

             albumList: [
        {
          id: 'sound-design/balanceBreaker',
          title: "Balance Breaker",
          thumbnail:
            "Boss_Compress-compress.gif",
          soundTask:"Sound design Wong Chun Hoi ",
          collaborateArtist:"Game developed by Gamestry Lab",
          year:"2019",
          medium:"computer Game",
          previewText: " ",
          
        },
        {
          id: 'sound-design/ghost',
          title: "小鬼 – Ghost",
          thumbnail:
            "ghost-thumbnail.jpg",
          soundTask:"Sound design Wong Chun Hoi ",
          collaborateArtist:"Animation by Morph Workshop: Aplise Lee, Anna Li",
          year:"2018",
          medium:"Animation",
          previewText: " ",
          
        },
        {
          id: 'sound-design/dancingeye',
          title: "靈動之窗 – dancing eye",
          thumbnail:
            "dancingeye-thumbnail.jpg",
          soundTask:"Sound made by: Wong Chun Hoi ,Hody Law Sin Yan",
          collaborateArtist:"Animation by Morph Workshop: Aplise Lee, Anna Li",
          year:"2016",
          medium:"Animation",
          previewText: " ",
          
        },
        {
          id: 'sound-design/lunapark',
          title: "Luna Park",
          thumbnail:
            "lunapark-thumbnail.jpg",
          soundTask:"Sound Design",
          collaborateArtist:"Artwork by Kingsley Ng",
          year:"2014",
          medium:"Multi-channel video and sound installation",
          previewText: " ",
          
        },
        {
          id: 'sound-design/myhiddenwatcher',
          title: "守宮物語 – My Hidden Watcher",
          thumbnail:
            "thehiddenwatcher-thumbnail.jpg",
          soundTask:"Sound Designer",
          collaborateArtist:"Animation by Morph Workshop",
          year:"2014",
          medium:"Animation",
          previewText: " ",
          
        },
        {
          id: 'sound-design/inbertywetrust',
          title: "In Berty We Trust!",
          thumbnail:
            "inbertywetrust-thumbnail.jpg",
          soundTask:"Sound Designer & Technical Supoort",
          collaborateArtist:"Concept and Visual: Angela Su || Animator: Flyingpig Wong",
          year:"2013",
          medium:"3-channel Video Installation",
          previewText: " ",
          
        },
        {
          id: 'sound-design/yeti',
          title: "Yeti",
          thumbnail:
            "yeti-thumbnail.jpg",
          soundTask:"Original music and sound design",
          collaborateArtist:"Animation by Joe Kwun, Treehouse Studio",
          year:"2013",
          medium:"Animation",
          previewText: " ",
          
        },
        {
          id: 'sound-design/1st-february',
          title: "1st February",
          thumbnail:
            "1stfeb-thumbnail.jpg",
          soundTask:"Sound design and Music ",
          collaborateArtist:"Directed and Animated by FlyingPig Wong Wing Shan",
          year:"2012",
          medium:"Animation",
          previewText: " ",
          
        },
        
        
        
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

.album-session-intro {
  color: azure;
  
  margin: 5px;
}
</style>