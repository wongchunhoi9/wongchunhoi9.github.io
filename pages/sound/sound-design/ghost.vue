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
                        src="https://player.vimeo.com/video/223475234"
                        allowfullscreen
                    ></b-embed>
                                        
                    <p><a href="https://vimeo.com/223475234">GHOST</a> from  on <a href="https://vimeo.com">Vimeo</a>.</p>
                      
                    <figcaption class="figure-caption"> </figcaption>
                </b-col>
                
            </b-row>
            <b-row>
                
                <b-col md='8' order="1" order-md="2"> 
                    <p>
                        {{(WorkInfo[0].previewText)}} 
                        ghost is an animation short about daily routine of a man, who is sicked to be a part of the city. All he wants is to get back home.

                        This animation is made by 2 animators in 6 months, we want to express what we see in the city through the eye of a "abnormal" man, when all the social norms seemed gone wrong.
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
                        <br>
                        <a href="https://vimeo.com/morphws" target="blank">morph workshop</a>
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
                   id: 'sound-design/ghost',
                    title: "小鬼 – Ghost",
                    thumbnail:
                        "ghost-thumbnail.jpg",
                    soundTask:"Sound design Wong Chun Hoi ",
                    collaborateArtist:"Animation by Morph Workshop: Aplise Lee, Anna Li",
                    year:"2018",
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