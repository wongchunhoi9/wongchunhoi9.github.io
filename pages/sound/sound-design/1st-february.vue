<template>
    <div class="">
       
        <b-container  class="sound-design-project-page">
            <h3 class="album-session-intro"> {{(WorkInfo[0].title)}}</h3>
           
            <b-row>
                <b-col>     
                    <!-- Feature video : -->
                     <b-embed
                        type="iframe"
                        aspect="16by9"
                        src="https://player.vimeo.com/video/52170717"
                        allowfullscreen
                    ></b-embed>
                      
                    <figcaption class="figure-caption"> </figcaption>
                </b-col>
                
            </b-row>
            <b-row>
                
                <b-col md='8' order="1" order-md="2"> 
                    <p>
                        {{(WorkInfo[0].previewText)}} 
                        This is the graduation work when I was studying at the School of Creative Media at City University of Hong Kong. The three minutes full hand-drawn animation. I imagined that I turned as that floating body, and associated with the relationship with my mother. When I moved to the student dormitory by that time, as a result the time spent with my mother decreased. Sometimes she was sad, sometimes was angry, and I was under pressure as well. I thought that the relationship between a mother and a child was inseparable long before the birth of the child - an invisible bondage. This animation is describing my state by that time.
                    </p>
                    <p>
                        <a href="http://www.flyingpig.work/" target="_blank" rel="noopener noreferrer"> FlyingPig</a>
                        
                    </p>
                    


                </b-col>

                <b-col md="4"> 
                    <p> {{(WorkInfo[0].medium)}} 
                        <br>
                        {{(WorkInfo[0].year)}}
                        <br>
                        {{WorkInfo[0].soundTask}}
                        <br>
                        {{WorkInfo[0].collaborateArtist}}
                    </p>                        
                   
                   
                </b-col>
            </b-row>

            <!-- WORK CONTENT -->
            <b-row>
                <b-col>
                   
                 
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
                    id: 'sound-design/1st-february',
                    title: "1st February",
                    thumbnail:
                        "1stfeb-thumbnail.jpg",
                    soundTask:"Sound design and Music :Wong Chun Hoi",
                    collaborateArtist:"Directed and Animated by FlyingPig Wong Wing Shan",
                    year:"2012",
                    medium:"Animation",
                    previewText: " ",
                }
            ]
        }
    },
    head() {
        return{
            title: "Sound-design :" + this.WorkInfo[0].title,
            meta: [
                { hid: 'description', name:  this.WorkInfo[0].title , content: this.WorkInfo[0].previewText },
                { hid: 'keywords', name: this.WorkInfo[0].medium , content: this.WorkInfo[0].category }
      
            ]
        }
    }
}
</script>

<style scoped>


</style>