<template>
    <div class="box">
        <div class="app-wrapper" v-if="login">
            <router-view class="r-box"></router-view>
            <!-- <tab-bar @tabTo="onTabTo"></tab-bar> -->
        </div>
        <div class="login-page" v-else>
            <login-page v-on:login="handleMessage"></login-page>
        </div>
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
              login: false
          }
      },
      components: {
          'tab-bar': tabBar,
          'login-page': loginPage
      },
      created () {
          util.initIconFont();
          storage.getItem('token',event => {
            var localToken = event.data;
            if(localToken == 'undefined'){
              this.login = false;
            }else if(localToken != 'undefined'){
              this.GET('banners/list', localToken, res => {
                  let result = res.data;
                  if(result.code != 200){
                    this.login = false;
                  }else if(result.code == 200){
                    this.login = true;
                  }
              });
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
              this.$router.push('/home')
          }
      }
  }

</script>

<style scoped>
.box{
  position: absolute;
      top:0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 750px;
        height: 1334px;
}
  .app-wrapper{
        background-color: #ffffff;
        width: 750px;
        height: 1334px;
        position: absolute;
      top:0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  .login-page{
    position: absolute;
      top:0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 750px;
        height: 1334px;
  }
  .r-box{
      position: absolute;
      top:0;
      left: 0;
      right: 0;
      bottom: 0;
  }
  .hide{
      opacity: 0;
  }
  .show{
      opacity: 1;
  }
</style>
