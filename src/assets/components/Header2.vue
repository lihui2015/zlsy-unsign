<template>
    <div :class="['wrapper']">
        <div class="left" @click="goBack">
            <text class="leftTxt" v-if="leftBtn">{{leftBtn.name}}</text>
        </div>
        <text class="tlt">{{title}}</text>
        <div class="right">
            <text class="rightTxt" v-if="rightBtn">{{rightBtn.name}}</text>
        </div>
    </div>
</template>
<style scoped>
    .wrapper{
        position: fixed;
        top: 0;
        left: 0;right: 0;
        height: 86px;
        padding-top: 0px;
        background-color: #f8f8f8;
        opacity: .99;
        z-index: 101;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-around;
        border-bottom-width: 1px;
        border-bottom-color: #d9d9d9;
    }
    .w-ipx{
        height: 154px;
        padding-top: 84px;
    }
    .tlt{
        flex: 1;
        font-size: 36px;
        padding-top: 0px;
        color:#333;
        text-align: center;
        line-height: 80px;
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
    .leftTxt,.rightTxt{
        font-size: 30px;
        text-align: center;
    }
    .leftTxt{
        font-size: 34px;
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