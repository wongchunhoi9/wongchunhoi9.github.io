<template>
    <div class="individual-work-page-container">
       
        <b-container  class="work-session-backgroundcolor">
            <b-row>
                <!-- Work Title -->
                <b-col> <h3> {{(WorkInfo[0].title)}}</h3> </b-col>
            </b-row>
            <b-row>
                <b-col>     
                    <!-- Feature Image : -->
                    <img  src="~/assets/images/work/thoseOrange3dscan/orangewebgif/Orange2-1080p_1.gif" > 
                    <img  src="~/assets/images/work/thoseOrange3dscan/orangewebgif/Orange3-1080p_1.gif" > 
                    <img  src="~/assets/images/work/thoseOrange3dscan/orangewebgif/Orange3-1080p2_1.gif" > 
                    <img  src="~/assets/images/work/thoseOrange3dscan/orangewebgif/orange5-1080p_1.gif" > 
                    <img  src="~/assets/images/work/thoseOrange3dscan/orangewebgif/orange5-1080p2_1.gif" > 
                    <img  src="~/assets/images/work/thoseOrange3dscan/orangewebgif/orange5-1080p3_1.gif" > 
                    
                    <img  src="~/assets/images/work/thoseOrange3dscan/orangewebgif/Orange6-1080p_1.gif" > 
                    <img  src="~/assets/images/work/thoseOrange3dscan/orangewebgif/Orange6-1080p2_1.gif" > 
                    <img  src="~/assets/images/work/thoseOrange3dscan/orangewebgif/orange6F-1080p2_1.gif" > 
                    <img  src="~/assets/images/work/thoseOrange3dscan/orangewebgif/orange8-1080p_1.gif" > 
                    <img  src="~/assets/images/work/thoseOrange3dscan/orangewebgif/orange8-1080p2_1.gif" > 
                    <img src="~/assets/images/work/thoseOrange3dscan/orangewebgif/orange9-1080p_1.gif" >
                    <img src="~/assets/images/work/thoseOrange3dscan/orangewebgif/orange33-1080p 2_1.gif" >
                    <img src="~/assets/images/work/thoseOrange3dscan/orangewebgif/Orange33-1080p x ray_1.gif" >
                    <img src="~/assets/images/work/thoseOrange3dscan/orangewebgif/orange33-1080p_1 copy.gif" >
                    <img src="~/assets/images/work/thoseOrange3dscan/orangewebgif/orange33-1080p_1.gif" >
                    <img src="~/assets/images/work/thoseOrange3dscan/orangewebgif/orange44-1080p 2_1.gif" >
                    <img src="~/assets/images/work/thoseOrange3dscan/orangewebgif/orange44-1080p 3_1.gif" >
                    <img src="~/assets/images/work/thoseOrange3dscan/orangewebgif/orange44-1080p_1.gif" >
                    <img src="~/assets/images/work/thoseOrange3dscan/orangewebgif/orange77-1080p_1.gif" >
                    <img src="~/assets/images/work/thoseOrange3dscan/orangewebgif/orange1010-1080p_1.gif" >
                    <img src="~/assets/images/work/thoseOrange3dscan/orangewebgif/orange1111-1080p_1.gif" >
                    <img src="~/assets/images/work/thoseOrange3dscan/orangewebgif/Tree1-1080p 2_1.gif" >
                    <img src="~/assets/images/work/thoseOrange3dscan/orangewebgif/Tree1-1080p 3_1.gif" >
                    <img src="~/assets/images/work/thoseOrange3dscan/orangewebgif/Tree1-1080p 4_1.gif" >
                    <img src="~/assets/images/work/thoseOrange3dscan/orangewebgif/Tree1-1080p_1.gif" >
                
                    <b-img  src="" fluid > </b-img>
                    <figcaption class="figure-caption"> scanned objects </figcaption>
                </b-col>
                
            </b-row>
            <b-row>
                
                <b-col md='9' order="1" order-md="2"> 
                    <p>
                        {{(WorkInfo[0].previewText)}} 
                    </p>
                    <hr>
                    <p>  related link: </p>
                    <ul>
                        <li> <nuxt-link to="/work/those-oranges-you-cannot-eat-installation"> Those orange you cannot eat (installation) </nuxt-link></li>
                        <li> <nuxt-link to="/blog/article?name=2019-05-08-Concrete-wandering-c3a"> Art Note: Concrete wandering in and out of C3A Cordoba:bitter oranges on the roadside 哥多華當代美術中心漫遊紀錄:僅能拾起一個個隨街掉落的橙子</nuxt-link></li>
                    </ul>

                </b-col>

                <b-col md="3"> 
                    <p> {{(WorkInfo[0].medium)}} 
                        <br>
                        {{(WorkInfo[0].year)}}
                    </p>                        
                    <hr>
                    <p> <small>tag:</small>
                        <br>
                        {{(WorkInfo[0].category)}}
                    </p>
                </b-col>
            </b-row>

            <!-- WORK CONTENT -->
            <b-row>
                <b-col>
                    <h4> Sample Model: Orange #3</h4>
                    <b-container fluid class="model-container">
                      <div class="demo" style="background: linear-gradient(#ffffff, #E68429);">
                        <!-- Orange 3 by Wong Chun Hoi -->
                        <model-viewer src="https://poly.googleusercontent.com/downloads/c/fp/1583318362013016/deBlyR6vhqQ/0nUdQsugAUG/Orange%203.gltf" ios-src="https://poly.googleusercontent.com/downloads/c/fp/1583318362013016/deBlyR6vhqQ/4KEUqtAGmKo/Orange%203.usdz" alt="Orange 3 by Wong Chun Hoi" background-color="##e0a57d" camera-controls auto-rotate > </model-viewer>
                        <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.js"></script>
                        <script nomodule src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"></script>     
                        
                      </div>
                    </b-container>

                   <b-img src="~/assets/images/work/thoseOrange3dscan/orange33-3.png" fluid-grow></b-img>
                    <figcaption> an orange scan (sceen capture)</figcaption>
                   <b-img src="~/assets/images/work/thoseOrange3dscan/Orange-3-texture.jpg" fluid></b-img>
                   <figcaption> 3D model texture file</figcaption>
                     <b-img src="~/assets/images/work/thoseOrange3dscan/orange33 photos at a glance_1.gif" fluid-grow></b-img>
                   <figcaption> captured by bare camera , render by <a href="https://www.agisoft.com/">Agisoft metashape</a></figcaption>
                   <!--here to write-->
                   <hr>
                   <h4>more orange model preview</h4>
                   <b-embed
                        type="iframe"
                        aspect="16by9"
                        src="https://www.youtube.com/embed/videoseries?list=PLCEj7r8U6CrPqiGucJRpF1gvHmB63wXPp"
                        allowfullscreen    
                    ></b-embed>

                    
                </b-col>
            </b-row>

            <b-row>
                <b-col>
                   <h4> A Video in progress for the <a href="http://www.c3a.es/en_US/la-fachada-mediatica"> C3A Media Facade</a> </h4>
                   <div>
                    <b-embed
                        type="iframe"
                        aspect="16by9"
                        src="https://www.youtube.com/embed/P3OeWT6xx9w?rel=0"
                        allowfullscreen
                    ></b-embed>
                    </div>
                </b-col>
            </b-row>

             <b-row>
                <b-col>
                   <div><h4>Testing </h4>
                    <b-embed
                        type="iframe"
                        aspect="16by9"
                        src="https://www.youtube.com/embed/9x3r4B-TuS4"
                        allowfullscreen
                    ></b-embed>
                    </div>
                 
                </b-col>
            </b-row>

             <b-row>
                <b-col>
                    <h4> Making of </h4>
                   <b-img src="~/assets/images/work/thoseOrange3dscan/R1-22.jpg" fluid></b-img>
                    <figcaption> view from my Studio @C3A residency</figcaption>
                   <b-img src="~/assets/images/work/thoseOrange3dscan/1K4A1687.jpg" fluid></b-img>
                   <figcaption> orange on street @Cordoba, Spring season</figcaption>
                   <b-img src="~/assets/images/work/thoseOrange3dscan/1K4A1687.jpg" fluid></b-img>
                   <figcaption> orange on street @Cordoba, Spring season</figcaption>
                   <!--here to write-->
                </b-col>
            </b-row>

        </b-container>
           
            
            
    </div>
</template>

<script>
export default {
    data() {
        return {
            WorkInfo: [
                {
                   id: 'those-oranges-you-cannot-eat-3Dscan',
                    title: "冚街橙 立體掃描 | Those oranges you cannot eat (3D scanned object) ",
                    previewText: "Collection of bitter orange @ C3A Residency @ Cordoba, Spain",
                    thumbnail:
                        "orange5-p1-200px.gif",
                    medium:"digital 3D Objects , found objects, video",
                    year:"2019",
                    category:"3D Objects | found objects | food"
                }
            ]
        }
    },
    head() {
        return{
            title: this.WorkInfo[0].title,
            meta: [
                { hid: 'description', name: this.WorkInfo[0].title , content: this.WorkInfo[0].previewText },
                { hid: 'keywords', name: this.WorkInfo[0].medium , content: this.WorkInfo[0].category }
      
            ]
        }
    }
}
</script>

<style scoped>
model-viewer { 
    width: 100%;
    height:480px;

}

.model-container {
    /* width: 800px; */
    max-width: 1024px;
    
}
</style>