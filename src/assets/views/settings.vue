<template>
    <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">
        <header2 title="设置" :leftBtn="leftBtn"></header2>
        <scroller ref="contentScroller" :class="['scroller',isIpx&&isIpx()?'ml-ipx':'',isand?'android-main-list':'']"  show-scrollbar="false">
            <div class="text-box">
                <text class="name text" @click="jump('/about')">关于软件</text>
                <!-- <text class="support text"></text> -->
            </div>
            <div class="unsign-btn">
                <text class="unsign-text" @click="unsign()">退出</text>
            </div>
        </scroller>
    </div>
</template>

<script>
    import { Utils } from 'weex-ui';
    import Header2 from '../components/Header2.vue';
    const storage = weex.requireModule('storage');
    const modal = weex.requireModule('modal');
    export default {
        name:'about',
        data () {
            return {
                leftBtn:{
                    name:'<'
                },
                androidImg:'http://zl.senseitgroup.com/images/Android-qrcode.png'
            }
        },
        components: {
            'header2': Header2
        },
        created(){
            this.isand = Utils.env.isAndroid();
        },
        methods: {
            unsign(){
                var _self = this;
                modal.confirm({
                    message:'确定退出吗？',
                    okTitle:'确定',
                    cancelTitle:'取消'
                },function(value){
                    if(value == '确定'){
                        storage.removeItem('token',event=>{
                            if(event.result == 'success'){
                                _self.$router.push('/login')
                            }
                        })
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        background-color: #f0f0f0;
    }
    
    .scroller{
        margin-top: 86px;
        margin-bottom: 100px;
        /*margin-bottom: 290px;*/
    }
    .android-main-list{
        margin-bottom: 150px;
    }
    .ml-ipx{
        margin-bottom: 140px;
    }
    .cell-button{
        background-color: #f4f4f4;
    }
    .text-box{
        background-color: #ffffff;
    }
    .text{
        font-size: 32px;
        color: #666666;
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 30px;
        padding-bottom: 30px;
        border-bottom-width: 1px;
        border-color: #f0f0f0;
    }
    .unsign-btn{
        margin-top: 150px;
        justify-content: center;
        align-items:center;
    }
    .unsign-text{
        width: 690px;
        height: 80px;
        background-color: #ff0000;
        color:#ffffff;
        font-size: 34px;
        text-align: center;
        line-height: 80px;
        border-radius: 10px;
    }
</style>