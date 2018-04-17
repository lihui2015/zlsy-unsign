<template>
    <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">
        <header2 title="关于软件" :leftBtn="leftBtn"></header2>
        <scroller ref="contentScroller" :class="['scroller',isIpx&&isIpx()?'ml-ipx':'',isand?'android-main-list':'']"  show-scrollbar="false">
            <div class="text-box">
                <text class="name text">书香浙理APP</text>
                <text class="design text">设计：浙江理工大学图书馆</text>
                <!-- <text class="support text"></text> -->
            </div>
            
            <div class="qrcode-box">
                <div class="android qrcode">
                    <image class="qr-img" :src="androidImg"></image>
                    <text class="qr-text">软件版本：1.1.1</text>
                </div>
            </div>

            <div class="copy-right">
                <text class="copy-text">本APP及其具有的图书资料等信息，均用于浙江理工大学师生员工的阅读推广活动。任何组织和个人不得用于其他用途，否则自行承担法律责任，与浙江理工大学无涉。</text>
                <text class="copy-text">本APP用户均为实名制认证用户，用户发布信息必须遵守国家相关的法律法规，APP管理员有权禁止用户发布不良信息，对造成严重后果的，将保留配合司法机关追究其法律责任的权力。</text>
            </div>
        </scroller>
    </div>
</template>

<script>
    import { Utils } from 'weex-ui';
    import Header2 from '../components/Header2.vue';
    const storage = weex.requireModule('storage');
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
    .qrcode-box{
        width: 650px;
        margin-left: 50px;
        margin-top: 30px;
        border-width:1px;
        border-color:#f0f0f0;
        background-color: #ffffff;
        
    }   
    .qrcode{
        align-items: center;
    }
    .qr-img{
        width: 480px;
        height: 480px;
        margin-top: 40px;
        /*margin-left: 50px;*/
    }
    .qr-text{
        width: 630px;
        font-size: 32px;
        color: #8d8d8d;
        margin-top: 40px;
        border-top-width: 1px;
        border-color: #f0f0f0;
        padding-top: 30px;
        padding-bottom: 30px;
        text-align: center;
    }
    .copy-right{
        background-color:#ffffff;
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        margin-top: 30px;
    }
    .copy-text{
        color:#8d8d8d;
        font-size: 30px;
    }
</style>