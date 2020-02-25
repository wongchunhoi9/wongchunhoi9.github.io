<template>
    <div>
        
       
        <b-container  class="album-container">
            <b-row>
                <b-col md="5">

                    <div class="album-discription">
                        <H3>half-hour exercise #1 </H3>
                         <b-img fluid-grow src="~/assets/images/sound/halfhour-exercise-set.svg" style="background-color:white;"></b-img>
                        <p>I spent around 30mins to twist each freelance job session and play with it</p>
                    </div>
                   
                </b-col>
                
                <b-col md="7">          
                    <div class="album-player">
                        <iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/8180050&color=%23e8a87c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                    </div>
                </b-col>
                
               
            </b-row>

        </b-container>

    </div>

    
</template>

<style scoped>

.album-container {
      background-image: linear-gradient(to right top, #90abb8, #6daba8, #72a67d, #99984e, #c87c42);
      margin:4px;
      padding: 3px;
      justify-content: center;
      height: 100%;
      /* max-width: 1200px; */
}

.album-discription { 
    padding: 3px;
}
</style>