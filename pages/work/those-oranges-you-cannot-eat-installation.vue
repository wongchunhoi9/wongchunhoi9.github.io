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
                    <b-img  src="~/assets/images/work/thoseOrangeInstallation/1K4A2961X.jpg" fluid > </b-img>
                    <figcaption class="figure-caption"> Installation View @ Residency @C3A Cordoba Spain, 2019 Spring </figcaption>
                </b-col>
                
            </b-row>
            <b-row>
                
                <b-col md='9' order="1" order-md="2"> 
                    <p>
                        {{(WorkInfo[0].previewText)}} 
                    </p>
                    <hr>
                    <p>
                        related reading: 
                        <ul>
                            <li> <nuxt-link to="/blog/article?name=2019-05-08-Concrete-wandering-c3a">blog</nuxt-link></li>
                        </ul>
                    </p>

                </b-col>

                <b-col md="3"> 
                    <p> {{(WorkInfo[0].medium)}} 
                        <br>
                        {{(WorkInfo[0].year)}}
                    </p>                        
                    <p> <small>tag:</small>
                        <br>
                        {{(WorkInfo[0].category)}}
                    </p>
                </b-col>
            </b-row>

            <!-- WORK CONTENT -->
            <b-row>
                <b-col>
                   <h4> Video Documentation - Exhibition View </h4>
                   <b-embed
                        type="iframe"
                        aspect="16by9"
                        src="https://www.youtube.com/embed/aKBhCTduh_4"
                        allowfullscreen
                    ></b-embed>
                   <!--here to write-->
                </b-col>
            </b-row>

             <b-row>
                <b-col>
                   <h4> photos - Exhibition View </h4>
                   <b-img  src="~/assets/images/work/thoseOrangeInstallation/1K4A2828.jpg" fluid class="image-wrap"></b-img>
                   <b-img src="~/assets/images/work/thoseOrangeInstallation/1K4A2876.jpg" fluid class="image-wrap"></b-img>
                   <b-img src="~/assets/images/work/thoseOrangeInstallation/1K4A2889.jpg" fluid class="image-wrap"></b-img>
                   <b-img src="~/assets/images/work/thoseOrangeInstallation/1K4A2918.jpg" fluid class="image-wrap"></b-img>
                   <b-img src="~/assets/images/work/thoseOrangeInstallation/1K4A2828.jpg" fluid class="image-wrap"></b-img>
                   <b-img src="~/assets/images/work/thoseOrangeInstallation/1K4A2985.jpg" fluid class="image-wrap"></b-img>
                   
                 
                   <!--here to write-->
                </b-col>
            </b-row>

           

             <b-row>
                <b-col>
                   <h4> Sketches</h4>
                   <b-img  src="~/assets/images/work/thoseOrangeInstallation/work-sketch-copy-5000px-width.jpg" fluid class="image-wrap"></b-img>
                   <b-img src="~/assets/images/work/thoseOrangeInstallation/work-sketch-copy-5000px-width-negative.jpg" fluid class="image-wrap"></b-img>
                   <b-img src="~/assets/images/work/thoseOrangeInstallation/1K4A3172.svg" fluid class="image-wrap"></b-img>
                   <b-img src="~/assets/images/work/thoseOrangeInstallation/1K4A3170.svg" fluid class="image-wrap"></b-img>
          
                 
                   <!--here to write-->
                </b-col>
            </b-row>


             <b-row>
                <b-col>
                   <h4> making of</h4>
                   <b-img src="~/assets/images/work/thoseOrangeInstallation/R1-33A.jpg" fluid class="image-wrap"></b-img>
                    <b-img src="~/assets/images/work/thoseOrangeInstallation/R1-14A.jpg" fluid class="image-wrap"></b-img>
                   <b-img src="~/assets/images/work/thoseOrangeInstallation/1K4A2817.jpg" fluid class="image-wrap"></b-img>
                   <b-img src="~/assets/images/work/thoseOrangeInstallation/1K4A2819.jpg" fluid class="image-wrap"></b-img>
                   <b-img src="~/assets/images/work/thoseOrangeInstallation/1K4A2814.jpg" fluid class="image-wrap"></b-img>
                    <b-img src="~/assets/images/work/thoseOrangeInstallation/1K4A2796.jpg" fluid class="image-wrap"></b-img>
                    <b-img src="~/assets/images/work/thoseOrangeInstallation/1K4A2810.jpg" fluid class="image-wrap"></b-img>
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
                    title: "冚街橙  | Those oranges you cannot eat ",
                    previewText: "An assemblage I did during C3A Residency @ Cordoba, Spain, back in 2019 Spring",
                    medium:"electronics, found objects",
                    year:"2019",
                    category:"sound | electronics | installation | assemblage | pick up | artist residency"
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
    .image-wrap {
        padding-top: 3px;
        padding-bottom: 3px;
    }

</style>