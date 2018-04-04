<template>
    <slider class="slider" auto-play="true" interval="5000" @change="onchange" infinite="false">
        <div class="frame" v-for="img in imageList">
            <image class="image" resize="cover" :src="img.src"></image>
            <text class="image-title">{{img.title}}</text>
        </div>
        <indicator class="indicator"></indicator>
    </slider>
</template>
<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .image {
        width: 750px;
        height: 430px;
    }
    .slider {
        width: 750px;
        height: 430px;
    }
    .frame {
        width: 750px;
        height: 430px;
        position: relative;
    }
    .indicator {
        width: 750px;
        height: 40px;
        item-color: white;
        item-selected-color: #b4282d;
        item-size: 12px;
        position: absolute;
        bottom: 10px;
        right: 0px;
    }
    .image-title{
        position: absolute;
        width: 750px;
        padding-right:20px;
        padding-left:20px;
        text-align: center;
        top: 200px;
        left: 0;
        color: #FF4081;
        font-size: 38px;
        font-weight: bold;
    }
</style>
<script>
    export default {
        props:["imageList"],
        data () {
            return {
            }
        },
        methods: {
            onchange (event) {
            }
        }
    }
</script>