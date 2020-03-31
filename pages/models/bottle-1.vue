
 <template>
    <div>
        <b-container class="model-container">
            <div class="background-good">
                <!-- assemblage 1 by Wong Chun Hoi -->
            <model-viewer src="https://poly.googleusercontent.com/downloads/c/fp/1583513475235690/ctt8tPO_7An/ey6mrKd26j8/20191022%20model.gltf" ios-src="https://poly.googleusercontent.com/downloads/c/fp/1583513475235690/ctt8tPO_7An/5mZ16EgpOVZ/20191022%20model.usdz" alt="assemblage 1 by Wong Chun Hoi" background-color="##eeeeee" camera-controls auto-rotate ar ar-scale="auto" quick-look-browsers="chrome safari" unstable-webxrr > </model-viewer>
            </div>
        </b-container>
            <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.js"></script>
            <script nomodule src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"></script>     
    </div> 
</template>

<style scoped>
model-viewer { 
    width: 100%;
    height:480px;

}

.background-good {
    /* background: linear-gradient(#ffffff, #EEEEEE); */
    background:#ffffff00;
}
.model-container {
    /* width: 800px; */
    max-width: 800px;
    
}

</style>