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

    }, 
    data () { 
        return {
            loadedPosts: [
        {
          id: 'hardworking-circuit-1p4',
          title: "橙",
          previewText: "Artist in residence @ Cordorba",
          thumbnail:
            "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
        },
          {
          id: '2',
          title: "hardworking circuit #1.4",
          previewText:" about hardworking circuit 4",
          thumbnail:
            "https://static.pexels.com/photos/270348/pexels-photo-270348.jpeg"
        }
      ]
        }
    }
    
}
</script>

<style scoped>
.Hero-work-session-container {
background-color:rgb(78, 148, 160);
height: 100%;
max-width: 1100px;
padding: 10px;
margin: 10px;

display: flex;
flex-wrap: wrap;
justify-content: center;
margin: auto;

}
</style>