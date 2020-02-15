<template>
<div>
    <!-- <ul>
        
        {{ImageSlider[0].title}}

    </ul> -->
    <!-- {{ImageSlider}} -->
     <b-carousel
                    id="carousel-no-animation"
                    style="#000"
                    no-animation
                    indicators
                    img-width="1024"
                    img-height="480"
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