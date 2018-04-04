<template>
    <div class="wrapper">
        <text class="recordsTag  cell-tag">借阅记录</text>
        <div class="borrow-records">
            <div class="records-box">
                <div class="box-item" v-for="i in items">
                    <image class="i-image" resize="cover" :src="i.img"></image>
                    <text class="i-name">{{i.tlt}}</text>
                </div>
            </div>
            <div class="recordsMore">
                <text class="iconfont">&#xe605;</text>
                <text class="records-text recordsMore-text">查看更多</text>
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
        font-size: 36px;
        background-color:#009FF0;
        color:#ffffff;
        height: 70px;
        justify-content: center;
        font-weight: 600;
        text-align: left;
        padding-left: 20px;
        padding-right: 20px;
    }
    .recordsTag{
        margin-top: 20px;
    }
    .borrow-records{
        flex-direction: row;
        flex-wrap: nowrap;
        padding-top: 40px;
        justify-content: space-between;
        align-items:flex-end;
        padding-left: 20px;
        padding-right: 20px;
    }
    
    .recordsMore{
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
        width: 565px;
    }
    .box-item{
    }
    .i-name{
        width: 120px;
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
        width: 120px;
        height: 165px;
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
        }
    }
</script>