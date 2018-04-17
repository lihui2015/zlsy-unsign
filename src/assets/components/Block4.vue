<template>
    <div class="selected-cell"  @click="jump('/themeDetail/'+selecte.id)">
        <div class="title-box">
            <wxc-tag type="solid" tag-color="#009FF0" font-color="#ffffff" value="置顶" class="tag"></wxc-tag>
            <text class="title">{{selecte.title}}</text>
        </div>
        <div class="description-box">
            <text class="description">{{selecte.description}}</text>
        </div>
        <div class="img-box">
            <image class="main-img" v-for="img in selecte.html_image" :src="img" resize="cover"></image>
        </div>
    </div>
</template>
<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .selected-cell{
        background-color: #fff;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 20px;
        padding-right: 20px;
        
        border-bottom-width: 1px;
        border-color: #cccccc;
    }
    .title-box{
        flex-direction: row;
        align-items: center;
    }
    .tag{
        font-size: 32px;
        margin-right: 20px;
        margin-left: 20px;
    }
    .title{
        font-size: 34px;
        color: #000000;
    }
</style>
<script>
    var navigator = weex.requireModule('navigator')
    import { WxcTag } from 'weex-ui';
    import util from '../util';
    export default {
        props:["selecte"],
        components: { WxcTag },
        created(){
        },
        methods: {
        }
    }
</script>