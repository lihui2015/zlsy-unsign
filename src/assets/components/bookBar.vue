<template>
    <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">

        <div class="bar-item" @click="toggleCatalog()">
            <text class="bar-ic iconfont" :class="[]">&#xe65f;</text>
            <text class="bar-txt" :class="[]">目录</text>
        </div>
        <div class="bar-item" @click="collect(collectTag)">
            <text class="bar-ic iconfont icon-collect" :class="[isCol == 1?'bar-active':'']">&#xe604;</text>
            <text class="bar-txt" :class="[isCol == 1?'bar-active':'']">收藏</text>
        </div>
        <div class="bar-item" @click="toggleComment">
            <text class="bar-ic iconfont icon-comment">&#xe608;</text>
            <text class="bar-txt">评论</text>
        </div>
    </div>
</template>
<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        position: fixed;
        bottom: 0;
        /*top: 1105px;*/
        left: 0;
        right: 0;
        height: 100px;
        width: 750px;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-around;
        background-color: #009FF0;
    }
    .w-ipx{
        height: 150px;
    }
    .bar-item{
        flex: 1;
    }
    .bar-txt,.bar-ic{
        color:#ffffff;
        text-align: center;
    }
    .bar-active{
        color:red;
    }
    .bar-ic{
        padding-top: 10px;
        font-size: 42px;
        line-height: 42px;
    }
    .bar-txt{
        font-size: 30px;
        padding-top: 3px;
        line-height: 30px;
    }
    .icon-collect{
        font-size: 44px;
    }
    .icon-comment{
        font-size: 46px;
    }
</style>
<script>

    var modal = weex.requireModule('modal');
    var storage = weex.requireModule('storage');
    export default {
        props:['bookID','collectTag'],
        computed:{
        },
        data () {
            return {
                token:'',
                isCol:''
            }
        },
        created(){
            this.isCol = this.collectTag;
            storage.getItem('token',event => {
              this.token = event.data;
            })
        },
        methods: {
            toggleCatalog(){
                this.$emit("toggleOpen");
            },
            toggleComment(){
                this.$emit("toggleComment")
            },
            collect(isCollected){
                if(isCollected == 1){
                return false;
                }
                var _self = this;
                var data = '';
                this.POST('books/collect/'+this.bookID, this.token, data, res => {
                    if (res.data.code == 200){
                        _self.isCol = 1;
                        modal.toast({
                            message: res.data.message,
                            duration: 1
                        })
                    }else{
                        modal.toast({
                            message: res.data.message,
                            duration: 3
                        })
                    }
                })
          }
        }
    }
</script>