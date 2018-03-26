<template>
  <div class="app-wrapper">
    <router-view class="r-box"></router-view>
    <tab-bar @tabTo="onTabTo"></tab-bar>
  </div>
</template>

<script>
  var modal = weex.requireModule('modal');
  import util from './assets/util';
  import tabBar from './assets/components/tabBar.vue';
  export default {
      name: 'App',
      data () {
          return {
          }
      },
      components: {
          'tab-bar': tabBar
      },
      created () {
          util.initIconFont();
      },
      methods: {
          onTabTo(_result){
              let _key = _result.data.key || '';
              this.$router && this.$router.push('/'+_key)
          }
      }
  }

</script>

<style scoped>
  .app-wrapper{
        background-color: #f4f4f4;
    }
  .r-box{
      position: absolute;
      top:0;
      left: 0;
      right: 0;
      bottom: 0;
  }
</style>
