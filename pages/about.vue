<template>
    <div class="About-Page-container">
        <b-container class="profile-session">
            <b-row >
                <b-col md="4" >
                    <b-img src="~/assets/images/About/profile-picture-wong-chun-hoi-2.jpg" fluid-grow> </b-img>
                </b-col>
                
                <b-col  md="8">
                <Biography/>
                </b-col>

            </b-row>
            
            <b-row>
                <b-col>
                    
                    <Bibliography/>
                </b-col>
            </b-row>

             <b-row>
                <b-col>
                    <FullCV/>
                </b-col>
            </b-row>
            
            
        </b-container>
    </div>
</template>


<script>
import fmbio from '~/contents/wongchunhoi_bio.md'
import fmcv from '~/contents/wongchunhoi_CV.md'
import fmbb from '~/contents/wongchunhoi_bibliography.md'


export default {
    components: {
      'Biography':fmbio.vue.component,
      'FullCV': fmcv.vue.component,
      'Bibliography': fmbb.vue.component
    },
    // data () {
    //   return {
    //     title: fmcv.attributes.title
    //   }
    // }
  }

</script>

<style scoped>
.About-Page-container{
    background-color:rgb(238, 242, 242);
    height: 100%;
    /* max-width: 1100px; */
    padding: 3px;
    padding-top: 10px;
    margin: 5px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;

}
.profile-session .row > [class^="col-"] { 
    background-color: rgba(144, 171, 184, 0.219);
    border-block-color: rgb(17, 26, 29);
    border-style: solid;
    border-width: 1px;
    padding-block: 5px;

}
.profile-session .row .col {
    background-color: rgba(243, 149, 48, 0.139);
    border-block-color: rgb(17, 26, 29);
    border-style: solid;
    border-width: 1px;
    padding-block: 5px;
    margin-bottom: 2px;
    margin-top: 2px;
}
</style>