<template>
    <div>
        
        <b-container  class="album-container">
          <b-row><b-col> <h3 class="album-session-intro"> Sound Design / Engineering </h3>  </b-col></b-row>
            
            <div>
               <b-form-group label="sort by medium::" >
                <b-form-radio-group
                  
                  v-model="filterValue"
                  :options="filteroptions"
                  size="md"
                  style="color:#000A00"
                ></b-form-radio-group>
               

              </b-form-group>
             </div>

              <soundDesignGrid :posts="filterSoundDesignPosts"/>
                
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
             filterValue: '',
             filterSoundDesignPost: [{}],
             
              
              filteroptions: [
                { text: 'everything', value: '' },
                { text: 'Animation', value: 'animation' },
                { text: 'video', value: 'video' },
                { text: 'installation ', value: 'installation' },
              
              ],

             SoundDesignPosts: [
        {
          id: 'sound-design/balanceBreaker',
          title: "Balance Breaker",
          thumbnail:
            "boss-ompress-compress.gif",
          soundTask:"Sound design Wong Chun Hoi ",
          collaborateArtist:"Game developed by Gamestry Lab",
          year:"2019",
          medium:"computer game",
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
          medium:"animation",
          previewText: " ",
          
        },
        {
          id: 'sound-design/lostinthefumes',
          title: "Lost in the fumes 地厚天高",
          thumbnail:
            "lostinthefume.jpg",
          soundTask:"mixing",
          collaborateArtist:"Video by Nora Lam Tze Wing",
          year:"2017",
          medium:"featured film / video ",
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
          medium:"animation",
          previewText: " ",
          
        },
        {
          id: 'sound-design/tenyears',
          title: "冬蟬 － 《十年》 | Season of the end - Ten Years",
          thumbnail:
            "TenYearsRegularPoster.jpg",
          soundTask:"oroginal music & sound design",
          collaborateArtist:"Directed by Wong Fei-pang 黃飛鵬",
          year:"2015",
          medium:"short film / video",
          previewText: " ",
          
        },
        {
          id: 'sound-design/tenyears',
          title: "《後來怎麼了 》 | And Afterwards",
          thumbnail:
            "andafterwards.jpg",
          soundTask:"sound design and mixing",
          collaborateArtist:"Video by Law Sin Yan 羅倩欣",
          year:"2015",
          medium:"short film / video",
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
          medium:"animation",
          previewText: " ",
          
        },
        {
          id: 'sound-design/foodfacist',
          title: "《飲食法西斯》 Food Facist",
          thumbnail:
            "foodfacist-220x140.jpg",
          soundTask:"music",
          collaborateArtist:"導演：葉文希 Director: Yip Man-hay",
          year:"2014",
          medium:"short film / video",
          previewText: " 澳門 香港 Macau Hong Kong / 2012"
        },
        {
          id: 'sound-design/inbertywetrust',
          title: "In Berty We Trust!",
          thumbnail:
            "inbertywetrust-thumbnail.jpg",
          soundTask:"Sound Designer & Technical Supoort",
          collaborateArtist:"Concept and Visual: Angela Su || Animator: Flyingpig Wong",
          year:"2013",
          medium:"3-channel video installation",
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
          medium:"animation",
          previewText: " ",
          
        },
        {
          id: 'sound-design/fig',
          title: "《無花果》fig",
          thumbnail:
            "fig.png",
          soundTask:"sound design and Mixing ",
          collaborateArtist:"導演Director : 崔允信Vincent Chui",
          year:"2012",
          medium:"featured film / video",
          previewText: " 澳門 香港 Macau Hong Kong / 2012",
          
        },

        {
          id: 'sound-design/before-friday',
          title: "Before Friday《星期四》",
          thumbnail:
            "beforefriday.png",
          soundTask:"mixing ",
          collaborateArtist:"Directed by Cheng Tak-yan Enoch ",
          year:"2012",
          medium:"short film / video",
          previewText: " / Hong Kong / Col / 30′ / In Cantonese with English subtitles",
          
        },
        {
          id: 'sound-design/1st-february',
          title: "1st February",
          thumbnail:
            "1stfeb-thumbnail.jpg",
          soundTask:"Sound design and Music ",
          collaborateArtist:"Directed and Animated by FlyingPig Wong Wing Shan",
          year:"2012",
          medium:"animation",
          previewText: " ",
          
        },
        
        
        
      ],
        }
    },

    computed: {
  

      filterSoundDesignPosts: function() {
        return this.SoundDesignPosts.filter((SoundDesignPost) =>{
          return SoundDesignPost.medium.match(this.filterValue) 
        }
        );
        
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