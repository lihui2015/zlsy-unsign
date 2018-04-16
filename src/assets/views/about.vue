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
                androidImg:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAIAAACx0UUtAAAAGXRFWHRTb2Z0%0Ad2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9i%0AZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2Vo%0AaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6%0AbnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2%0ALjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpS%0AREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJk%0AZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIg%0AeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxu%0Aczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1s%0AbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9S%0AZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9w%0AIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4%0AQjVDQUVGOTM5QUUxMUU4OEI5NUIxQTA0MzE5MDYxNSIgeG1wTU06RG9jdW1l%0AbnRJRD0ieG1wLmRpZDo4QjVDQUVGQTM5QUUxMUU4OEI5NUIxQTA0MzE5MDYx%0ANSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAu%0AaWlkOjhCNUNBRUY3MzlBRTExRTg4Qjk1QjFBMDQzMTkwNjE1IiBzdFJlZjpk%0Ab2N1bWVudElEPSJ4bXAuZGlkOjhCNUNBRUY4MzlBRTExRTg4Qjk1QjFBMDQz%0AMTkwNjE1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4%0AbXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+QY0fjAAAHMlJREFUeNrsnX9Y%0A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'
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
</style>