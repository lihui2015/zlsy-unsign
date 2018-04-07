<template>
    <div class="selected-cell"  @click="jump('/themeDetail/'+selecte.id)">
        <wxc-tag type="solid" tag-color="#009FF0" font-color="#ffffff" value="置顶" class="tag"></wxc-tag>
        <text class="title">{{selecte.title}}</text>
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
        flex-direction: row;
        align-items: center;
        border-bottom-width: 1px;
        border-color: #cccccc;
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