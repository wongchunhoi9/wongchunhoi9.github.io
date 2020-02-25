<template>
    
        <div class="site-footer" :style="{ backgroundImage: `url(${FooterBackgroundURL})` }">
        <b-container fluid>
            <b-row class="text-center">
                 <b-col > <a href="https://vimeo.com/user4910473">vimeo</a>
                         <br>
                         <a href="https://soundcloud.com/wongchunhoi9">soundcloud</a> 
                         <br>
                         <a href="https://sketchfab.com/wongchunhoi9">sketchfab</a>
                         <br>
                         
                 </b-col>
                 
                 <b-col  cols="7" > <p>🄯 2020 wongchunhoi9.com</p>
                        <p>
                            
                             </p>
                    
                     </b-col>
               
                <!-- <b-col > <br>
                </b-col> -->
            </b-row>
        </b-container>
        
    </div>
    

</template>

<script>
import FooterBackgroundURL from "~/assets/images/footer/footerBackground.svg"
export default {
    data () {
        return {FooterBackgroundURL}
    }
    
}
</script>

<style  scoped>
.site-footer {
width:100%;
  margin: auto;
  background: rgba(201, 205, 206, 0.404);
  
  padding: 10px;
  font-size: 11px;
  background-repeat: no-repeat;
  background-size:fill;
  background-position-y: relative;
  
}
</style>