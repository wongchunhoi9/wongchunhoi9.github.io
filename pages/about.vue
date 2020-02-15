<template>
    <div class="About-Page-container">
        <b-container class="profile-session">
            <b-row >
                <b-col md="4" >
                    <b-img src="~/assets/images/About/profile-picture-wong-chun-hoi-2.jpg" fluid-grow> </b-img>
                </b-col>
                
                <b-col  md="8">
                Artist | artistic engineer @ floating projects | sound designer/engineer

                About
                half-bucket-water electronics user and person who like to use ears.

                Biography

                生於1990， 畢業於城市大學創意媒體學院，主修批判性跨媒體實驗室。創作道路尚在摸索中，暫以悲憤作為創作源動力。作品主要涉及聲音和電子零件。視坦白為創作原則，本業處理一切聲音的工作。兼職自由身另類技術支援予藝術家，為「據點・句點」藝工程師，期望跟其他藝術創作相輔相成。互相學習。

                Wong Chun Hoi (b.1990) was graduated from the School of Creative Media in City University of Hong Kong in 2012, majored in Critical Intermedia Laboratory. He treats Anger as the temporary initiation of making art. His works mainly involves sound and electronics. being honest and sincere is his basic creative principle.
                Always working as a sound designer and engineer, also providing alternative technical support to vary artist.  Currently working as the artistic engineer in floating projects. He believes that making complement to other art making is an important way to learn art.
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

import fmcv from '~/contents/wongchunhoi_CV.md'
import fmbb from '~/contents/wongchunhoi_bibliography.md'


export default {
    components: {
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
    background-color:rgb(221, 224, 225);
    height: 100%;
    /* max-width: 1100px; */
    padding: 3px;
    margin: 5px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;

}
.profile-session .row > [class^="col-"] { 
    background-color: rgb(120, 152, 141);
    border-block-color: rgb(17, 26, 29);
    border-style: solid;
    border-width: 1px;
    padding-block: 5px;

}
.profile-session .row .col {
    background-color: rgb(120, 152, 141);
    border-block-color: rgb(17, 26, 29);
    border-style: solid;
    border-width: 1px;
    padding-block: 5px;
    margin-bottom: 2px;
    margin-top: 2px;
}
</style>