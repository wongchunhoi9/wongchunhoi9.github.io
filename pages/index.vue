<template>
<div class="homepage">
  <section class="Hero-session">
    <HeroSession />
  </section>
  <section class="Hero-Work-Session">
    <HeroWorkSession />
  
  </section>
  
</div>
 

 

</template>

<script>
import HeroSession from "@/components/HeroSession"
import HeroWorkSession from "@/components/HeroWorkSession"


export default {
  components:{
    HeroSession,
    HeroWorkSession
  }
}
</script>

<style scoped>

</style>