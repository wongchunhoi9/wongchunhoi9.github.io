<template>
     
   
     <div class="Hero-session-container">
       <div class="Hero-session-container-L">
         <h1>Recent Exhibition </h1>
         <p> to make it more poX</p>
       </div>
       <div class="Hero-session-container-R">
         <div class="ImageSlideShowContainer">
           <!-- <p> this is image {{ImageSlider}}</p> -->
             <!-- <b-img src="~/assets/images/webblogbackgroundimage.jpg" fluid alt="Responsive image"></b-img> -->
             <div>
              
               
                
                 
                
                </div>
         </div>
         <div class="ImageSliderShowCaption">
           <p> This is Caption </p>
         </div>
       </div>

     </div>
     
     
   
   

  

</template>

<script>
import HeroSessionImageSlider from "~/components/HeroSessionImageSlider"
export default {
  components:{
    HeroSessionImageSlider
  },
  props:{

    ImageSlider:{
      type:Array,
      required:false
    }
  }
  
}
</script>

<style scoped>


.Hero-session-container {
background-color: cadetblue;
height: 100%;
max-width: 900px;
padding: 20px;


display: flex;
flex-wrap: wrap;
justify-content: center;
margin: auto;

}


.Hero-session-container-L { 
flex:35%;
padding: 20px;
background-color: beige;

/* max-width: 309px; */
}

.Hero-session-container-L h1{ 
    font-weight: 100;
    font-size: 17px;
    color: #526488;
    
    
}

.Hero-session-container-R { 
flex:65%;
padding: 20px;
background-color: #526488;
}

@media screen and (max-width: 500px) {
  .Hero-session-container{   
    flex-direction: column;
  }
}
</style>