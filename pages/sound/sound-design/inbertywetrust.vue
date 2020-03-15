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
                        src="https://player.vimeo.com/video/80347712"
                        allowfullscreen
                    ></b-embed>
                      
                    <figcaption class="figure-caption"> </figcaption>
                </b-col>
                
            </b-row>
            <b-row>
                
                <b-col md='8' order="1" order-md="2"> 
                    <p>
                        {{(WorkInfo[0].previewText)}} 
                         <a href="https://en.wikipedia.org/wiki/Angela_Su" target="_blank" rel="noopener noreferrer"> Angelu Su</a>
                       
                        <br />  <a href="http://angela-su.blogspot.com/p/in-berty-we-trust_11.html" target="_blank" rel="noopener noreferrer">IN BERTY WE TRUST</a> !<br /> 2013<br /> 2-channel video animation<br /> stereo<br /> 15 min
                    </p>

                    <hr>
                    <a href="https://collections.mplus.org.hk/en/objects/in-berty-we-trust-2015575" target="_blank" rel="noopener noreferrer">M+ Collection</a>
                    <br>

                   
                    
                    

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
           

        </b-container>
           
            
            
    </div>
</template>

<script>
export default {
    data() {
        return {
            WorkInfo: [
                {
                   id: 'sound-design/inbertywetrust',
                    title: "In Berty We Trust!",
                    thumbnail:
                        "inbertywetrust-thumbnail.jpg",
                    soundTask:"Sound Designer & Technical Supoort",
                    collaborateArtist:"Concept and Visual: Angela Su || Animator: Flyingpig Wong",
                    year:"2013",
                    medium:"3-channel Video Installation",
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