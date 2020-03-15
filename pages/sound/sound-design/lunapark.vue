<template>
    <div class="">
       
        <b-container  class="sound-design-project-page">
            <h3 class="album-session-intro"> {{(WorkInfo[0].title)}}</h3>
           
            <b-row>
                <b-col>     
                    <!-- Feature video : -->
                     <b-img src="~/assets/images/sound/lunapark/lunapark1.jpg" fluid ></b-img>
                      
                    <figcaption class="figure-caption"> </figcaption>
                </b-col>
                
            </b-row>
            <b-row>
                
                <b-col md='8' order="1" order-md="2"> 
                    <p>
                        {{(WorkInfo[0].previewText)}} 
                        
                        <p><strong>Kingsley Ng</strong>
                        <br><em><strong>Luna Park</strong></em>
                        <br>2014
                        <br>Multi-channel video and sound installation
                        <br>Variable dimensions
                        </p>
                        <p>collaborators:
                        <br>Sound Design : Wong Chun Hoi
                        <br>Music: Julia Mok
                        <br>Taste Design: Agnes Lee
                        <br>Text: Stephanie Cheung / Kingsley Ng
                        <br>Technical Design: Jason Wong
                        <br>Software Design: Cheuk Wing Nam
                        <br>Project Assistant: Yu Wing Kei RiK
                        <br>Cast: Pansy Lo, Yu Wing Kei RiK
                        </p>
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
                   <b-img src="~/assets/images/sound/lunapark/lunapar-exhibitionleaflet.jpg" fluid thumbnail></b-img>
                   <b-img thumbnail src="~/assets/images/sound/lunapark/lunapark1.jpg" fluid></b-img>
                   <b-img thumbnail src="~/assets/images/sound/lunapark/lunapark2.jpg" fluid></b-img>
                   <b-img thumbnail src="~/assets/images/sound/lunapark/lunapark3.jpg" fluid></b-img>
                   <b-img thumbnail src="~/assets/images/sound/lunapark/lunapark4.jpg" fluid></b-img>
                   <b-img thumbnail src="~/assets/images/sound/lunapark/lunapark5.jpg" fluid></b-img>


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
                   id: 'sound-design/lunapark',
                    title: "Luna Park",
                    thumbnail:
                        "lunapark-thumbnail.jpg",
                    soundTask:"Sound Design",
                    collaborateArtist:"Artwork by Kingsley Ng",
                    year:"2014",
                    medium:"Multi-channel video and sound installation",
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