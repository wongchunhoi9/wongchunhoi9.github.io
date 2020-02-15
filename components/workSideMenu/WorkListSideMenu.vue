<template>
    <!-- <workPreviewList :posts="WorkloadedPosts"/> -->
<div class="work-side-menu">
    <b-nav vertical>
    <WorkListSideSingleItem
    v-for="post in posts"
     :key="post.id"
     :id="post.id"
     :thumbnail="post.thumbnail"
     :title="post.title"
     :PreviewText="post.previewText" />
    </b-nav>
        <!-- <li v-for="(post, index) in posts" key="index">
            {{ post.id }}
        </li> -->
    
</div>
</template>


<script>
import WorkListSideSingleItem from "~/components/workSideMenu/WorkListSideSingleItem"
export default {
    components: [
        WorkListSideSingleItem
    ],
    props: {
    
        posts: {
            type:Array,
            required: true
        }
    }
}
</script>

<style scoped>
.work-side-menu { 
    position: absolute;
    
}
</style>

