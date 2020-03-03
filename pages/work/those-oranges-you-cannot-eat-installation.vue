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
                    <b-img  src="~/assets/images/work/thoseOrangeInstallation/1K4A2961X.jpg" fluid > </b-img>
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
                    <p> tag:
                        <br>
                        {{(WorkInfo[0].category)}}
                    </p>
                </b-col>
            </b-row>

            <!-- WORK CONTENT -->
            <b-row>
                <b-col>
                   <h4> Video Documentation - Exhibition View </h4>
                   <b-embed
                        type="iframe"
                        aspect="16by9"
                        src="https://www.youtube.com/embed/aKBhCTduh_4"
                        allowfullscreen
                    ></b-embed>
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
                    title: "冚街橙  | Those oranges you cannot eat ",
                    previewText: "An assemblage I did during C3A Residency @ Cordoba, Spain",
                    medium:"electronics, found objects",
                    year:"2019",
                    category:"sound | electronics | installation | assemblage"
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>