<template>
    <div class="">
       
        <b-container  class="sound-design-project-page">
            <h3 class="album-session-intro"> {{(WorkInfo[0].title)}}</h3>
           
            <b-row>
                <b-col>     
                    <!-- Feature video : -->
                      <b-embed
                        type="iframe"
                        aspect="21by9"
                        src="https://player.vimeo.com/video/70850890"
                        allowfullscreen
                    ></b-embed>
                      
                    <figcaption class="figure-caption"> </figcaption>
                </b-col>
                
            </b-row>
            <b-row>
                
                <b-col md='8' order="1" order-md="2"> 
                    <p>
                        {{(WorkInfo[0].previewText)}} 
                        Yeti is an middle-aged furry big foot who's at his turning point of life.
Yeti decided to make a change though.
                    </p>
                    <p>
                        <a href="https://vimeo.com/treehse" target="_blank" rel="noopener noreferrer">Treehouse Studio</a>
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
                   id: 'sound-design/yeti',
                    title: "Yeti",
                    thumbnail:
                        "yeti-thumbnail.jpg",
                    soundTask:"Original music and sound design: Wong Chun Hoi",
                    collaborateArtist:"Animation by Joe Kwun, Treehouse Studio",
                    year:"2013",
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