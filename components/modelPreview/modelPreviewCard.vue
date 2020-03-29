<template>
 <div>

      <nuxt-link  :to="postLink" class="post-preview">
        <!-- <img :src="postImage" :alt="thumbnail"> -->
            <article>             
              <b-card
                
                style="max-width: 18rem; 
                      margin-bottom:10px; 
                      position:relative; 
                      display:flex; 
                      background-color: #FFFFFF00;;
                      border-width:0px;"
                :img-src="postImage"
                >
                <h4 class="work-preview-title">{{title}}</h4>
               
                <b-card-text style="color:#000">
                     <!-- {{year}} -->
                </b-card-text>
                      <b-card-text style="color:#003434;">
                  
                 <!-- {{PreviewText}} -->
                </b-card-text>
                
               
              </b-card>
                
            </article>

          
       </nuxt-link>
             
         


</div>
        

</template>

<script>
export default {
  
    name: 'modelPreviewCard',
    props: {
        id: {
            type: String,
            required: true
        },
        
        title: {
            type: String,
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
        }

    },
    computed: {
      postLink () {
        return '/models/' + this.id
      },
      postImage () { 
        const fileName = this.thumbnail.toLowerCase()
        // console.log(this.thumbnail)
          // return require('~/assets/images/' + this.thumbnail + '.jpg');
        return require('~/assets/images/model/' + this.thumbnail);
        // return require('~/assets/images/' +${fileName} + '.jpg');
      },
      postPreviewTitle() { 
        return this.title
      }
      
    }
}
</script>

<style scoped>
.work-preview-title { 
  color: black;
  text-align: center;
}



</style>