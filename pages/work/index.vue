<template>
    <div class="work-page-container">
        <b-container fluid>
          <b-row>
            <b-col md="6">
              <h3>works</h3>
               <div>
              <b-form-input v-model="filterValue" placeholder="search work category" class="mb-2"></b-form-input>
              <p>filterValue: {{ filterValue }}  </p>
              
             </div>
            </b-col>
          </b-row >
          

            <b-row>
              <b-col>
                <workPreviewList :posts="filterdWorks"/> 
              </b-col>
            </b-row>
            <!-- <workPreviewList :posts="WorkloadedPosts"/> -->
              
            
        </b-container>
        
   
         
    
       
      
        
      
       
    </div>
</template>


<script>
import workPreviewList from "@/components/workPreview/workPreviewList";
import TheRoute from "@/components/Navigation/TheRoute";


export default {
    components: {
        workPreviewList,
        TheRoute,


    }, 
    data () { 
        return {
             filterValue: '',
              filterWorkPost: [
              {}

              ],

             WorkloadedPosts: [
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
        },
        {
          id: 'hardworking-circuit-1-3',
          title: "hardworking circuit #1.3 勤力電路＃1.3 ",
          previewText: "",
          thumbnail:
            "hardworking-circuit-1p3sketch-03-770x232.png",
          medium:"electronics",
          year:"2017-2019",
          category: "nstallation | electronics | stupid  | toy | performance"
        },
        {
          id: 'hardworking-circuit-1-surplus',
          title: "hardworking circuit #1 - surplus 勤力電路＃1 剩物 ",
          previewText: "",
          thumbnail:
            "hardworkingcircuitsurplus-thumbnail.svg",
          medium:"digital image",
          year:"2016",
          category: "electronics | rubbish | scan | image | 2D"
        },
        {
          id: 'hardworking-circuit-1-2',
          title: "hardworking circuit #1.2 24VDC  勤力電路＃1.2 直流電24伏特 ",
          previewText: "",
          thumbnail:
            "hardworking-circuit-1-2-connectionsketch.svg",
          medium:"electronics",
          year:"2016",
          category: "electronics | "
        },
         {
          id: 'let-hard-plastic-get-electrocuted',
          title: "Let hard plastic get electrocuted ！讓硬塑料被電吧！",
          previewText: "",
          thumbnail:
            "lethardplasticbeelectrocuted_connectionweb.svg",
          medium:"electronics",
          year:"2011-2016",
          category: "electronics | game"
        },
         {
          id: 'extremely-useful-system-0-hanger',
          title: "extremely useful system #0 – hanger | 終極有用系統 #0 – 衣架",
          previewText: "",
          thumbnail:
            "Extremelyusefulsystem0_sketch.svg",
          medium:"electronics, Micro processor, IR sensor, Stepper motor, hanger, gloves",
          year:"2016-01",
          category: "electronics | installatiom"
        },
         {
          id: 'extremely-useful-system-1-firewood',
          title: "extremely useful system #1 – firewood ｜終極有用系統 #1 – 柴火",
          previewText: "",
          thumbnail:
            "extremelyusefulsystem_01_sketchingthumbnail.svg",
          medium:"electronics | servo motos, micro controller, wood, magnetic glass",
          year:"2016",
          category: "electronics | installation | burn "
        }
      ],
        
      

      }
    },
    computed: {
  

      filterdWorks: function() {
        return this.WorkloadedPosts.filter((WorkloadedPost) =>{
          return WorkloadedPost.category.match(this.filterValue) 
        }
        );
        
      }
    }
    

    
}


</script>

<style scoped>



.work-page-container{
    background-color:rgba(200, 124, 66, 0.062);;
    height: 100%;
    /* max-width: 1100px; */
    padding: 3px;
    

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;

}
.work-page-grid-backgroundcolor .row > [class^="col-"] { 
    background-color: rgba(144, 171, 184, 0.219);
    border-block-color: rgb(108, 124, 129);
    border-style: solid;
    border-width: 0px;
    border-block-width: 1px;
    padding-block: 5px;
    

}
.home-page-row-backgroundcolor .row .col {
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