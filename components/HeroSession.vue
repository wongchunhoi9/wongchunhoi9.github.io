<template>
     
   
     <div class="Hero-session-container">
       <div class="Hero-session-container-L">
         <h1>Recent Exhibition </h1>
         <p> to make it more poX</p>
       </div>
       <div class="Hero-session-container-R">
         <div class="ImageSlideShowContainer">
           <p> this is image </p>
             <!-- <b-img src="~/assets/images/webblogbackgroundimage.jpg" fluid alt="Responsive image"></b-img> -->
             <div>
                <b-carousel
                    id="carousel-no-animation"
                    style="#000"
                    no-animation
                    indicators
                    img-width="1024"
                    img-height="480"
                    controls
                >
                    <b-carousel-slide
                    caption="First slide"
                    text="First Slide TEXT"
                    img-src="~/assets/images/webblogbackgroundimage.jpg"
                    ></b-carousel-slide>
                    <b-carousel-slide
                    caption="Second Slide"
                    img-src="https://picsum.photos/1024/480/?image=12"
                    ></b-carousel-slide>
                    <b-carousel-slide
                    caption="Third Slide"
                    img-src="https://picsum.photos/1024/480/?image=22"
                    ></b-carousel-slide>
                    <b-carousel-slide
                    caption="Fourth Slide"
                    img-src="https://picsum.photos/1024/480/?image=23"
                    ></b-carousel-slide>
                </b-carousel>
                </div>
         </div>
         <div class="ImageSliderShowCaption">
           <p> This is Caption </p>
         </div>
       </div>

     </div>
     
     
   
   

  

</template>

<style scoped>


.Hero-session-container {
background-color: cadetblue;
height: 100%;
max-width: 1100px;
padding: 10px;
margin: 10px;

display: flex;
flex-wrap: wrap;
justify-content: center;
margin: auto;

}


.Hero-session-container-L { 
flex:35%;
padding: 20px;
background-color: beige;
max-width: 309px;
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