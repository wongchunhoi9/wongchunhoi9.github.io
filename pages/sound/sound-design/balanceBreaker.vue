<template>
    <div class="">
       
        <b-container  class="sound-design-project-page">
            <h3 class="album-session-intro"> {{(WorkInfo[0].title)}}</h3>
           
            <b-row>
                <b-col>     
                    <!-- Feature Image : -->
                    <a href="https://store.steampowered.com/app/1069750/Balance_Breakers/" target="blamk">
                        <b-img  src="~/assets/images/sound/Boss_Compress-compress.gif" fluid-grow > </b-img>
                    </a>
                      
                    <figcaption class="figure-caption"> <a href="https://store.steampowered.com/app/1069750/Balance_Breakers/" target="blamk"> Game </a> screen shot </figcaption>
                </b-col>
                
            </b-row>
            <b-row>
                
                <b-col md='8' order="1" order-md="2"> 
                    <p>
                        {{(WorkInfo[0].previewText)}} 
                        Game Developer : <a href="https://gamestrylab.com/" target="_blank"> Gamestry Lab</a>
                         <br>
                        get the game on<a href="https://store.steampowered.com/app/1069750/Balance_Breakers/" target="blamk"> STEAM </a>
                        <b-embed
                        type="iframe"
                            aspect="16by9"
                            src="https://www.youtube.com/embed/iaNM-51tCXg"
                            allowfullscreen
                        ></b-embed>
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
                   
                   <h4> featured animation:</h4>
                    <b-embed
                        type="iframe"
                            aspect="16by9"
                            src="https://www.youtube.com/embed/QyHO2iHc3os"
                            allowfullscreen
                        ></b-embed>
                  <p> <a href="https://www.animation-ssp.com/zh/project/balance-breakers/" target="_blank" rel="noopener noreferrer">Gold Award | Small Animation Enterprises - Tier 2 - The 7th Animation Support Programme</a></p>
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
                   id: 'sound-design/balanceBreaker',
                    title: "Balance Breaker",
                    thumbnail:
                        "Boss_Compress-compress.gif",
                    soundTask:"Sound design Wong Chun Hoi ",
                    collaborateArtist:"Game developed by Gamestry Lab",
                    year:"2019",
                    medium:"computer Game",
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