<template>
    <section class="post-list">
          <PostPreview 
          v-for="post in posts"
          :key="post.id"
          :id="post.id"
          :is-admin="isAdmin"
          :thumbnail="post.thumbnail"
          :title="post.title"
          :PreviewText="post.previewText" />
          
            
    </section>
    
</template>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>

<script>
import PostPreview from '@/components/workPreviiew/workPreviewCard'
export default {
    components:{
        PostPreview
    },
    props: {
    
        posts: {
            type:Array,
            required: true
        }
    }
}
</script>