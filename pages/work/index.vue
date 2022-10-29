<template>
    <div class="work-page-container">
        <b-container fluid>
          <b-row>
            <b-col md="6">
              <h3>works</h3>
               <div>
              <!-- <b-form-input v-model="filterValue" placeholder="search work category" class="mb-2"></b-form-input>
              <p>filterValue: {{ filterValue }}  </p> -->
              
             </div>
             <div>
               <b-form-group label="a rough catergorization:">
                <b-form-radio-group
                  id="btn-radios-1"
                  v-model="selected"
                  :options="options"
                  size="sm"
                ></b-form-radio-group>
                <!-- <p>selected : {{selected}}</p> -->

              </b-form-group>
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



export default {

    data () { 
        return {
             filterValue: '',
              filterWorkPost: [
              {}

              ],
              selected: '',
              options: [
                { text: 'everything', value: '' },
                { text: 'hardworking circuit #1 series', value: 'hardworkingcircuit#1' },
                { text: 'electronics', value: 'electronics' },
                { text: 'installation / objects', value: 'installation' },
                { text: 'video', value: 'video' },
                { text: 'sound', value: 'sound' },
                { text: 'assemblage', value: 'assemblage' },
                { text: 'toy', value: 'toy' },
                { text: 'stupid', value: 'stupid' },
                { text: 'image', value: 'image' },
                { text: '3D', value: '3D' },
                { text: 'boardcast', value: 'boardcast' },
                { text: 'Work-In-Progress', value: 'work-in-progress' },
              ],

             WorkloadedPosts: [
          
             {
          id: 'lost-and-found-anything-store',
          title: "Lost and Found Anything Store 失物萬事屋",
          thumbnail:
            "lost-and-found-anything-store.jpeg",
         
          previewText: " Lost and Found Anything Store is a long term project. The artist take the initiative to uncover and focus on the abandoned lost objects in certain sites, which will be transformed into digital 3D models and re-imagined in a half-realistic, half-inferential free-association. In the midst of the unpredictable objects, a small history is written with these young relics",
          medium:"physical and digital",
          year:"2020 onwards",
          category:"installation | digital 3D models"
        },   {
          id: 'WIP-level-three-sound',
          title: "三級音 level three sound",
          thumbnail:
            "leve3sound1.png",
         
          previewText: "An audio project that aimed as getting a LEVEL III rating (Person Aged 18 or above only) by submitting a film with no visual (just black screen() but just sound",
          medium:"Audio",
          year:"work in progress | not complete",
          category:"sound | picture rating system | work-in-progress"
        },
        { id:"WIP-random-seeding-generator",
          title: "Random Seeding Generator 隨種生成器",
          previewText: "Random number generator based on a video capture of double pendulum system driven by a motor in its threshold",
          medium:"software thing ",
          year:"work-in-progress | not complete",
          category:"work-in-progress ",
          thumbnail:"randomseedgenerator1.jpg"
        },
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
          previewText: "An assemblage I did during C3A Residency @ Cordoba, Spain",
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
          previewText: "A physical object collage by L305D Dream Team Collectives, inspired by one story from Chang Shi-kuo’s Nebula Suite (1980) | 是一組具物質性的現成物拼貼，其靈感源於張系國《星雲組曲》（1980）中的一個故事",
          thumbnail:
            "Dream-machine-conceptsketch-thumbnail.svg",
          medium:"installation",
          year:"2019",
          category:"video | sound | patching | Collaboration"
        },
        {
          id: 'hardworking-circuit-1-3',
          title: "hardworking circuit #1.3 勤力電路＃1.3 ",
          previewText: "hardworking circuit#1 is a realization of a schema of monotonous, repetitive circuit, using as many units as possible of relay switch to bridge up the sequential extension of cables, merely for the purpose of electricity connection 勤力電路#1 實現了一個單調、重複的電路系統，以大量繼電器連接，順序延長成極長的電線，只不過就是為了通電。",
          thumbnail:
            "hardworking-circuit-1p3sketch-03-770x232.png",
          medium:"electronics",
          year:"2017-2019",
          category: "nstallation | electronics | stupid  | toy | performance | hardworkingcircuit#1"
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
        },
        {
          id: 'hardworking-circuit-1-surplus',
          title: "hardworking circuit #1 - surplus 勤力電路＃1 剩物 ",
          previewText: "",
          thumbnail:
            "hardworkingcircuitsurplus-thumbnail.svg",
          medium:"digital image",
          year:"2016",
          category: "electronics | rubbish | scan | image | 2D | hardworkingcircuit#1"
        },
        {
          id: 'hardworking-circuit-1-2',
          title: "hardworking circuit #1.2 24VDC  勤力電路＃1.2 直流電24伏特 ",
          previewText: "",
          thumbnail:
            "hardworking-circuit-1-2-connectionsketch.svg",
          medium:"electronics",
          year:"2016",
          category: "electronics | hardworkingcircuit#1 "
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
        },
        {
          id: 'Temporary-non-locatable-public-space-2-MumbaiCST',
          title: "Temporary non-locatable public space #2 Mumbai CST 臨時無定空間＃2 － 印度 孟買 CST 火車站",
          previewText: "A radio broadcasting event at public space",
          thumbnail:
            "tnps-2-cstmumbai-thumbnail.png",
          medium:"streaming | boardcasting | sound | public | field recording ",
          year:"2016",
          category: "streaming |sound | radio | boardcast | public | FM Transmission "
        },
        {
          id: 'hardworking-circuit-1-1',
          title: "hardworking circuit #1.1 220V AC 勤力電路＃1.1 ",
          previewText: "",
          thumbnail:
            "hwc220v_thumbnail.svg",
          medium:"electronics | servo motos, micro controller, wood, magnetic glass",
          year:"2016",
          category: "electronics | installation | hardworkingcircuit#1 "
        },
        {
            id: 'Temporary-non-locatable-public-space-1-nullahRoad',
            title: "Temporary non-locatable public space #1- Nullah Road Sitting-out Area  臨時無定空間＃1－水渠道休憩處",
            previewText: "A radio broadcasting event at public space",
            thumbnail:
                "nullahroad.jpg",
            medium:"streaming | boardcasting | sound | public | field recording ",
            year:"2014",
            category: "streaming |sound | radio | boardcast | public | FM Transmission"
        },
        {
          id: 'hardworking-circuit-1-0',
          title: "hardworking circuit #1.0   勤力電路＃1.0", 
          previewText: "",
          thumbnail:
            "hardworking-circuit-1-sketch.svg",
          medium:"electronics | installation",
          year:"2014",
          category: "electronics | installation | hardworkingcircuit#1 "
        }
      ],
        
      

      }
    },
    head () {
        return {
            // title: "blog-wongchunhoi9"
            title: "Work - wongchunhoi9",
            meta: [
            // hid is used as unique identifier. Do not use `vmid` for it as it will not work
            { hid: 'description', name: 'description', content: "work by wongchunhoi9" }
        ]
        }
      },
    computed: {
  

      filterdWorks: function() {
        return this.WorkloadedPosts.filter((WorkloadedPost) =>{
          return WorkloadedPost.category.match(this.selected) 
        }
        );
        
      }
    }
    

    
}


</script>

<style scoped>



.work-page-container{
    background-color:#fcf3d9;
    height: 100%;
    /* max-width: 1100px; */
    padding: 3px;
    

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;

}

</style>