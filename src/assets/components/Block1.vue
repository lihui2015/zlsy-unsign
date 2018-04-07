<template>
    <div class="wrapper">
        <div class="cell-tag recordsTag">
            <text class="tag-text">借阅记录</text>
        </div>
        
        <div class="borrow-records">
            <div class="records-box">
                <div class="box-item" v-for="i in items">
                    <image class="i-image" resize="cover" :src="i.full_cover"></image>
                    <text class="i-name">{{i.book_name}}</text>
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
        font-size: 60px;
        text-align: center;
    }
    .cell-tag{
        background-color:#009FF0;
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
    .tag-text{
        font-size: 36px;
        color:#ffffff;
        font-weight: 600;
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