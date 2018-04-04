<template>
  <div class="container" :style="{height: height}">
    <div class="demo">
      <wxc-minibar :title="title"
                   background-color="#009ff0"
                   text-color="#FFFFFF"
                   :right-text="rightButton"
                   leftButton=""
                   @wxcMinibarLeftButtonClicked="minibarLeftButtonClick"
                   @wxcMinibarRightButtonClicked="minibarRightButtonClick"></wxc-minibar>
    </div>
  </div>
</template>

<style scoped>
    .header{
        position: fixed;
        width: 750px;
        left: 0;
        top: 0;
        z-index: 1;
        background-color:#f8f8f8;
        padding-top: 3px;
        padding-bottom: 3px;
    }
    .header-left{
        position: absolute;
        top: 16px;
        left: 18px;
        font-size: 14px;
        line-height: 21px;
        color: #ccc;
    }
    .left-arrow{
        position: absolute;
        width: 60px;
        height: 60px;
        top: -5px;
        left: -5px;
    }
    .left-arrow:before{
        content: "";
        position: absolute;
        width: 24px;
        height: 24px;
        border: 1px solid #fff;
        border-width: 2px 0 0 2px;
        -webkit-trasform: rotate(315deg);
        transform: rotate(315deg);
        top: 20px;
        left: 20px;
    }
    .header-title{
        height: 80px;
        margin: 0 88px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 36px;
        letter-spacing: 2px;
        line-height: 80px;
        color: #000;
        text-align: center;
    }
</style>

<script>
  import { WxcMinibar } from 'weex-ui';
  const modal = weex.requireModule('modal');

  export default {
    props: ['title','leftButton','rightButton'],
    data(){
        return {
            height: '86px'
        }
    },
    components: { WxcMinibar },
    methods: {
      minibarLeftButtonClick () {
      },
      minibarRightButtonClick () {
        modal.toast({ 'message': 'click rightButton!', 'duration': 1 });
      }
    }
  };
</script>