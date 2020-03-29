<template>
    <div class="individual-work-page-container">
       
        <b-container  class="work-session-backgroundcolor">
            <b-row>
                <!-- Work Title -->
                <b-col> <h3> {{(WorkInfo[0].title)}}</h3> </b-col>
            </b-row>
            <b-row>
                <b-col>     
                    <!-- Feature Image : -->
                    <b-img  src="" fluid > </b-img>
                    <figcaption class="figure-caption"> A Caption </figcaption>
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
                    </p>
                </b-col>
            </b-row>

            <!-- WORK CONTENT -->
            <b-row>
                <b-col>
                   
                   <!--here to write-->
                   <temp-note/>
                  
                </b-col>
            </b-row>

        </b-container>
           
            
            
    </div>
</template>

<script>
import fm from '~/contents/work-in-progress/2020-03-29-randomSeedingGenerator.md'
export default {
    components: {
      'temp-note': fm.vue.component
    },

    data() {
        return {
            WorkInfo: [
                { 
                    title: "Random Seeding Generator 隨種生成器",
                    previewText: "Random number generator based on a video capture of double pendulum system driven by a motor in its threshold",
                    medium:"software thing ",
                    year:"work-in-progress",
                    category:"work-in-progress "
                }
            ],
            TempTitle: fm.attributes.title ,
            TempUpdateDate: fm.attributes.update ,
            TempExcerpt: fm.attributes.excerpt,


            
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


  
</script>