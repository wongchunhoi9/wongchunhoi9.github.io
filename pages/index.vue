<template>
<div class="home-page-container">
  <section class="Hero-session">
    <b-container fluid class="home-page-heroSession-backgroundcolor ">
      <b-row > 
        <b-col md="4">
         
            <div class="" style="margin:10px;">
              <h4>update</h4>
              <br>
              <h5>Blog:</h5>
              <p>
                
                 <nuxt-link to="/blog/article?name=2019-12-15-hardworking_circuit_1to4">勤力電路 #1.0 – #1.4 Hardworking electricity #1.0-#1.4 </nuxt-link>
                
              </p>
              <h5> coming exhibition / event: </h5>
              <p>
                <a href="http://www.ifva.com/page/?langcode=tc&id=DTTjDKYSnOA">
                25th ifva Award, Media Art Category - Finalist Exhibition [Cancelled]
                </a>
              </p>
              <h5> outreach:</h5>
              <p>
                <a href="https://www.lcsd.gov.hk/CE/Museum/APO/zh_TW/web/apo/va_hardworking_circuit.html">
                Workshop @ HKVAC 勤力電路 #1.0 – 創做必要的「無用」
                </a>


              </p>
            </div>
          </b-col>
        <b-col md="8"> 
          <div class="" style="margin:10px;">
             <b-carousel
              id="carousel-fade"
              style="text-shadow: 0px 0px 2px #000"
              indicators
              img-width="1024"
              img-height="480"
            >
            <HeroSessionImageSlider :ImageSlider="HeroImageSlider"/>
             </b-carousel>
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
        // {
        //   id: 'hardworking-circuit-1-4',
        //   title: "hardworking circuit #1.4 勤力電路＃1.4",
        //   previewText: "",
        //   thumbnail:
        //     "hardworking-circuit-1-4-conceptsketch.svg",
        //   medium:"electronics",
        //   year:"2018",
        //   category:"installation | electronics | stupid  | toy"
        // },
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
        },
        {
          id: 'automatic-editing-20180910',
          title: "Floating Projects 2.0 Stream of Framed Consciousness Automatic Editing 20180910 ",
          previewText: "A video exercise that I gathered during FP 1.0 and bring it to 2.0",
          thumbnail:
            "automatic-editing-20180910.jpg",
          medium:"video",
          year:"2018",
          category:"video "
        }
       
      ],
            HeroImageSlider: [
              {
                id:'sliderimage1',
                title:'工作坊 ： 勤力電路 #1.0 – 創做必要的「無用」 ',
                subtitle:'',
                imageSource:'update-vacworkshophwc1.jpg'
              },
              {
                id:'sliderimage2',
                title:'Dream Machine Exhibition @ 25th ifva',
                subtitle:'cancelled',
                imageSource:'update-dreammachineifva.jpg'
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