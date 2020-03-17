<template>
<div>
  <b-container class="blog-container">
    <!-- <small>This component mounts <code>~/articles/${file name which is passed through "name" query on URL}.md</code> as Vue component dynamically</small> -->
     <div class="blog-content">
        <h2 class="blog-title-container">{{ attributes.title }}</h2>
        <h5 class="blog-date">{{ attributes.tags}}</h5>
        <h4 class="blog-date">{{ attributes.date | date}}</h4>
        
     </div>
     <component :is="selectedArticle" />
    
  </b-container>
</div>
</template>

<style scoped>
.blog-container { 
  padding-left: 4%;
  padding-right: 4%;
  justify-content: center;
  max-width: 1400px;
  background: #fcf3d9;
  border: solid;
  border-width: 1px;;
  border-color: rgba(128, 128, 128, 0.473);
}
.blog-title-container { 
  color: rgb(27, 19, 17);
  padding: 10px;
}

.blog-date {
  text-align:right; 
}
.blog-content{
   
}

@media only screen and (max-width: 900px) {
  .blog-container { 
    padding-left: 7%;
    padding-right: 7%;
    
    
  }

  
}





</style>

<script>
  export default {
    // validate ({ query }) {
    //   return ['blog234', 'quruli'].includes(query.name)
    // },
    data () {
      return {
        attributes: {},
        selectedArticle: null
      }
    },
    created () {
      const markdown = require(`~/contents/blog/${this.$route.query.name}.md`)
      this.attributes = markdown.attributes
      this.selectedArticle = markdown.vue.component

      // Use Async Components for the benefit of code splitting
      // https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components
      // this.selectedArticle = () => import(`~/articles/${this.$route.query.name}.md`).then(({ vue }) => vue.component)
    },
    head () {
      return {
        // title: "blog-wongchunhoi9"
        title: this.attributes.title,
         meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { hid: 'description', name: this.attributes.title, content: this.attributes.excerpt }
      ]
      }
    }
  }
</script>
