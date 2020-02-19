<template>
<div class="home-page-container">
  <section class="Hero-session">
    <b-container fluid class="home-page-heroSession-backgroundcolor ">
      <b-row > 
        <b-col md="4">
          <img src="~/assets/images/those-orange-work-sketch-copy-300px-width.png">
            <div class="" style="margin:10px;">
              <h5>update</h5>
              <br>
              <p>
                writing: <a href="http://floatingprojectscollective.net/art-notes/hardworking-electricity-1-4/">勤力電路 #1.0 – #1.4 Hardworking electricity #1.0-#1.4</a>
              </p>
            </div>
          </b-col>
        <b-col md="8"> 
          <div class="" style="margin:10px;">
             
            <HeroSessionImageSlider :ImageSlider="HeroImageSlider"/>
          </div>
          </b-col>
      </b-row>

    
   
    <!-- <HeroSession /> -->
    
  
 

    
      <b-row>
        <b-col>
          <h5> Recent Works </h5>
          <workPreviewList :posts="HeroWorkloadedPosts"/>
        </b-col>
        
      </b-row>
    </b-container>
  
  </section>
  
</div>
 

 

</template>

<script>
import HeroSession from "@/components/HeroSession"
import HeroWorkSession from "@/components/HeroWorkSession"
import workPreviewList from "@/components/workPreview/workPreviewList"
import HeroSessionImageSlider from "~/components/HeroSessionImageSlider"



export default {

  
  components:{
    HeroSession,
    HeroWorkSession,
    workPreviewList,
    HeroSessionImageSlider
    
  },
  data () { 
        return {
             HeroWorkloadedPosts: [
        {
          id: 'hardworking-circuit-1-4',
          title: "hardworking circuit #1.4 勤力電路＃1.4",
          previewText: "",
          thumbnail:
            "hardworking-circuit-1-4-conceptsketch.svg",
          medium:"electronics",
          year:"2018",
          category:"installation | electronics | stupid  | toy"
        },
        {
          id: 'those-oranges-you-cannot-eat-installation',
          title: "冚街橙  | Those oranges you cannot eat  ",
          previewText: "A assemblage I did during C3A Residency @ Cordoba, Spain",
          thumbnail:
            "those-orange-work-sketch-copy-300px-width.png",
          medium:"electronics , found objects",
          year:"2019",
          category:"sound | electronics | installation | assemblage"
        },
        {
          id: 'those-oranges-you-cannot-eat-3Dscan',
          title: "冚街橙 立體掃描 | Those oranges you cannot eat (3D scanned object) ",
          previewText: "Collection of bitter orange @ C3A Residency @ Cordoba, Spain",
          thumbnail:
            "orange5-p1-200px.gif",
          medium:"digital 3D Objects , found objects, video",
          year:"2019",
          category:"3D Objects | found objects | food"
        },
        {
          id: 'Dream-Machine-L306D-Dream-team',
          title: "Dream Machine 夢幻機器 ",
          previewText: "by L305D Dream Team Collectives",
          thumbnail:
            "Dream-machine-conceptsketch-thumbnail.svg",
          medium:"installation",
          year:"2019",
          category:"video | sound | patching"
        }
       
      ],
            HeroImageSlider: [
              {
                id:'sliderimage1',
                title:' ',
                subtitle:'Whatever subtitle here',
                imageSource:'hardworking-circuit-1p3sketch-03-770x232.png'
              },
              {
                id:'sliderimage2',
                title:' ',
                subtitle:'Nothing',
                imageSource:'hardworking-circuit-1p3sketch-03-770x232.png'
              }
            ]
        }
    }
}
</script>

<style scoped>

.home-page-container{
    background-color:rgb(238, 242, 242);
    height: 100%;
    /* max-width: 1100px; */
    padding: 3px;
    margin: auto;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;

}
.home-page-heroSession-backgroundcolor .row > [class^="col-"] { 
    background-color: rgba(144, 171, 184, 0.219);
    border-block-color: rgb(108, 124, 129);
    border-style: solid;
    border-width: 0px;
    border-block-width: 1px;
    padding-block: 5px;
    

}
.home-page-heroSession-backgroundcolor .row .col {
    background-color: rgba(200, 124, 66, 0.192);
    border-block-color: #E8A87C;
    border-style: solid;
    border-width: 0px;
    padding-block: 5px;
    margin-bottom: 2px;
    margin-top: 2px;
    border-block-width: 1px;
}
</style>