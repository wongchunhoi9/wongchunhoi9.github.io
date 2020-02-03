<template>
      <nuxt-link  :to="postLink" class="post-preview">
            <article style="padding: 10px">
                <!-- <div 
                class="post-thumbnail" 
                :style="{backgroundImage: 'url(' + thumbnail + ')'}"> </div>
                <div class="post-content"> 
                    <h1> {{title}}</h1>
                    <p> {{PreviewText}} </p>
                </div> -->
                
                  <b-card
                    no-body
                    
                    img-src="~/assets/images/webblogbackgroundimage.jpg"
                    img-alt="Image"
                    img-top
                  >
                  <template v-slot:header>
                    <h4 class="mb-0">{{title}}</h4>
                  </template>

                  <b-card-body>
                    <!-- <b-card-title>Card Title</b-card-title> -->
                    <b-card-sub-title class="mb-2">{{PreviewText}}</b-card-sub-title>
                    <b-card-text>
                     <small> XXX </small>
                    </b-card-text>
                   
                  </b-card-body>
                  <template v-slot:footer>
                      <small class="text-muted">tagging</small>
                  </template>
                </b-card>
                
            </article>
            </nuxt-link>
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
  width: 100%;
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