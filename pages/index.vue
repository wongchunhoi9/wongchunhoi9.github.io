<template>
<div class="home-page-container">
  <section class="Hero-session">
    <b-container fluid class="home-page-heroSession-backgroundcolor ">
      <b-row > 
        <b-col md="4">
         
            <div class="" style="margin:10px;">
              <h4>update</h4>
              <br>
              <nuxt-link to="/blog">
              <h5>Blog:</h5>
              </nuxt-link>
              <p>
                

                 <nuxt-link to="/blog/article?name=2020-04-24-No-Discipline-Distancing-Exchange-submission">  2020-04-24  一覺醒來，發現世界上的辦公室都消失了
 </nuxt-link>
                 <br>
                 <nuxt-link to="/blog/article?name=2020-04-09-electronic-waste-1">2020-04-09 電子雞肋 - 註定死亡的2011年MBP  </nuxt-link>
                 <br>
                 <nuxt-link to="/blog/article?name=2019-12-15-hardworking_circuit_1to4">勤力電路 #1.0 – #1.4 Hardworking electricity #1.0-#1.4 </nuxt-link>
                
              </p>
              <h5>current activities </h5>
              <p>
                08-08-2020 -> 145-09-2020 <br>
                <a href="http://rossirossi.com/contemporaryexhibit/big-wind-blows/">
                Big Wind Blows 大風吹 @ Rossi & Rossi
                </a>
              </p>
              <h5> outreach:</h5>
              <p>
                


              </p>
            </div>
          </b-col>
        <b-col md="8"> 
          <div class="" style="margin:10px;">
             <b-carousel
              style="text-shadow: 0px 0px 2px #000"
              indicators
              img-width="1024"
              img-height="480"
              no-animation
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





export default {


  data () { 
        return {
             HeroWorkloadedPosts: [
        {
          id: 'hardworking-circuit-1-4',
          title: "hardworking circuit #1.4 勤力電路＃1.4",
          previewText: "",
          thumbnail:
            "hardworking-circuit-1-400-animate-width.gif",
          medium:"electronics",
          year:"2018",
          category:"installation | electronics | stupid  | toy | hardworkingcircuit#1"
        },
        {
          id: 'those-oranges-you-cannot-eat-installation',
          title: "冚街橙  | Those oranges you cannot eat  ",
          previewText: "A assemblage I did during C3A Residency @ Cordoba, Spain",
          thumbnail:
            "those-orange-work-sketch-copy-300px-width.png",
          medium:"electronics , found objects",
          year:"2019",
          category:"sound | electronics | installation | assemblage |"
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
                title:'hardworking circuit #1     @ Big wind blow @ Rossi&Rossi ',
                subtitle:'',
                imageSource:'update-hw1rossirossipreview.jpg'
              }
            ]
        }
    }
}
</script>

<style scoped>

.home-page-container{
    /* background-color:rgb(238, 242, 242); */
    background: #fcf3d9;;
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
    /* background-color: rgba(144, 171, 184, 0.219); */
    border-block-color: rgb(108, 124, 129);
    border-style: solid;
    border-width: 0px;
    border-block-width: 1px;
    padding-block: 5px;
    

}
.home-page-heroSession-backgroundcolor .row .col {
    /* background-color: rgba(200, 124, 66, 0.192); */
    border-block-color: #E8A87C;
    border-style: solid;
    border-width: 0px;
    padding-block: 5px;
    margin-bottom: 2px;
    margin-top: 2px;
    border-block-width: 1px;
}
</style>