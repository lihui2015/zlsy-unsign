<template>
    <div class="bookSearchBox">
        <text class="bookSearch">馆藏查询</text>
        <div class="searchBox" @click="jumpWeb()">
            <text class="iconfont search-text">书名，作者，ISBN</text>
            <text class="iconfont search-icon">&#xe65c;</text>
        </div>
    </div>
</template>
<style scoped>
    .bookSearchBox{
        background-color: #ffffff;
        padding: 0 20px 40px 20px;
        border-top-width: 1px;
        border-style: solid;
        border-top-color: #333333;
    }
    .bookSearch{
        padding-top: 20px;
    }
    .searchBox{
        flex: 1;
        height: 70px;
        font-size: 34px;
        background-color: #ededed;
        border-radius: 8px;
        margin: 20px 0 0;
        padding: 0 20px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .iconfont {
        font-family:iconfont;
    }
    .search {
        flex: 1;
        height: 70px;
        font-size: 34px;
        padding: 10px 15px;
        background-color: #ededed;
        border-radius: 8px;
    }
</style>
<script>
    var navigator = weex.requireModule('navigator')
    import util from '../util';
    export default {
        props:['title','leftBtn','rightBtn'],
        data () {
            return {
            }
        },
        methods: {
            jumpWeb (_url) {
                if(!_url) _url = 'http://m.you.163.com/search';
                const url = this.$getConfig().bundleUrl;
                navigator.push({
                    url: util.setBundleUrl(url, 'page/webview.js?weburl='+_url) ,
                    animated: "false"
                });
            }
        }
    }
</script>