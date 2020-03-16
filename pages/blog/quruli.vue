<template>
  <div>
    <small>This component mounts <code>~/articles/quruli.md</code> as Vue component which includes a custome element for <code>LinkToWikipedia</code></small>
    <h2>{{ title }}</h2>
    <article-quruli />
  </div>
</template>

<script>
  import fm from '~/contents/work-in-progress/2020-03-16-level3soundNote.md'


  export default {
    components: {
      'article-quruli': fm.vue.component
    },
    data () {
      return {
        title: fm.attributes.title
      }
    }
  }
</script>
