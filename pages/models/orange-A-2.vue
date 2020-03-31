 <template>
    <div>
        <b-container fluid class="model-container">
            <div class="background-good">
                
                <!-- Orange A rebuild by Wong Chun Hoi -->
                <model-viewer src="https://poly.googleusercontent.com/downloads/c/fp/1585418282602934/5UeVPCQVZlp/cZvp5fMfFMx/orangeA_rebuild.gltf" ios-src="https://poly.googleusercontent.com/downloads/c/fp/1585418282602934/5UeVPCQVZlp/fccSIAzrmVr/orangeA_rebuild.usdz" alt="Orange A rebuild by Wong Chun Hoi" background-color="##fafafa" camera-controls auto-rotate ar ar-scale="auto" magic-leap unstable-webxr quick-look-browsers> </model-viewer>

            </div>
        </b-container>
            <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.js"></script>
            <script nomodule src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"></script>     
    </div> 
</template>


<
<style scoped>
model-viewer { 
    width: 100%;
    height:480px;

}

.model-container {
    /* width: 800px; */
    max-width: 800px;
    padding-left: 30px;
    padding-right: 30px;
    
}

.background-good {
    /* background: linear-gradient(#d78553, #EEEEEE); */
    background:#ffffff00;

}

</style>