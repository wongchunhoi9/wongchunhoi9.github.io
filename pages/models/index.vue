<template>

    <div>
          <!-- <b-container>
        
             <b-row>
                 <b-col>
                      <modelPreviewList :posts="modelLoadedPosts"/> 
                 </b-col>
             </b-row>
         </b-container> -->

         <modelPreviewList :posts="modelLoadedPosts"/> 
    </div>
    
  
        



         


</template>

<script>
export default {
    
    data() {
        return {
            modelLoadedPosts : [
                {
                     id: 'orange-6',
                    title: "Orange 6",
                    thumbnail:
                        "orange-6.png",
                    
                    previewText: "",
                    medium:"",
                    year:"2019",
                    category:""
                },
                {
                     id: 'orange-3',
                    title: "Orange 3",
                    thumbnail:
                        "orange-3.png",
                    
                    previewText: "",
                    medium:"",
                    year:"2019",
                    category:""
                },
                 {
                    id: 'orange-B',
                    title: "Orange B",
                    thumbnail:
                        "orange-b.png",
                    
                    previewText: "",
                    medium:"",
                    year:"2019",
                    category:""
                },
                {
                    id: 'orange-A',
                    title: "Orange A",
                    thumbnail:
                        "orange-a.png",
                    
                    previewText: "",
                    medium:"",
                    year:"2019",
                    category:""
                },
                {
                    id: 'bottle-1',
                    title: "bottle-1",
                    thumbnail:
                        "bottle-1.png",
                    
                    previewText: "",
                    medium:"",
                    year:"2019",
                    category:""
                }
             ]
        }
        
    }
}
</script>


<style scoped>
model-viewer { 
    width: 100%;
    height:480px;

}

.model-container {
    /* width: 800px; */
    max-width: 800px;
    
}

</style>