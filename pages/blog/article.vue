<template>
  <div class="blog-container">
    <small>This component mounts <code>~/articles/${file name which is passed through "name" query on URL}.md</code> as Vue component dynamically</small>
    <h2 class="blog-title-container">{{ attributes.title }}</h2>
     <h4 class="blog-date">{{ attributes.date }}</h4>
    <component :is="selectedArticle" />
  </div>
</template>

<style scoped>
.blog-container { 
  padding-left: 10%;
  padding-right: 10%;
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
      const markdown = require(`~/contents/${this.$route.query.name}.md`)
      this.attributes = markdown.attributes
      this.selectedArticle = markdown.vue.component

      // Use Async Components for the benefit of code splitting
      // https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components
      // this.selectedArticle = () => import(`~/articles/${this.$route.query.name}.md`).then(({ vue }) => vue.component)
    }
  }
</script>
