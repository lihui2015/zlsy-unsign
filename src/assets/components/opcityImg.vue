<template>
    <div class="wrapper">
        <div :class="['tp-box',isStart?'start':'end']">
            <div :class="['test']" ref="test">
                <div class="i-tp" v-for="(img,index) in topics" v-on:swipe="onSwipe($event,index)" :ref="'item'+index">
                    <image class="tp-img" resize="contain" :src="img"></image>
                </div>
            </div>
            <!--<div class="i-tp" v-for="m in more">
                <image class="tp-img" resize="cover" :src="m"></image>
            </div>-->
        </div>
    </div>
</template>
<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        background-color: #fff;
        width: 750px;
        height: 1245px;
    }
    .tp-box{
        width: 750px;
        height: 1245px;
        overflow:hidden;
        position: relative;
    }
    .test{
        /*width: 750px;
  height: 1245px;*/
 /* width:3750px;
  margin-left:0px;
  flex-direction: row;*/
  width: 750px;
        height: 1245px;
  position:relative;
    }
    .i-tp{
        width: 750px;
  height: 1245px;
  position: absolute;
        top:0;
        left: 0;
    }
    .tp-img{
        position: absolute;
        top:0;
        left: 0;
        width:750px;
  height: 1245px;
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
    const animation = weex.requireModule('animation')
  const modal = weex.requireModule('modal')
    export default {
        props:["topics",'lefthasMore','righthasMore','more'],
        data () {
            return {
                isStart: true,
                leftSize:0,
                size: {
                  "width": 0,
                  "height": 0,
                  "top": 0,
                  "bottom": 0,
                  "left": 0,
                  "right": 0
                },
                isFirst:true
            }
        },
        created(){
            //console.log(this.topics)
        },
        methods: {
            onSwipe(event,index){
                var _self = this;
                var dir = event.direction;
                var el = this.$refs.test;
                var move = 0;
                console.log("index->"+index+',length->'+(_self.topics.length-1));
                if(dir == 'left'){
                    if(index == _self.topics.length-1){
                        this.$emit("nextPage")
                        if(this.lefthasMore){
                            animation.transition(el, {
                              styles: {
                                transform: 'translate(0px, 0px)',
                                transformOrigin: 'center center'
                              },
                              duration: 0, //ms
                              timingFunction: 'ease',
                              delay: 0 //ms
                            })
                        }
                        //this.isStart = true;
                        return false;
                    }
                    var next = index+1;
                    move = -(750*next);
                    // if(index == 0){
                    //     _self.size.left = 0;
                    // }
                    //move = _self.size.left - 750;
                    //el = this.$refs[next][0];
                    //console.log(next);
                }else if(dir == 'right'){
                    if(index == 0){
                        this.$emit("prevPage")
                        if(this.righthasMore){
                            var rightStart = (this.topics.length - 1) * 750
                            animation.transition(el, {
                              styles: {
                                transform: 'translate(-'+rightStart+'px, 0px)',
                                transformOrigin: 'center center'
                              },
                              duration: 0, //ms
                              timingFunction: 'ease',
                              delay: 0 //ms
                            })
                        }
                        //this.isStart = false;
                        return false;
                    }
                    var prev = index-1;
                    move = -(750*prev);
                    //move = _self.size.left + 750;
                    //el = this.$refs[prev][0];
                }
                //console.log(el);
                
                //var move = -750;
                animation.transition(el, {
                  styles: {
                    transform: 'translate('+move+'px, 0px)',
                    transformOrigin: 'center center'
                  },
                  duration: 200, //ms
                  timingFunction: 'ease',
                  delay: 0 //ms
                })
                //el && dom.scrollToElement(el, {})

            }
        }
    }
</script>