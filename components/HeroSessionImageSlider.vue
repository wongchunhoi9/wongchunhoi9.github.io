<template>
<div>
    <!-- <ul>
        
        {{ImageSlider[0].title}}

    </ul> -->
    <!-- {{ImageSlider}} -->
     <b-carousel
                    id="carousel-no-animation"
                    style="text-shadow: 1px 1px 4px #000;"
                     
                    no-animation
                    indicators
                    
                    img-width="700"
                    img-height="350"
                    controls
                    
                >
                    
                    <HeroSessionImageSliderSingle 
                    
                    v-for="Image in ImageSlider"
                    :key="Image.id"
                    :id="Image.id"
                    :imageSource="Image.imageSource"
                    :title="Image.title"
                    :subtitle="Image.subtitle" />/>

                      <!-- <b-carousel-slide
                      caption="{{}}"
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
                      ></b-carousel-slide> -->
                    
    </b-carousel>
</div>
</template>

<script>
import HeroSessionImageSliderSingle from '~/components/HeroSessionImageSliderSingle'
export default {
    components:{
        HeroSessionImageSliderSingle
    },
    props: {
    
        ImageSlider: {
            type:Array,
            required: true
        }
    }

}
</script>

<style scoped>
/* .carousel-caption {
    color:black !important;
} */
</style>