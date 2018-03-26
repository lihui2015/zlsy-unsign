<template>
    <div class="wrapper borrow-records">
        <div class="recordsTag">
            <text class="iconfont">&#xE915;</text>
            <text class="recordsTag-text">借阅记录</text>
        </div>
        <div class="records-box">
            <div class="box-item" v-for="i in items" @click="jumpWeb()">
                <image class="i-image" resize="cover" :src="i.img"></image>
                <text class="i-name">{{i.tlt}}</text>
            </div>
        </div>
        <div class="recordsMore">
            <text class="iconfont">&#xE915;</text>
            <text class="recordsMore-text">查看更多</text>
        </div>
    </div>
</template>
<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .borrow-records{
        flex-direction: row;
        flex-wrap: nowrap;
        padding-top: 20px;
    }
    .records-box{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        width: 440px;
        height: 192px;
        
    }
    .box-item{
        width: 87px;
        padding: 0px;
        background-color: #efefef;
    }
    .i-name{
        position: relative;
        color:#333;
        font-size: 28px;
        width: 300px;
    }
    .i-image{
        width: 87px;
        height: 125px;
    }
</style>
<script>
    var navigator = weex.requireModule('navigator')
    import util from '../util';
    export default {
        props:["items"],
        data () {
            return {
            }
        },
        methods: {
            jumpWeb (_url) {
                if(!_url) return;
                const url = this.$getConfig().bundleUrl;
                navigator.push({
                    url: util.setBundleUrl(url, 'page/webview.js?weburl='+_url) ,
                    animated: "true"
                });
            }
        }
    }
</script>