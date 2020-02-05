<template>
    <section class="post-list">
          <b-card-group columns >
            <workPreviewCard 
            v-for="post in posts"
            :key="post.id"
            :id="post.id"
            :thumbnail="post.thumbnail"
            :title="post.title"
            :PreviewText="post.previewText" />
          </b-card-group>
          
            
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
import workPreviewCard from '@/components/workPreview/workPreviewCard'
export default {
    components:{
        workPreviewCard
    },
    props: {
    
        posts: {
            type:Array,
            required: true
        }
    }
}
</script>