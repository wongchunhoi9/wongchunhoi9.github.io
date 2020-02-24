<template>
    
        
          <b-row cols="2" cols-sm="3" cols-md="3">
            <albumGridSingle 
            v-for="post in posts"
            :key="post.id"
            :id="post.id"
            :thumbnail="post.thumbnail"
            :title="post.title"
            :PreviewText="post.previewText" 
            :medium="post.medium"
            :year="post.year" 
            :category="post.category" 
            :albumArtist="post.albumArtist"/>
          </b-row>
        
            
    
    
</template>

<style scoped>

</style>

<script>
import albumGridSingle from '@/components/soundPreview/albumGridSingle'
export default {
    components:{
        albumGridSingle
    },
    props: {
    
        posts: {
            type:Array,
            required: true
        }
    }
}
</script>