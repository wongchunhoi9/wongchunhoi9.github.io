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
                    <b-img  src="~/assets/images/work/hardworingcircuit1surplus/Scanned-Image-22.jpg" fluid > </b-img>
                    <figcaption class="figure-caption"> Scanned Image #22 </figcaption>
                </b-col>
                
            </b-row>
            <b-row>
                
                <b-col md='9' order="1" order-md="2"> 
                    <p>
                        I scanned a batch of flakes and surplus when I was in the production of hardworking circuit #1 series
                    </p>
                    <hr>
                    <p>
                        related work:
                        <ul>
                            <li><nuxt-link to="hardworking-circuit-1-0">hardworking circuit #1.0</nuxt-link></li>
                            <li><nuxt-link to="hardworking-circuit-1-1">hardworking circuit #1.1</nuxt-link></li>
                            <li><nuxt-link to="hardworking-circuit-1-2">hardworking circuit #1.2</nuxt-link></li>
                        </ul>
                    </p>
                    

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
                   <h5>Making of </h5>
                   <!--here to write-->
                   <b-img  src="~/assets/images/work/hardworingcircuit1surplus/DSC06110.jpg" fluid > </b-img>
                   <b-img  src="~/assets/images/hardworkingcircuitsurplus-thumbnail.svg" fluid-grow> </b-img>

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
                    title: "hardworking circuit #1 - surplus 勤力電路＃1 剩物 ",
                    previewText: "scan the flakes of the works",
                    thumbnail:
                        "hardworkingcircuitsurplus-thumbnail.svg",
                    medium:"digital image",
                    year:"2016",
                    category: "electronics | rubbish | scan | image | 2D"
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

</style>