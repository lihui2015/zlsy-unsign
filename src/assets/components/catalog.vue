<template>
  <div class="container">
    <div class="demo">
      <wxc-popup popup-color="rgb(92, 184, 92)"
               :show="open"
               @wxcPopupOverlayClicked="popupOverlayBottomClick"
               pos="left"
               width="750" class="catalog-box" ref="catalogPopup">
      <div class="catalog-content" v-on:swipe="onSwipe($event)">
        <list class="list">
            <cell class="cell" v-for="ca in catalog">
            <div class="panel" @click="goto(ca.startPage,ca.endPage)">
              <text class="text prefix">{{ca.prefix}}</text>
                <text class="text">{{ca.title}}</text>
            </div>
            </cell>
        </list>
      </div>
    </wxc-popup>
    <!-- <div class="catalog-box" ref="catalogPopup" :show="open">
      <div class="catalog-content" v-on:swipe="onSwipe($event)">
        <list class="list">
            <cell class="cell" v-for="ca in catalog">
            <div class="panel" @click="goto(ca.startPage,ca.endPage)">
                <text class="text">{{ca.name}}</text>
            </div>
            </cell>
        </list>
      </div>
    </div> -->
    </div>
  </div>
</template>

<style scoped>
    .catalog-box{
        background-color:#ffffff;
    }
    .catalog-content{
        position:absolute;
        top:0px;
        left:0;
        bottom:0;
        right:0;
        background-color:#ffffff;
    }
    .panel {
        width: 710px;
        height: 80px;
        margin-left: 20px;
        margin-right: 20px;
        margin-bottom: 0px;
        border-bottom-width: 1px;
        border-style: solid;
        border-color: #dedede;
        align-items:center;
        flex-direction: row;
  }

  .text {
        font-size: 36px;
        text-align: left;
        color: #898989;
  }
  .prefix{
    margin-right: 20px;
    color:#009FF0;
  }
</style>

<script>
  import { WxcPopup } from 'weex-ui';
  const modal = weex.requireModule('modal');

  export default {
    props: ['isOpen','catalog'],
    data(){
        return {
        }
    },
    computed:{
        open:{
            get:function(){
                return this.isOpen;
            },
            set:function(v){
                //this.isOpen = v;
            }
        }
    },
    components: { WxcPopup },
    methods: {
      //非状态组件，需要在这里关闭
      popupOverlayBottomClick () {
          var _self = this;
        this.open = false;
        this.$emit("open",{open:false})
      },
      onSwipe(event){
        var dir = event.direction;
        if(dir == 'left'){
            this.$refs.catalogPopup.hide();
        }
      },
      goto(start,end){
        console.log(start);
        var tempS = 8;
        var tempE = 10;
        this.$refs.catalogPopup.hide();
      }
    }
  };
</script>