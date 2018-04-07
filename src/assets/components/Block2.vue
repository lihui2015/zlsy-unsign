<template>
    <div class="wrapper">
        <div class="tlt-box cell-tag">
            <text class="tlt" @click="jump('/list/0/图书精选')">图书精选</text>
            <wxc-icon name="more" @click="jump('/list/0/图书精选')" class="colorWhite"></wxc-icon>
        </div>
        <div class="box">
            <div class="i-book" v-for="i in books">
                <image class="bk-img" resize="cover" :src="i.full_cover" @click="jump('/bookDetail/'+i.id+'/'+i.book_name)"></image>
                <text class="bk-tlt" @click="jump('/bookDetail/'+i.id+'/'+i.book_name)">{{i.book_name}}</text>
                <text class="bk-count">{{i.read_count}}人在阅读</text>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .cell-tag{
        text-align: center;
        background-color:#009FF0;
        height: 70px;
        font-weight: 600;
        text-align: left;
        padding-left: 20px;
        padding-right: 20px;
    }
    .tlt{
        color:#ffffff;
        font-size: 36px;
        font-weight: 600;
    }
    .colorWhite{
        color:#ffffff;
    }
    .wrapper{
        margin-top: 30px;
        padding-bottom: 20px;
    }
    .tlt-box{
        margin-top: 10px;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .box{
        flex-direction: row;
        flex-wrap: wrap;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 20px;
        width: 750px;
    }
    .i-book{
        width: 223px;
        padding-top: 20px;
        padding-bottom: 20px;
        margin-right: 10px;
        margin-left: 10px;
    }
    .bk-img{
        height: 291px;
        width: 223px;
        background-color: #f4f4f4;
    }
    .bk-tlt{
        font-size: 32px;
        color:#333;
        width: 223px;
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
    import { WxcIcon } from 'weex-ui'
    var navigator = weex.requireModule('navigator')
    import util from '../util';
    export default {
        props:["books"],
        components: { WxcIcon },
        data () {
            return {
            }
        },
        methods: {
        }
    }
</script>