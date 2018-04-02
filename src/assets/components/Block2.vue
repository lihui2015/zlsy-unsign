<template>
    <div class="wrapper">
        <div class="tlt-box">
            <text class="tlt tlt-new" @click="jump('/sort')">图书精选 ></text>
        </div>
        <div class="box">
            <div class="i-book" v-for="i in books">
                <image class="bk-img" resize="cover" :src="i.full_cover" @click="jump('/bookDetail/'+i.id)"></image>
                <text class="bk-tlt" @click="jump('/bookDetail/'+i.id)">{{i.book_name}}</text>
                <text class="bk-count">{{i.read_count}}人在阅读</text>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        margin-top: 30px;
        border-top-width: 1px;
        border-style: solid;
        border-top-color: #333333;
        padding-bottom: 20px;
    }
    .tlt-box{
        padding-top: 30px;
    }
    .tlt{
        text-align: center;
        font-size: 34px;
        color:#333333;
    }
    .box{
        flex-direction: row;
        flex-wrap: wrap;
        padding: 0px 10px;
    }
    .i-book{
        width: 215px;
        padding: 20px 0;
    }
    .bk-img{
        height: 291px;
        width: 215px;
        background-color: #f4f4f4;
    }
    .bk-tlt{
        font-size: 32px;
        color:#333;
        width: 215px;
        margin-top: 16px;
        overflow: hidden;
        lines:1;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .bk-count{
        display: block;
        font-size: 30px;
        width: 215px;
        margin-top: 8px;
        color:#7f7f7f;
        overflow: hidden;
        lines:1;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>
<script>
    var navigator = weex.requireModule('navigator')
    import util from '../util';
    export default {
        props:["books"],
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