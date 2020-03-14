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
                        src="https://player.vimeo.com/video/114866216"
                        allowfullscreen
                    ></b-embed>
                      
                    <figcaption class="figure-caption"> </figcaption>
                </b-col>
                
            </b-row>
            <b-row>
                
                <b-col md='8' order="1" order-md="2"> 
                    <p>
                        {{(WorkInfo[0].previewText)}} 
                        檐蛇悄悄融入了人們的生活。捕捉小昆蟲除了填飽肚子，還有其耐人尋味的原因。<br>
                        House geckos have quietly blended into human’s life. Their preying on tiny insects, other than to feed themselves, is motivated by an intriguing reason.
                    </p>
                    <p>
                         A Work of Morph Workshop<br>
                        Written by: Anna Li, Eric Lee<br>
                        Directed by: Eric Lee<br>
                        Original Sound Track: Wong Chun Hoi
                    </p>
                        
                       
                    <p>
                        A Production of RTHK 2014 commissioning program.<br>
                        Commissioning Editor: Silas Lee, Alan Lee<br>
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
                    id: 'sound-design/myhiddenwatcher',
                    title: "守宮物語 – My Hidden Watcher",
                    thumbnail:
                        "thehiddenwatcher-thumbnail.jpg",
                    soundTask:"Sound Designer: Wong Chun Hoi",
                    collaborateArtist:"Animation by Morph Workshop",
                    year:"2014",
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