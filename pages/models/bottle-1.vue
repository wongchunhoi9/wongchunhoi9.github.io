
 <template>
    <div>
        <b-container class="model-container">
            <div class="background-good">
                <model-viewer src="https://poly.googleusercontent.com/downloads/c/fp/1582657918584984/8vEMGYufr1w/arO7j9j6BfD/20191022%20model.gltf" ios-src="https://poly.googleusercontent.com/downloads/c/fp/1582657918584984/8vEMGYufr1w/4UPX0xJK9lX/20191022%20model.usdz" alt="BOTTLE by Wong Chun Hoi" background-color="#8fba7e" camera-controls auto-rotate ar ar-scale="auto" > </model-viewer>
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
    background: linear-gradient(#ffffff, #EEEEEE);
}
.model-container {
    /* width: 800px; */
    max-width: 800px;
    
}

</style>