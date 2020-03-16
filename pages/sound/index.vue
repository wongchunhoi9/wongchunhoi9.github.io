<template>
    <div>
        
        <b-container  class="album-container">
          <b-row><b-col> <h3 class="album-session-intro"> Album </h3>  </b-col></b-row>
           
              <albumGrid :posts="albumList"/>
                
        </b-container>
        <br>
        <b-container  class="album-container">
          <b-row><b-col> <h3 class="album-session-intro"> Sound Design </h3>  </b-col></b-row>
           
              <albumGrid :posts="albumList"/>
                
        </b-container>
   
    </div>
</template>

<script>
import albumGrid from "@/components/soundPreview/albumGrid";

export default {
  components: {
        albumGrid
    }, 
    
    data () { 
        return {
             

             albumList: [
      
      ]
        }
    }
    
}
</script>
<style scoped>

.album-container {
      background-image: linear-gradient(to right top, #90abb8, #6daba8, #72a67d, #99984e, #c87c42);
      justify-content: center;
      height: 100%;
      /* max-width: 1200px; */    
}

.album-session-intro {
  color: azure;
  
  margin: 5px;
}
</style>