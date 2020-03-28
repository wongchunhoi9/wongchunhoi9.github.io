<template>
    <div class="individual-work-page-container">
       
        <b-container  class="work-session-backgroundcolor">
            <b-row>
                <!-- Work Title -->
                <b-col> <h3> {{(WorkInfo[0].title)}}</h3> </b-col>
            </b-row>
            <b-row>
                <b-col>     
                    <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/159469380" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>
                    <p><a href="https://vimeo.com/159469380">extremely useful system #1 &ndash; firewood ｜終極有用系統 #1 &ndash; 柴火</a> from <a href="https://vimeo.com/user4910473">wongchunhoi9</a> on <a href="https://vimeo.com">Vimeo</a>. | <a href="https://youtu.be/dBJ0lXuQjzM" target="_blank" rel="noopener noreferrer">youtube version</a></p>
                    
                </b-col>
                
            </b-row>
            <b-row>
                
                <b-col md='9' order="1" order-md="2"> 
                    <p>
                        {{(WorkInfo[0].previewText)}} 
                    </p>
                    <p>
                        Extremely useful system intended to make good use of electronics to achieve zero functionality and with least economic return.
                    </p>
                    <p>
                        in Extremely useful system #1－ firewood, the electric energy consumed by a series of servo motors (A ready-made robotic arm) spinned a piece of wood stick. The spinning wood stick was touching the fire board at its maximum speed in order to try to light up fire by creating friction.
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
                   
                   <!--here to write-->
                    <b-img  src="~/assets/images/work/extremelyusefulsystem1/DSC06011_editing.jpg" fluid-grow> </b-img>
                   <b-img  src="~/assets/images/work/extremelyusefulsystem1/extremelyusefulsystem_01_3.jpg" fluid-grow> </b-img>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <h5>making of</h5>
                   <b-embed
                    type="iframe"
                    src="https://www.youtube.com/embed/videoseries?list=PLCEj7r8U6CrPbXCZrWqS2VQcFxTShgqk6"
                    allowfullscreen
                    aspect="16by9">

                    </b-embed>
                    <br>
                   <b-img  src="~/assets/images/work/extremelyusefulsystem1/DSC05513_upload.jpg" fluid-grow> </b-img>
                   <b-img  src="~/assets/images/work/extremelyusefulsystem1/extremelyusefulsystem_01_1_conceptsketch.svg" fluid> </b-img>
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
                    id: 'extremely-useful-system-1-firewood',
                    title: "extremely useful system #1 – firewood ｜終極有用系統 #1 – 柴火",
                    previewText: "",
                    
                    medium:"electronics | servo motos, micro controller, wood, magnetic glass",
                    year:"2016",
                    category: "electronics | installation | burn "
        
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