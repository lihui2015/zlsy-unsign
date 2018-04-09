<template>
    <slider class="slider" auto-play="false" interval="5000" @change="onchange" infinite="false" keep-index="true">
        <div class="frame" v-for="(img,i) in imageList">
            <image class="image" resize="contain" :lsrc="img" :src="img" :ref="'img'+i"></image>
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
        height: 1245px;
    }
    .slider {
        width: 750px;
        height: 1245px;
    }
    .frame {
        width: 750px;
        height: 1245px;
        position: relative;
    }
    .indicator {
        width: 750px;
        height: 40px;
        item-color: #000000;
        item-selected-color: #b4282d;
        item-size: 12px;
        position: absolute;
        bottom: 10px;
        right: 0px;
    }
</style>
<script>
    const dom = weex.requireModule('dom')
    export default {
        props:["imageList"],
        data () {
            return {
            }
        },
        created(){
            console.log(this.imageList);
            this.changeImg();
        },
        methods: {
            changeImg(){
                
            },
            onchange (event) {
                this.$emit("pageTurn",{index:event.index})
            }
        }
    }
</script>