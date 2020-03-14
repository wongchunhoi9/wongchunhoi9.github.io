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
                        src="https://player.vimeo.com/video/135653007"
                        allowfullscreen
                    ></b-embed>
                                        
                    
                </b-col>
                
            </b-row>
            <b-row>
                
                <b-col md='8' order="1" order-md="2"> 
                    <p>
                        {{(WorkInfo[0].previewText)}} 
                        
                        3rd animation short from <a href="https://vimeo.com/morphws" target="blank">morph workshop</a>, about a little girl enjoyed the moments of company of a little dancer, yet childhood dreams are always fragile.
                        <br>
                        We took about 5 months to make this animation, and the workloads are shared by 2 animators. Enjoy!
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
                id: 'sound-design/dancingeye',
                title: "靈動之窗 – dancing eye",
                thumbnail:
                    "dancingeye-thumbnail.jpg",
                soundTask:"Sound made by: Wong Chun Hoi ,Hody Law Sin Yan",
                collaborateArtist:"Animation by Morph Workshop: Aplise Lee, Anna Li",
                year:"2016",
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