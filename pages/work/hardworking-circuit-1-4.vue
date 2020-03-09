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
                    <b-img  src="" fluid > </b-img>
                    <figcaption class="figure-caption"> A Caption </figcaption>
                </b-col>
                
            </b-row>
            <b-row>
                
                <b-col md='9' order="1" order-md="2"> 
                    <p>
                        {{(WorkInfo[0].previewText)}} 
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
                    <h4>Idea Sketch</h4>
                    <b-img src="~/assets/images/hardworking-circuit-1-4-conceptsketch.svg" fluid></b-img>
                    <b-img src="~/assets/images/work/hardworkingcircuit14/hardworking_circuit_1_4_case1.svg" fluid></b-img>
                    <b-img src="~/assets/images/work/hardworkingcircuit14/hardworking_circuit_1_4_case2_motor.svg" fluid></b-img>
                    <b-img src="~/assets/images/work/hardworkingcircuit14/hwc14-part1-synnmotor-1.svg" fluid-grow></b-img>
                    <b-img src="~/assets/images/work/hardworkingcircuit14/hwc14-part1-synnmotor-2.svg" fluid-grow></b-img>
                    <b-img src="~/assets/images/work/hardworkingcircuit14/part 2-01.svg" fluid></b-img>

                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <h4>Making Of </h4>
                    <b-img thumbnail src="~/assets/images/work/hardworkingcircuit14/hardworking circuit 1 650x460 version4_15fps_loop.gif" fluid></b-img>
                   <b-embed
                        type="iframe"
                        aspect="16by9"
                        src="https://www.youtube.com/embed/nBv6Izqv3kA"
                        allowfullscreen    
                    ></b-embed>
                    <b-embed
                        type="iframe"
                        aspect="16by9"
                        src="https://www.youtube.com/embed/c15BY4rMkLI"
                        allowfullscreen    
                    ></b-embed>
                    <b-embed
                        type="iframe"
                        aspect="16by9"
                        src="https://www.youtube.com/embed/yOnaUXHsb3U"
                        allowfullscreen    
                    ></b-embed>
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
                    id: 'hardworking-circuit-1-4',
                    title: "hardworking circuit #1.4 勤力電路＃1.4  A switched-on projector [work-in-progress] (2018)" ,
                    previewText: "",
                    thumbnail:
                        "hardworking-circuit-1-4-conceptsketch.svg",
                    medium:"electronics",
                    year:"2018",
                    category:"installation | electronics | stupid  | toy"
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