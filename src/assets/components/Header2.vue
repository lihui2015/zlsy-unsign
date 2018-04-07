<template>
    <div :class="['wrapper']">
        <div class="left" @click="goBack">
            <text class="leftTxt" v-if="leftBtn">{{leftBtn.name}}</text>
        </div>
        <text class="tlt">{{title}}</text>
        <div class="right">
            <text class="rightTxt" v-if="rightBtn" @click="rightBtn.fun">{{rightBtn.name}}</text>
        </div>
    </div>
</template>
<style scoped>
    .wrapper{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 86px;
        padding-top: 0px;
        background-color: #009FF0;
        opacity: .99;
        z-index: 101;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        border-bottom-width: 1px;
        border-bottom-color: #009FF0;
    }
    .w-ipx{
        height: 154px;
        padding-top: 84px;
    }
    .tlt{
        flex: 1;
        font-size: 36px;
        padding-top: 0px;
        color:#ffffff;
        text-align: center;
        line-height: 80px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .left,.right{
        height: 80px;
        width: 120px;
        padding-top:10px;
    }
    .left{
        padding-top: 0;
        justify-content: center;
    }
    .right{
        padding-top: 0;
        justify-content: center;
    }
    .leftTxt,.rightTxt{
        font-size: 30px;
        text-align: center;
        color: #ffffff;
    }
    .leftTxt{
        font-size: 34px;
        color: #ffffff;
    }
</style>
<script>
    export default {
        props:['title','leftBtn','rightBtn'],
        data () {
            return {
            }
        },
        methods: {
            goBack: function(){
                this.$router.go(-1)
            }
        }
    }
</script>