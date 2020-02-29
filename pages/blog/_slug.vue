<template>
  <!-- <div class="container">
    <h1 class="title">
      {{ post.attributes.title }}
    </h1>
    <h2 class="subtitle">
      {{ post.attributes.date }}
    </h2>
    <div class="columns">
      <div class="column is-half is-offset-one-quarter">
        <figure class="image">
          
        </figure>
      </div>
    </div>

    <div class="content" v-html="post.html" />
    <div>
      {{ post.vue.component }}
      <component :is="contentBlog" />
  </div>
  </div>
   -->
</template>

<script>
export default {
//   computed: {
//     imgSrc () {
//       return require(`~/assets/images/blog/${this.post.attributes.hero}`)
//     }
//   },
//   async asyncData ({ params }) {
//     try {
//       const post = await import(`~/contents/blog/${params.slug}.md`)
//       contentBlog = post.vue.component
      
//       return {
//         post,
        
//       }
//     } catch (error) {
//       return false
//     }
//   },
//   head () {
//     return {
//       title: this.post.attributes.title
//     }
//   }
}
</script>