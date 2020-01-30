<template>
  <div>
    <TheHeader />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "@/components/Navigation/TheHeader"
import TheFooter from "@/components/Navigation/TheFooter"

export default { 
  components: {
    TheHeader,
    TheFooter
  }
}

</script>
<style>

</style>
