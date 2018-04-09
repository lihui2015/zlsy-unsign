<template>
    <div class="wrapper">
        <scroller scroll-direction="horizontal" show-scrollbar=false :class="['tp-box',isStart?'start':'end']">
            <div class="i-tp" v-for="(i,key) in topics" v-on:swipe="onSwipe($event,key)" :ref="'item'+key">
                <image class="tp-img" resize="cover" :src="i"></image>
            </div>
        </scroller>
    </div>
</template>
<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        background-color: #fff;
    }

    .tp-box{
        width: 750px;
  height: 1245px;
  flex-direction: row;
    }
    .i-tp{
        width: 750px;
  height: 1245px;
        margin: 10px;
    }
    .tp-img{
        position: absolute;
        top:0;
        left: 0;
        width:750px;
  height: 1245px;
        border-radius: 10px;
        background-color: #f4f4f4;
    }

    .tp-name{
        font-size: 28px;
        margin-left: 20px;
        margin-right: 20px;
        margin-top: 57px;
        overflow: hidden;
        text-align: center;
        color:#fff;
        lines:1;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .start{
        justify-content: flex-start;
    }
    .end{
        justify-content: flex-end;
    }
</style>
<script>
    var dom = weex.requireModule('dom')
    export default {
        props:["topics",'lefthasMore','righthasMore'],
        data () {
            return {
                isStart: true
            }
        },
        methods: {
            scrollStart(event){
              console.log('scrollstart')
            },
            scroll(event){
                //event.preventDefault();
                
                //console.log(event)
            },
            scrollEnd(event){
              console.log('scrollend')
            },
            onSwipe(event,index){
                var _self = this;
                var dir = event.direction;
                var el='';
                //console.log(index);
                if(dir == 'left'){
                    if(index == _self.topics.length-1){
                        this.$emit("nextPage")
                        if(this.lefthasMore){
                            dom.scrollToElement(this.$refs.item0[0])
                        }
                        //this.isStart = true;
                        return false;
                    }
                    var next = "item"+(index+1);
                    el = this.$refs[next][0];
                    //console.log(next);
                }else if(dir == 'right'){
                    console.log(this.righthasMore);
                    if(index == 0){
                        this.$emit("prevPage")
                        if(this.righthasMore){
                            dom.scrollToElement(this.$refs.item4[0])
                        }
                        
                        //this.isStart = false;
                        return false;
                    }
                    var prev = "item"+(index-1);
                    el = this.$refs[prev][0];
                }
                //console.log(el);
                el && dom.scrollToElement(el, {})

            }
        }
    }
</script>