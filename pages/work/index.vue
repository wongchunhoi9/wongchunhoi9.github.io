<template>
    <div class="work-page">
        <section class="intro"> 
            <h1>works</h1>
        </section>
        <workPreviewList :posts="WorkloadedPosts"/>
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
             WorkloadedPosts: [
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

