<template>
  <div>
    <small>This component mounts <code>~/articles/quruli.md</code> as Vue component which includes a custome element for <code>LinkToWikipedia</code></small>
    <h2>{{ title }}</h2>
    <quruli-article />
  </div>
</template>

<script>
  import fm from '~/contents/quruli.md'


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
