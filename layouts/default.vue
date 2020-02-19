<template>
  <div>
    <TheHeader />
    <!-- <TheRoute /> -->
    <nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/Navigation/TheHeader"
import TheFooter from "@/components/Navigation/TheFooter"
// import TheRoute from "@/components/Navigation/TheRoute";

export default { 
  components: {
    TheHeader,
    TheFooter
  }
}

</script>
<style>
html {
  /* font-family: 'Noto Sans TC', sans-serif; */
  

    /* font-family: 'Rajdhani', sans-serif;

    font-family: 'Raleway', sans-serif; */

    /* font-family: 'Cutive Mono', monospace; */


  margin: 0;
}
</style>


