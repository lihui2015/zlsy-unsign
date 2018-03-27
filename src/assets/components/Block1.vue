<template>
    <div class="wrapper borrow-records">
        <div class="recordsTag">
            <text class="iconfont">&#xe70a;</text>
            <text class="records-text recordsTag-text">借阅记录</text>
        </div>
        <div class="records-box">
            <div class="box-item" v-for="i in items" @click="jumpWeb()">
                <image class="i-image" resize="cover" :src="i.img"></image>
                <text class="i-name">{{i.tlt}}</text>
            </div>
        </div>
        <div class="recordsMore">
            <text class="iconfont">&#xe605;</text>
            <text class="records-text recordsMore-text">查看更多</text>
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
        padding-top: 30px;
        border-top-width: 1px;
        border-style: solid;
        border-top-color: #333333;
        justify-content: space-between;
        align-items:flex-end;
    }
    .recordsTag{
    }
    ..recordsMore{
    }
    .recordsTag .iconfont{
        font-size: 62px;
        text-align: center;
    }
    .records-text{
        margin-top: 10px;
        font-size: 30px;
    }
    .records-box{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        width: 485px;
    }
    .box-item{
    }
    .i-name{
        width: 100px;
        position: relative;
        color:#333;
        font-size: 32px;
        margin-top: 10px;
        text-align: center;
        overflow: hidden;
        lines:1;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .i-image{
        width: 100px;
        height: 145px;
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