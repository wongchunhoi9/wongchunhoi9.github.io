<template>
    
        
          <b-row cols="2" cols-sm="3" cols-md="3">
            <soundDesignGridSingle 
            v-for="post in posts"
            :key="post.id"
            :id="post.id"
            :thumbnail="post.thumbnail"
            :title="post.title"
            :PreviewText="post.previewText" 
            :medium="post.medium"
            :year="post.year" 
            :soundTask="post.soundTask" 
            :collaborateArtist="post.collaborateArtist"/>
          </b-row>
        
            
    
    
</template>

<style scoped>

</style>

<script>
import soundDesignGridSingle from '@/components/soundPreview/soundDesignGridSingle'
export default {
    components:{
        soundDesignGridSingle
    },
    props: {
    
        posts: {
            type:Array,
            required: true
        }
    }
}
</script>