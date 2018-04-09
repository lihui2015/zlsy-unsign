<template>
    <div class="commen-cell">
        <div class="auther-box" @click="jump('/themeDetail/'+commen.id)">
            <image class="auther-img" resize="cover" :src="commen.readers.full_avatar"></image>
            <div class="auther-detail">
                <text class="auther-name">{{commen.readers.name}}</text>
                <text class="auther-time">{{commen.readers.created_at}}</text>
            </div>
        </div>
        <div class="tlt-box" @click="jump('/themeDetail/'+commen.id)">
            <text class="tlt">{{commen.title}}</text>
        </div>
        <div class="description-box" @click="jump('/themeDetail/'+commen.id)">
            <text class="description">{{commen.description}}</text>
        </div>
        <div class="img-box">
            <image class="main-img" v-for="img in commen.html_image" :src="img" resize="cover"></image>
        </div>
        <div class="wedge-box">
            <div class="wedge-commen wedge" @click="jump('/themeDetail/'+commen.id)">
                <text class="iconfont">&#xe744;</text>
                <text class="wedge-text">评论</text>
            </div>
            <div class="wedge-like wedge" v-if="isLike == 1">
                <text class="iconfont active">&#xe744;</text>
                <text class="wedge-text active">{{commen.up}}</text>
            </div>
            <div class="wedge-like wedge" @click="like(commen.id)" v-else>
                <text class="iconfont">&#xe744;</text>
                <text class="wedge-text">赞</text>
            </div>
            <!-- <div class="wedge-share wedge">
                <text class="iconfont">&#xe744;</text>
                <text class="wedge-text">转发</text>
            </div> -->
        </div>
    </div>
</template>
<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .commen-cell{
        background-color: #ffffff;
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 20px;
        padding-right: 20px;
    }
    .auther-box{
        flex-direction: row;
    }
    .auther-img{
        border-radius: 10px;
        width: 60px;
        height: 60px;
        margin-right: 20px;
    }
    .auther-detail{
        width: 400px;
    }
    .auther-name{
        font-size: 34px;
        line-height: 34px;
        color: #666666;
    }
    .auther-time{
        font-size: 30px;
        line-height: 32px;
        margin-top: 10px;
        color: #888888;
    }
    .tlt-box{
        margin-top:20px;
        padding-left: 10px;
        padding-right: 10px;
    }
    .tlt{
        font-size: 36px;
        color: #666666;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 600px;
    }
    .description-box{
        margin-top: 10px;
        padding-left: 10px;
        padding-right: 10px;
        
    }
    .description{
        color: #888888;
        font-size: 32px;
        line-height: 48px;
    }
    .img-box{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        margin-top: 20px;
        margin-bottom: 10px;
    }
    .main-img{
        width: 200px;
        height: 200px;
        margin-right: 10px;
    }
    .wedge-box{
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        margin-top: 20px;
    }
    .wedge{
        flex-direction: row;
        align-items: center;
    }
    .wedge-text{
        font-size: 30px;
        color: #9d9d9d;
        margin-left: 10px;
    }
    .iconfont{
        color: #9d9d9d;
        font-size: 40px;
    }
    .active{
        color: #009FF0;
    }
    .wedge-commen{}
    .wedge-like{}
    .wedge-share{}
</style>
<script>
    var navigator = weex.requireModule('navigator')
    var storage = weex.requireModule('storage')
    var modal = weex.requireModule('modal')
    import { WxcTag } from 'weex-ui';
    import util from '../util';
    export default {
        props:["commen"],
        components: { WxcTag },
        data(){
            return {
                img: 'http://www.imbawin.com/storage/avatar/2018/04/02/tdsPjcjh5HpziRd23S5A5P8sSKjkzNbCu5CAg1Py.jpg',
                token:'',
                isLike:''
            }
        },
        created(){
            this.isLike = this.commen.ups_count;
            if(!this.commen.description){
                if(this.commen.content.length > 60){
                    this.commen.description = this.commen.content.substring(0,60) + '...'
                }else{
                    this.commen.description = this.commen.content
                }
            }
        },
        methods: {
            like (id) {
                var _self = this;
                if(this.isLike == 1){
                    return false;
                }
                storage.getItem('token',event => {
                    this.token = event.data;
                    this.POST('posts/up/' + id, this.token, '', res => {
                        if(res.data.code == 200){
                            this.commen.up = Number(this.commen.up) + 1;
                            this.isLike = 1;
                            // if(this.isLike == 1){
                            //     this.isLike = 0;
                            // }else{
                            //     this.isLike = 1;
                            // }
                        }else{
                            modal.toast({
                                message: res.data.code + ":" + _self.token,
                                duration: 3
                            })
                        }
                    })
                })
            }
        }
    }
</script>