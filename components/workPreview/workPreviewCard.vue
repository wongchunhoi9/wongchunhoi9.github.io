<template>
 

      <nuxt-link  :to="postLink" class="post-preview">
        <!-- <img :src="postImage" :alt="thumbnail"> -->
            <article>
              <b-card
                :title="postPreviewTitle"
                style="max-width: 20rem;"
                :img-src="postImage">
                <!-- <b-card-img 
                :src="postImage" 
                :top="true" > </b-card-img> -->
              
                <!-- <img :src= "postImage"> -->
                
                
                <b-card-sub-title>{{PreviewText}}</b-card-sub-title>
                <b-card-text>
                  discription here
                </b-card-text>
                
                <template v-slot:footer>
                      <small class="text-muted">tag</small>
                </template>
              </b-card>
              
               
                

                

                
                  
                
            </article>
            </nuxt-link>
             <!-- <div class="testingImage">
              <img :src="~/assets/images/webblogbackgroundimage.jpg"></div>
            </div>  -->

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
        }

    },
    computed: {
      postLink () {
        return '/work/' + this.id
      },
      postImage () { 
        const fileName = this.thumbnail.toLowerCase()
        console.log(this.thumbnail)
        return require('~/assets/images/' + this.thumbnail + '.jpg');
        // return require('~/assets/images/' +${fileName} + '.jpg');
      },
      postPreviewTitle() { 
        return this.title
      }
      
    }
}
</script>

<style scoped>

 /* .post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  
  width:100px;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
} */
</style>