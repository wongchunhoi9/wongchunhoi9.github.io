 <template>
    <div>
        <b-container fluid class="model-container">
            <div class="background-good">
                 <model-viewer src="https://poly.googleusercontent.com/downloads/c/fp/1583318739603526/deBlyR6vhqQ/0nUdQsugAUG/Orange%203.gltf" ios-src="https://poly.googleusercontent.com/downloads/c/fp/1583318739603526/deBlyR6vhqQ/4KEUqtAGmKo/Orange%203.usdz" alt="Orange 3 by Wong Chun Hoi" background-color="##e0a57d" camera-controls auto-rotate ar ar-scale="auto"> </model-viewer>
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
    background: linear-gradient(#d78553, #EEEEEE);
}

</style>