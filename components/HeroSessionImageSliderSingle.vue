<template>
  
    <b-carousel-slide
                     
                      :text="ImageCaption"
                      :caption="ImageTitle"
                      :img-src="postImage"
                      ></b-carousel-slide>
  
                      
</template>

<script>
export default {
  
    name: 'HeroSessionImageSliderSingle',
    props: {
        id: {
            type: String,
            required: true
        },
        
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type:String,
            required: true
        },
        imageSource: {
            type: String,
            required: true
        }

    },
    computed: {
      postLink () {
        return this.id
      },
      postImage () { 
        // const fileName = this.imageSource.toLowerCase()
        // console.log(this.imageSource)
            //  return require('~/assets/images/' + this.imageSource + '.jpg');
        return require('~/assets/images/' + this.imageSource);
        // return require('~/assets/images/' +${fileName} + '.jpg');
      },
      ImageTitle() { 
        return this.title
      },
      ImageCaption(){
          return this.subtitle
      }
      
    }
}
</script>

<style scoped>
.carousel-caption {
    color:black !important;
}
</style>