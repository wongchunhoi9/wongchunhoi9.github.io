<template>

    <div>
        <div>
            
        </div>
        
        <b-container fluid class="model-container">
            <!-- BOTTLE by Wong Chun Hoi -->
            <div class="demo" style="background: linear-gradient(#ffffff, #EEEEEE);">
              <model-viewer src="https://poly.googleusercontent.com/downloads/c/fp/1582657918584984/8vEMGYufr1w/arO7j9j6BfD/20191022%20model.gltf" ios-src="https://poly.googleusercontent.com/downloads/c/fp/1582657918584984/8vEMGYufr1w/4UPX0xJK9lX/20191022%20model.usdz" alt="BOTTLE by Wong Chun Hoi" background-color="#8fba7e" camera-controls auto-rotate  > </model-viewer>
              <model-viewer src="https://poly.googleusercontent.com/downloads/c/fp/1583318739603526/deBlyR6vhqQ/0nUdQsugAUG/Orange%203.gltf"  ios-src="https://poly.googleusercontent.com/downloads/c/fp/1583318739603526/deBlyR6vhqQ/4KEUqtAGmKo/Orange%203.usdz" alt="Orange 3 by Wong Chun Hoi" background-color="##e0a57d" camera-controls auto-rotate ar ar-scale="auto" > </model-viewer>
            </div>

              <br>
            
            <div> <!-- assemblage 1 by Wong Chun Hoi -->
                <model-viewer src="https://poly.googleusercontent.com/downloads/c/fp/1583513057631283/ctt8tPO_7An/ey6mrKd26j8/20191022%20model.gltf" ios-src="https://poly.googleusercontent.com/downloads/c/fp/1583513057631283/ctt8tPO_7An/5mZ16EgpOVZ/20191022%20model.usdz" alt="assemblage 1 by Wong Chun Hoi" background-color="##eeeeee" camera-controls auto-rotate > </model-viewer>      
            </div> 
            <br>
            <div>

            
            <!-- Orange 3 by Wong Chun Hoi -->
            <model-viewer src="https://poly.googleusercontent.com/downloads/c/fp/1583318739603526/deBlyR6vhqQ/0nUdQsugAUG/Orange%203.gltf" ios-src="https://poly.googleusercontent.com/downloads/c/fp/1583318739603526/deBlyR6vhqQ/4KEUqtAGmKo/Orange%203.usdz" alt="Orange 3 by Wong Chun Hoi" background-color="##e0a57d" camera-controls auto-rotate > </model-viewer>
              <!-- <iframe width="100%" height="480px" src="https://poly.google.com/view/8vEMGYufr1w/embed" frameborder="0" style="border:none;" allowvr="yes" allow="vr; xr; accelerometer; magnetometer; gyroscope; autoplay;" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel="" ></iframe> -->
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
    
}

</style>