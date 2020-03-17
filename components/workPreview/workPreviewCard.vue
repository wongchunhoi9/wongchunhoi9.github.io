<template>
 <div>

      <nuxt-link  :to="postLink" class="post-preview">
        <!-- <img :src="postImage" :alt="thumbnail"> -->
            <article>             
              <b-card
                
                style="max-width: 20rem; 
                      margin-bottom:10px; 
                      position:relative; 
                      display:flex; 
                      background-color: #FFFFFFA5;;
                      border-width:5px;"
                :img-src="postImage"
                >
                <h4 class="work-preview-title">{{title}}</h4>
                <b-card-sub-title aligh="right" style="color:#481600;"> 
                  
                      <!-- {{medium}}
                      <br>
                      {{year}} -->
                  
                 </b-card-sub-title>
                <b-card-text style="color:#000">
                   {{medium}}
                      <br>
                      {{year}}
                </b-card-text>
                      <b-card-text style="color:#003434;">
                  <br>
                 {{PreviewText}}
                </b-card-text>
                
                <b-card-footer style="color:#003434" >
                     <em> {{category}}</em>
                      <!-- <small class="text-muted">{{category}}</small> -->
                </b-card-footer>
              </b-card>
                
            </article>

          
       </nuxt-link>
             
         


</div>
        

</template>

<script>
export default {
  
    name: 'workPreviewCard',
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
        }

    },
    computed: {
      postLink () {
        return '/work/' + this.id
      },
      postImage () { 
        const fileName = this.thumbnail.toLowerCase()
        // console.log(this.thumbnail)
          // return require('~/assets/images/' + this.thumbnail + '.jpg');
        return require('~/assets/images/workpreviewcard/' + this.thumbnail);
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
}



</style>