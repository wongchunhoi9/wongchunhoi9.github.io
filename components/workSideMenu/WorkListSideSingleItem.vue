<template>
 

      <nuxt-link  :to="postLink" class="post-preview">
          <b-nav-item>{{title}}</b-nav-item>
            <!-- <article>
              <b-card
                :title="postPreviewTitle"
                style="max-width: 20rem;"
                :img-src="postImage">
                
                
                
                <b-card-sub-title>{{PreviewText}}</b-card-sub-title>
                <b-card-text>
                  discription here
                </b-card-text>
                
                <template v-slot:footer>
                      <small class="text-muted">tag</small>
                </template>
              </b-card>
              
               
                

                

                
                  
                
            </article> -->
            </nuxt-link>
             <!-- <div class="testingImage">
              <img :src="~/assets/images/webblogbackgroundimage.jpg"></div>
            </div>  -->

</template>

<script>
export default {
  
    name: 'WorkListSlideSingleItem',
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
        }

    },
    computed: {
      postLink () {
        return '/work/' + this.id
      },
     
      postPreviewTitle() { 
        return this.title
      }
      
    }
}
</script>

<style scoped>

</style>