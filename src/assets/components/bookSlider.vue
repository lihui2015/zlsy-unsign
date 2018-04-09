<template>
    <slider class="slider" auto-play="false" interval="5000" @change="onchange" :infinite="isInfinit" :index="0">
        <div class="frame" v-for="(img,key) in imageList" v-on:swipe="onSwipe($event,key)" :ref="'item'+key">
            <image class="image" resize="contain" :lsrc="img" :src="img" :ref="'img'+key"></image>
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
        bottom: 300px;
        right: 0px;
    }
</style>
<script>
    const dom = weex.requireModule('dom')
    const modal = weex.requireModule('modal')
    export default {
        props:["imageList","isInfinit",'lefthasMore','righthasMore'],
        data () {
            return {
                dir:'right'
            }
        },
        created(){
            //console.log(this.imageList);
            //this.changeImg();
        },
        methods: {
            changeImg(){
                
            },
            onchange (event) {
                var _self = this;
                // modal.toast({
                //     message:this.isInfinit,
                //     duration:1
                //   })
                this.$emit("pageTurn",{index:event.index,dir:_self.dir})
            },
            onSwipe(event,index){
                var _self = this;
                _self.dir = event.direction;
                console.log("index->"+index+",length-1->"+_self.imageList.length);
                //console.log(_self.imageList.length-1);
                if(_self.dir == 'left'){
                    console.log("left");
                    if(index == _self.imageList.length-1){
                        console.log("hh");
                        if(this.lefthasMore){
                            this.$emit("nextPage")
                            console.log("oo");
                            //dom.scrollToElement(this.$refs.item0[0])
                        }
                        //this.isStart = true;
                        return false;
                    }
                    //console.log(next);
                }else if(_self.dir == 'right'){
                    if(index == 0){
                        
                        if(this.righthasMore){
                            this.$emit("prevPage")
                            //dom.scrollToElement(this.$refs.item4[0])
                        }
                        
                        //this.isStart = false;
                        return false;
                    }
                }
            }
        }
    }
</script>