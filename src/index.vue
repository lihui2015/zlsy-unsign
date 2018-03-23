<template>
  <div class="wrapper">
    <myHeader message="书库"></myHeader>
    <router-view/>
  </div>
</template>

<script>
import myHeader from '@/components/header'
export default {
  name: 'App',
  components: {
    myHeader
  }
}
</script>

<style scoped>
  .wrapper {
  }
</style>
