<template>
    <div class="wrapper">
        <div :class="['tp-box',isStart?'start':'end']">
            <div :class="['test']" ref="test">
                <div class="i-tp" v-for="(i,key) in topics" v-on:swipe="onSwipe($event,key)" :ref="'item'+key">
                <image class="tp-img" resize="cover" :src="i"></image>
            </div>
            </div>
            
        </div>
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
    }
    .test{
        /*width: 750px;
  height: 1245px;*/
  width:3750px;
  margin-left:0px;
  flex-direction: row;
    }
    .i-tp{
        width: 750px;
  height: 1245px;
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
        props:["topics",'lefthasMore','righthasMore'],
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
            console.log(this.topics)
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
                var el = this.$refs.test;
                var move = 0;
                if(!_self.isFirst){
                    const result = dom.getComponentRect(el, option => {
                        _self.size = option.size;
                    });
                }
                _self.isFirst = false;
                console.log(_self.size.left);
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
                    // var next = index+1;
                    // move = -(750*next);
                    if(index == 0){
                        _self.size.left = 0;
                    }
                    move = _self.size.left - 750;
                    //el = this.$refs[next][0];
                    //console.log(next);
                }else if(dir == 'right'){
                    if(index == 0){
                        this.$emit("prevPage")
                        if(this.righthasMore){
                            // animation.transition(el, {
                            //   styles: {
                            //     transform: 'translate(-3000px, 0px)',
                            //     transformOrigin: 'center center'
                            //   },
                            //   duration: 0, //ms
                            //   timingFunction: 'ease',
                            //   delay: 0 //ms
                            // })
                        }
                        
                        //this.isStart = false;
                        return false;
                    }
                    // var prev = index-1;
                    // move = 750*prev;
                    move = _self.size.left + 750;
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