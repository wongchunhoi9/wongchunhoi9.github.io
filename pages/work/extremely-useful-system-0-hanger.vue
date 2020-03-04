<template>
    <div class="individual-work-page-container">
       
        <b-container  class="work-session-backgroundcolor">
            <b-row>
                <!-- Work Title -->
                <b-col> <h3> {{(WorkInfo[0].title)}}</h3> </b-col>
            </b-row>
            <b-row>
                <b-col md="6">     
                    <!-- Feature Image : -->
                    <div style="padding:177.78% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/159373022" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                    <p><a href="https://vimeo.com/159373022">extremely useful system #0 &ndash; hanger | 終極有用系統 #0 &ndash; 衣架</a> from <a href="https://vimeo.com/user4910473">wongchunhoi9</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
                    
                </b-col>
                <b-col md="6">     
                    
                    <b-img src="~/assets/images/work/extremelyusefulsystem0/IMG_20160828_0006nobackground.png" fluid /> 
                    <figcaption> Sketch</figcaption>
                    
                    
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
                        <hr>
                        <p>Micro processor, IR sensor, Stepper motor, hanger, gloves</p>
                    </p>
                </b-col>
            </b-row>

            <!-- WORK CONTENT -->
            <b-row>
                <b-col>
                   <h5> images</h5>
                    <!--here to write-->
                </b-col>
            </b-row>

            <b-row>
                <b-col md="6">
                 
                   <b-img   src="~/assets/images/work/extremelyusefulsystem0/extremelyusefulsystem_00_gloves_01.jpg" fluid></b-img>
                </b-col>
                <b-col md="6">
                   <b-img   src="~/assets/images/work/extremelyusefulsystem0/extremelyusefulsystem_00_gloves_02.jpg" fluid></b-img>
                </b-col>
            </b-row>
            <b-row>
                <b-col md="6">
                 
                   <b-img   src="~/assets/images/work/extremelyusefulsystem0/extremelyusefulsystem_00_gloves_03.jpg" fluid></b-img>
                </b-col>
                <b-col md="6">
                   <b-img   src="~/assets/images/work/extremelyusefulsystem0/extremelyusefulsystem_00_gloves_04.jpg" fluid></b-img>
                </b-col>
            </b-row>

            <b-row>
                <b-col>
                 
                   <b-img   src="~/assets/images/work/extremelyusefulsystem0/extremelyusefulsystem_00_sketchingthumbnail.svg" fluid-grow></b-img>
                </b-col>
                <b-col>
                   <b-img   src="~/assets/images/Extremelyusefulsystem0_sketch.svg" fluid></b-img>
                </b-col>
            </b-row>

             <b-row>
                <b-col md="6">
                    <h5>making of</h5>
                   <div style="padding:177.78% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/145536752" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

                </b-col>
                <b-col>
                   <div style="padding:177.78% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/145536756" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                </b-col md="6">
            </b-row>

             <b-row>
                <b-col>
                <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/145536753" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                 

                </b-col>
                
            </b-row>
            <b-row>
                <b-col md="6">
                <div style="padding:177.78% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/145536754" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
<p><a href="https://vimeo.com/145536754">#0 + #1</a> from <a href="https://vimeo.com/user4910473">wongchunhoi9</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
                 

                </b-col>
                <b-col md="6">
                    <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/152048545" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
<p><a href="https://vimeo.com/152048545">extremely useful system #0 @hardworking burning electricity (part1)</a> from <a href="https://vimeo.com/user4910473">wongchunhoi9</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
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
                   
                    title: "extremely useful system #0 – hanger | 終極有用系統 #0 – 衣架",
                    previewText: "Extremely useful system intended to make good use of electronics to achieve zero functionality and with least economic return. in Extremely useful system #0  hanger. Stepper motors are driven by micro-controller with a wood stick and bended hanger wire embedded on the axis of the stepper motors. A glove is one the top of hanger to imitate the motion of “the Sign of the horns”in band show , but a mechanical one.",
                    thumbnail:
                        "Extremelyusefulsystem0_sketch.svg",
                    medium:"electronics, Micro processor, IR sensor, Stepper motor, hanger, gloves",
                    year:"2016-01",
                    category: "electronics | installatiom"
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
@media screen and (max-width: 1000px) {
  .image-wrapper { 
    /* max-width: 500px; */
}
}



</style>