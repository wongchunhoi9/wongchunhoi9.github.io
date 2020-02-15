<template>
    <div class="work-page">
        <section class="intro"> 
            <h1>works</h1>
        </section>
        <!-- <WorkListSideMenu :posts="WorkloadedPosts"/> -->
        <workPreviewList :posts="WorkloadedPosts"/>
    </div>
</template>


<script>
import workPreviewList from "@/components/workPreview/workPreviewList";
import TheRoute from "@/components/Navigation/TheRoute";


export default {
    components: {
        workPreviewList,
        TheRoute,


    }, 
    data () { 
        return {
             WorkloadedPosts: [
        {
          id: 'hardworking-circuit-1-4',
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
        },
        {
          id: '234',
          title: "hardworking circuit #1.45sss6",
          previewText: "This is our second post!",
          thumbnail:
            "webblogbackgroundimage"
        },
        {
          id: '234',
          title: "hardworking circuit #1.45sss6",
          previewText: "This is our second post!",
          thumbnail:
            "webblogbackgroundimage"
        },
        {
          id: '234',
          title: "hardworking circuit #1.45sss6",
          previewText: "This is our second post!",
          thumbnail:
            "webblogbackgroundimage"
        },
        {
          id: '234',
          title: "hardworking circuit #1.45sss6",
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

.intro {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

</style>