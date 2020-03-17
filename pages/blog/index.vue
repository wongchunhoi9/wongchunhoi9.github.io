<template>
<div class="blog-page">
  <!-- <div class="markdown-body">
    <h1>frontmatter-markdown-loader-nuxt-sample</h1>
    <ol type="A">
      <li><nuxt-link to="/blog/blog234">Import synchronously</nuxt-link></li>
      <li>
        Import dynamically
        <ul>
          <li><nuxt-link to="/blog/article?name=blog234">akg.md</nuxt-link></li>
          <li><nuxt-link to="/blog/article?name=quruli">quruli.md</nuxt-link></li>
          <li><nuxt-link to="/blog/article?name=hardworking_circuit_1to4">hardworking_circuit_1to4.md</nuxt-link></li>
        </ul>
      </li>
      <li><nuxt-link to="/blog/quruli">Run component on markdown</nuxt-link></li>
    </ol>
  </div> -->
  <!-- https://github.com/jennapederson/starter-for-nuxt-markdown-blog -->

<!-- Try another list and using article queriy instead -->

    <b-container class="blog-page-container">
      <b-row>
        <b-col> <h3 class="blog-intro">Blog</h3> </b-col>
        <b-col>
          <!-- <b-form-input v-model="filterValue" placeholder="[not yet functioning!] :search work category" class="mb-2"></b-form-input> -->
                
        </b-col>
      </b-row>
    
      <div v-for="post in posts" :key="post.attributes.title" class="blog-post">
      <nuxt-link :to="post.path">
        <b-container>
          <b-row>
            
            <b-col md="4">
              <div  class="blog-image-container">
              <img :src="imgSrc(post)" :alt="post.attributes.title" class="blog-image" >
              </div>
              
            </b-col>
            <b-col >
              <h3 class="blog-title">{{ post.attributes.title }} </h3>
              <h4 class="blog-date">{{ post.attributes.date | date}} </h4>
              <!-- <h5> {{PostDateConvertion(post.attributes.date)}}</h5> -->
              <hr class="solid">
              <p class="blog-excerpt">{{ post.attributes.excerpt }} </p>
              <hr class="solid">
              <p class="blog-tagging">{{ post.attributes.tags }}</p>
            </b-col>
          </b-row>
    
        </b-container> 
        </nuxt-link>
      </div>
    </b-container>
  </div>

</template>
<script>
export default {
  async asyncData () {
    const context = await require.context('~/contents/blog', true, /\.md$/)
    const posts = await context.keys().map(key => ({
      ...context(key),
      path: `/blog/article?name=${key.replace('.md', '').replace('./', '')}`,
      
    }))
    return { posts: posts.reverse() }
  },
  methods: {
    imgSrc (post) {
      return require(`~/assets/images/blog/${post.attributes.hero}`)
    },
    PostDateConvertion (){
      // return SimpleDateFormat(`${post.attributes.date}`)
      // return SimpleDateFormat("yyyy-mm-dd")
      
    }
  },
  data () {
    return {
      filterValue:""
    }
  }
  
  
}
</script>

<style scoped>

.blog-page{
  background: #fcf3d9;
}
.blog-page-container {
      /* background-image: linear-gradient(to right top, #90abb8, #6daba8, #72a67d, #99984e, #c87c42); */
      justify-content: center;
      height: 100%;
      max-width: 1200px;    
      ;
}
.blog-page-container  .row > [class^="col-"] { 
    /* background-color: rgba(144, 171, 184, 0.219); */
    /* border-block-color: rgb(108, 124, 129); */
    /* border-style: solid; */
    border-width: 0px;
    border-block-width: 1px;
    padding-block: 5px;
    
    

}
.blog-page-container  .row .col {
    /* background-color: rgba(240, 232, 186, 0.221); */
    /* border-block-color: #E8A87C; */
    /* border-style: solid; */
    border-width: 0px;
    padding-block: 5px;
    margin-bottom: 5px;
    margin-top: 2px;
    border-block-width: 1px;
    
    
}   

.blog-intro {
  margin: 5px;
  color: #000;
}

.blog-post {
  /* background-color:#f7e7ba; */
  padding-top:10px;
  padding-bottom: 5px;
  margin-top: 10px;
  margin-bottom: 5px;
  border-bottom: dotted;
  border-width:3px ;
  border-block-color: #fac22b;
  

}

.blog-title{
  color: black;
}

.blog-date{
  /* font-size: 15px; */
  text-align: right;
  color: rgba(0, 0, 0, 0.509)
}

.blog-excerpt{
  color: #0a374e;
}
.blog-image-container{
  width: 100%;
  height: auto;
  overflow: hidden;
}
.blog-image{
  width: 100%;
  overflow: hidden;
  display: block;
}
.blog-except{

}
.blog-tagging { 
  color: #503e0e;
}

a:hover {
  color:#fac22b;
  text-decoration: none;
  

}
</style>