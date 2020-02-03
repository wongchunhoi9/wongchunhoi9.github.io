<template>
  <section>
    <div class="blogs__top">
      <div>
        <h2>{{ $t('posts') }}</h2>
        <span class="emoji-title emoji--writing"/>
      </div>
      <LangSwitcher/>
    </div>
    <ul class="blogs">
      <blog-card
        v-for="blog in blogs"
        :key="blog.name"
        :blog="blog" />
    </ul>
  </section>
</template>


<script>
import BlogCard from "~/components/BlogCard.vue";

export default {
    
}
</script>