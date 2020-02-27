<template>
 

      <nuxt-link  :to="postLink">
          <b-col class="album-preview-grid">
              
                <h6 class="album-title"> {{title}}</h6>    
                <b-img :src="postImage" fluid-grow class="album-image-preview"></b-img>
                <p>
                    {{albumArtist}}
                    <br>
                    {{year}}  {{medium}}
                    <br>
                    {{category}}
                    <br>
                    {{PreviewText}}
                </p>
              
              
          </b-col>
       </nuxt-link>

      
             
         



        

</template>

<script>
export default {
  
    name: 'albumGridSingle',
    props: {
        id: {
            type: String,
            required: true
        },
        
        title: {
            type: String,
            required: true
        },
        PreviewText: {
            type:String,
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        },
         medium: {
            type: String,
            required: true
        },
        year: {
            type:String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        albumArtist:{
            type: String,
            required: true
        }

    },
    computed: {
      postLink () {
        return '/sound/' + this.id
      },
      postImage () { 
        const fileName = this.thumbnail.toLowerCase()
        // console.log(this.thumbnail)
          // return require('~/assets/images/' + this.thumbnail + '.jpg');
        return require('~/assets/images/sound/' + this.thumbnail);
        // return require('~/assets/images/' +${fileName} + '.jpg');
      },
      postPreviewTitle() { 
        return this.title
      }
      
    }
}
</script>

<style scoped>
.album-preview-grid {
    border-style: dotted;
    border-width: 0.1px;
    border-color: rgb(34, 34, 34);
    background-color: rgba(202, 208, 215, 0.74);
    
    
    
}
.album-title{
    padding-top: 5px;
    font-size: 3vmin;
}
@media only screen and (max-width: 900px) {

.album-title{
    padding-top: 5px;
    font-size: 18px;
}

}
.album-image-preview {
    border-style: solid;
    /* padding-left: 3px;
    padding-right: 3px; */
    border-width: 3px;
    border-color: white;
    margin:1px;
    background-color: rgba(238, 223, 212, 0.548);
}


</style>