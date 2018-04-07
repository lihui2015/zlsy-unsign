<template>
    <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">
        <!--<div v-for="i in items">-->
            <!--<div class="bar-item" @click="tabTo(i.key)">-->
                <!--<text class="bar-ic iconfont">{{i.icon}}</text>-->
                <!--<text class="bar-txt">{{i.name}}</text>-->
            <!--</div>-->
        <!--</div>-->

        <div class="bar-item" @click="tabTo('home')">
            <text class="bar-ic iconfont" :class="[this.isActive('home')]">&#xe660;</text>
            <text class="bar-txt" :class="[this.isActive('home')]">首页</text>
        </div>
        <div class="bar-item" @click="tabTo('activity')">
            <text class="bar-ic iconfont" :class="[this.pIndexKey == 'activity'?'bar-active':'']">&#xe744;</text>
            <text class="bar-txt" :class="[this.pIndexKey == 'activity'?'bar-active':'']">活动</text>
            <text class="notice-dot"></text>
        </div>
        <!--<div class="bar-item" @click="tabTo('class')">
            <text class="bar-ic iconfont" :class="[this.isActive('class')]">&#xe605;</text>
            <text class="bar-txt" :class="[this.isActive('class')]">分类</text>
        </div>
        <div class="bar-item" @click="tabTo('shop')">
            <text class="bar-ic iconfont" :class="[this.isActive('shop')]">&#xe61a;</text>
            <text class="bar-txt" :class="[this.isActive('shop')]">购物车</text>
        </div>-->
        <div class="bar-item" @click="tabTo('personal')">
            <text class="bar-ic iconfont" :class="[this.isActive('personal')]">&#xe639;</text>
            <text class="bar-txt" :class="[this.isActive('personal')]">个人</text>
            <text class="i-notice">2</text>
        </div>
    </div>
</template>
<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        position: fixed;
        bottom: 0;
        /*top: 1105px;*/
        left: 0;
        right: 0;
        height: 100px;
        width: 750px;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-around;
        border-top-width: 1px;
        border-top-color: #d9d9d9;
        background-color: #f0f0f0;
    }
    .w-ipx{
        height: 150px;
    }
    .bar-item{
        flex: 1;
    }
    .bar-txt,.bar-ic{
        color:#666;
        text-align: center;
    }
    .bar-active{
        color:#009FF0;
    }
    .bar-ic{
        padding-top: 10px;
        font-size: 42px;
        line-height: 42px;
    }
    .bar-txt{
        font-size: 30px;
        padding-top: 3px;
        line-height: 30px;
    }
    .i-notice{
        position: absolute;
        top:10px;
        right: 55px;
        height: 30px;
        width: 30px;
        border-radius: 100%;
        font-size: 26px;
        line-height: 30px;
        text-align: center;
        color: #fff;
        background-color: #f00;
    }
    .notice-dot{
        position: absolute;
        top:15px;
        right: 73px;
        height: 15px;
        width: 15px;
        border-radius: 100%;
        background-color: #f00;
    }
</style>
<script>

    var modal = weex.requireModule('modal');
    export default {
        props:['router'],
        computed:{
        },
        data () {
            return {
                pIndexKey:this.router
            }
        },
        mounted(){},
        methods: {
            isActive:function (_c) {
                return this.pIndexKey === _c ?'bar-active':''
            },
            tabTo(_key){
                //if(this.pIndexKey === _key) return;
                this.pIndexKey = _key;
                this.$router.push('/'+_key);
                // this.$emit('tabTo',{
                //     status : 'tabTo',
                //     data : {
                //         key : _key
                //     }
                // })
            }
        }
    }
</script>