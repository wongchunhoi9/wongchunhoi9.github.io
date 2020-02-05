<template>
<div class="homepage">
  <section class="Hero-session">
    <HeroSession />
  </section>
  <section class="Hero-work-session-container">
    <H3> Recent Works </h3>
    <workPreviewList :posts="HeroWorkloadedPosts"/>
  
  </section>
  
</div>
 

 

</template>

<script>
import HeroSession from "@/components/HeroSession"
import HeroWorkSession from "@/components/HeroWorkSession"
import workPreviewList from "@/components/workPreview/workPreviewList";


export default {
  components:{
    HeroSession,
    HeroWorkSession,
    workPreviewList
  },
  data () { 
        return {
             HeroWorkloadedPosts: [
        {
          id: 'hardworking-circuit-1p4',
          title: "橙",
          previewText: "This is our first post!",
          thumbnail:
            "webblogbackgroundimage"
        },
          {
          id: '2',
          title: "hardworking circuit #1.4",
          previewText: "This is our second post!",
          thumbnail:
            "webblogbackgroundimage"
        },
          {
          id: '3',
          title: "hardworking circuit #1.456",
          previewText: "This is our second post!",
          thumbnail:
            "webblogbackgroundimage"
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
padding: 3px;
margin: 5px;

display: flex;
flex-wrap: wrap;
justify-content: center;
margin: auto;

}
</style>