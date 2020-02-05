<template>
    <div class="Hero-work-session-container">
      <h2> Recent Work </h2>
      
        <workPreviewList :posts="loadedPosts"/>
    </div>
</template>

<script>
import workPreviewList from "@/components/workPreview/workPreviewList";

export default {
    components: {
        workPreviewList

    }
   
    
}
</script>

<style scoped>
.Hero-work-session-container {
background-color:rgb(78, 148, 160);
height: 100%;
max-width: 1100px;
padding: 3px;
margin: 5px;

display: flex;
flex-wrap: wrap;
justify-content: center;
margin: auto;

}
</style>