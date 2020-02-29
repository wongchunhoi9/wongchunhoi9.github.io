<template>
<div>
  <div class="markdown-body">
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
  </div>
  <!-- https://github.com/jennapederson/starter-for-nuxt-markdown-blog -->

<!-- 
Try another list and using article queriy instead -->
  <div class="Blog-list">

  </div>
    <div v-for="post in posts" :key="post.attributes.title" class="columns">
      <ul>
        <li><nuxt-link :to="post.path">  {{ post.attributes.title }} </nuxt-link></li>
        <li>     {{ post.attributes.tags }}     </li>
           <p>{{ post.attributes.excerpt }}</p>
            <p>{{ post.attributes.date }}</p>
            <img :src="imgSrc(post)" :alt="post.attributes.title">
      </ul>
    </div>

  </div>

</template>
<script>
export default {
  async asyncData () {
    const context = await require.context('~/contents/blog', true, /\.md$/)
    const posts = await context.keys().map(key => ({
      ...context(key),
      path: `/blog/article?name=${key.replace('.md', '').replace('./', '')}`
    }))
    return { posts: posts.reverse() }
  },
  methods: {
    imgSrc (post) {
      return require(`~/assets/images/blogtest/${post.attributes.hero}`)
    }
  }
}
</script>