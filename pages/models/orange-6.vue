 <template>
    <div>
        <b-container fluid class="model-container">
            <div class="background-good">
                 
            <model-viewer src="https://poly.googleusercontent.com/downloads/c/fp/1585508180180295/alKoozKtdKZ/aKLl3PE_q85/orange6.gltf" ios-src="https://poly.googleusercontent.com/downloads/c/fp/1585508180180295/alKoozKtdKZ/3xAD4xrlZ6B/orange6.usdz" alt="orange6 by Wong Chun Hoi" background-color="##eeeeee" camera-controls auto-rotate ar ar-scale="auto" quick-look-browsers="chrome safari" unstable-webxr> </model-viewer>
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

<!-- orange6 by Wong Chun Hoi -->