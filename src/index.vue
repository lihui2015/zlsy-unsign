<template>
  <div class="app-wrapper" v-if="login">
    <router-view class="r-box"></router-view>
    <tab-bar @tabTo="onTabTo"></tab-bar>
  </div>
  <div class="login-page" v-else>
    <login-page v-on:login="handleMessage"></login-page>
  </div>
</template>

<script>
  var modal = weex.requireModule('modal');
  var storage = weex.requireModule('storage');
  import util from './assets/util';
  import tabBar from './assets/components/tabBar.vue';
  import loginPage from './assets/views/login.vue';
  export default {
      name: 'App',
      data () {
          return {
              login: true
          }
      },
      components: {
          'tab-bar': tabBar,
          'login-page': loginPage
      },
      created () {
          util.initIconFont();
          storage.getItem('token',event => {
              if(event.data == 'undefined'){
                  this.login = false;
              }
          })
      },
      methods: {
          onTabTo(_result){
              let _key = _result.data.key || '';
              this.$router && this.$router.push('/'+_key)
          },
          handleMessage(payload){
              this.login = payload.login;
          }
      }
  }

</script>

<style scoped>
  .app-wrapper{
        background-color: #ffffff;
    }
  .r-box{
      position: absolute;
      top:0;
      left: 0;
      right: 0;
      bottom: 0;
  }
</style>
