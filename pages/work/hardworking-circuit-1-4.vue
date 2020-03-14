<template>
    <div class="individual-work-page-container">
       
        <b-container fluid class="work-session-backgroundcolor" style="max-width: 1300px;">
            
            <b-row>
                                    <!-- Work Title -->
                                    <b-col> <h3> {{(WorkInfo[0].title)}}</h3> </b-col>
            </b-row>

            <!-- Sub Menu -->
            <b-row>
                <b-col>
                     <div>
                        <b-nav fill>
                            <b-nav-item to="/work/hardworking-circuit-1-4/overview" > overview / artist statement </b-nav-item>
                            <b-nav-item to="/work/hardworking-circuit-1-4/installationSet">Installation set up</b-nav-item>
                            <b-nav-item to="/work/hardworking-circuit-1-4/components">detail Components</b-nav-item>
                            <b-nav-item to="/work/hardworking-circuit-1-4/sketches"> sketches / drawing</b-nav-item>
                            <b-nav-item to="/work/hardworking-circuit-1-4/makingOf"> Making Of</b-nav-item>
                        </b-nav>

                    </div>

                </b-col>
            </b-row>


            <div>
                <NuxtChild  />

            </div>
            
             <b-row>
                <b-col>
                     <div>
                        <b-nav fill>
                            <b-nav-item to="/work/hardworking-circuit-1-4/overview" > overview / artist statement </b-nav-item>
                            <b-nav-item to="/work/hardworking-circuit-1-4/installationSet">Installation set up</b-nav-item>
                            <b-nav-item to="/work/hardworking-circuit-1-4/components">detail Components</b-nav-item>
                            <b-nav-item to="/work/hardworking-circuit-1-4/sketches"> sketches / drawing</b-nav-item>
                            <b-nav-item to="/work/hardworking-circuit-1-4/makingOf"> Making Of</b-nav-item>
                        </b-nav>

                    </div>

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
                    id: 'hardworking-circuit-1-4',
                    title: "hardworking circuit #1.4  A switched-on projector 勤力電路＃1.4 - 開著了的投影機 [work-in-progress] (2018)" ,
                    previewText: "",
                    thumbnail:
                        "hardworking-circuit-1-4-conceptsketch.svg",
                    medium:"electronics",
                    year:"2018",
                    category:"installation | electronics | stupid  | toy"
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
.nav-item a.nuxt-link-active {
  color:#c87c42;
  font-weight: bolder;
  text-decoration:underline;
}
</style>

