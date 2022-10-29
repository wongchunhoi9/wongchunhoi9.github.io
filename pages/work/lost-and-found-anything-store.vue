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
                    <b-img  src="/images/works/all object falling.jpeg" fluid > </b-img>
                    <figcaption class="figure-caption"> digitized 3D models from lost objects </figcaption>
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
                    <h1><a href="https://lostandfoundanythingstore.com/en" target="_blank">https://lostandfoundanythingstore.com/en</a></h1>
                   <!--here to write-->
                  
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
                    title: "Lost and Found Anything Store 失物萬事屋",
                    previewText: " Lost and Found Anything Store is a long term project. The artist take the initiative to uncover and focus on the abandoned lost objects in certain sites, which will be transformed into digital 3D models and re-imagined in a half-realistic, half-inferential free-association. In the midst of the unpredictable objects, a small history is written with these young relics",
                    medium:"physical and digital",
                    year:"2020 onwards",
                    category:"installation | digital 3D models"
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