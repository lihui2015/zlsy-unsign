<template>
    <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">
        <header2 title="西游记" :leftBtn='leftButton'></header2>
        <scroller class="main" offset-accuracy="300px">
            <refresher></refresher>
            <div class="book-detail">
              <image class="i-img" resize="cover" :src="detail.img"></image>
              <div class="detail">
                <text class="i-name">{{detail.tlt}}</text>
                <div class="star-bar star-bar-show size-S f-l va-m mr-10">
                  <div class="star" :data-star="detail.classes"></div>
                </div>
                <text class="i-author">作者：{{detail.author}}</text>
                <text class="i-count">{{detail.count}}人阅读</text>
                <div class="shareBox">
                  <text class="i-collect">&#xe744; 收藏</text>
                  <text class="i-share">&#xe744; 分享</text>
                </div>
                <text class="i-read" @click="jump('/book')">立即阅读</text>
              </div>
            </div>
            <div class="relative-activity section-box">
              <text class="activity-tag section">&#xe744; 相关活动</text>
              <scroller class="activity-box" scroll-direction="horizontal" show-scrollbar=false>
                <div class="activity-item" v-for="act in detail.activity">
                  <image class="act-img" :src="act.image"></image>
                  <text class="act-title">{{act.title}}</text>
                </div>
              </scroller>
            </div>
            <div class="book-desc section-box">
              <text class="desc-tag section">&#xe744; 书籍简介</text>
              <text class="desc-content">{{detail.descripe}}</text>
            </div>
            <div class="book-comment section-box">
              <div class="comment-header section">
                <text class="comment-tag">&#xe744; 读书评论</text>
                <text class="comment-btn">我要评论</text>
              </div>
              <div class="comment-item" v-for="item in detail.comment">
                <text class="comment-content">{{item.content}}</text>
                <div class="comment-detail">
                  <div class="comment-author">
                    <image class="comment-author-img" :src="item.img"></image>
                    <text class="comment-author-name">{{item.name}}</text>
                  </div>
                  <div class="star-bar">
                    <div class="star" :data-star="item.classes"></div>
                  </div>
                </div>
              </div>
            </div>
            <!--<loading class="loading" display="hide">-->
                <!--<text class="indicator">Loading ...</text>-->
            <!--</loading>-->
        </scroller>
    </div>
</template>
<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        background-color: #f4f4f4;
    }
    .w-ipx{
        margin-top: 40px;
        margin-bottom: 50px;
    }
    .main{
        flex: 1;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        margin-top: 86px;
        margin-bottom: 90px;
        background-color: #fff;
    } 
    .book-detail{
      flex-direction: row;
      flex-wrap: nowrap;
      padding: 20px 0 20px 20px;
    }
    .i-img{
      width: 234px;
      height: 310px;
      margin-right: 30px;
    }
    .detail{
      flex-direction: column;
    }
    .i-name{
      color: #101010;
      font-size: 34px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-top: 10px;
    }
    .i-author{
      color: #787878;
      font-size: 32px;
      margin-top: 10px;
    }
    .i-count{
      color: #787878;
      font-size: 32px;
      margin-top: 10px;
    }
    .shareBox{
      flex-direction: row;
      color: #101010;
      font-size: 34px;
      margin-top: 10px;
    }
    .i-collect{
      margin-right: 40px;
    }
    .i-share{}
    .i-read{
      background-color: #8BC34A;
      font-size: 32px;
      color: #ffffff;
      width: 343px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      border-radius: 10px;
      margin-top: 10px;
    }

    .section-box{
      border-top-width: 1px;
      border-top-color: #333333;
      padding: 0 0 10px 0;
    }
    .section{
      color: #101010;
      font-size: 34px;
      background-color: #eeeeee;
      height: 80px;
      line-height: 80px;
      padding-left: 20px;
      padding-right: 20px;
    }
    .relative-activity{
      
    }
    .activity-tag{
      
    }
    .activity-box{
      width: 750px;
      height: 220px;
      flex-direction: row;
      padding-top: 20px;
      padding-bottom: 20px;
      padding-left: 15px;
      padding-right: 15px;
    }
    .activity-item{
      position: relative;
      width: 345px;
      height: 180px;
      margin-right: 30px;
    }
    .act-img{
      width: 345px;
      height: 180px;
    }
    .act-title{ 
      width: 345px;
      position: absolute;
      left: 0;
      top: 70px;
      padding: 0 20px;
      text-align: center;
      color:#101010;
      font-size: 32px;
      lines: 1;
    }

    .book-desc{
    }
    .desc-tag{
    }
    .desc-content{
      padding: 10px 20px;
      font-size: 32px;
      color: #101010;
      line-height: 40px;
    }

    .book-comment{
    }
    .comment-header{
      width: 750px;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .comment-tag{
      color: #101010;
      font-size: 34px;
    }
    .comment-btn{
      border-radius: 10px;
      border-width: 1px;
      border-color: #101010;
      color: #101010;
      width: 144px;
      height: 54px;
      text-align: center;
      line-height: 54px;
    }
    .comment-item{
      border-bottom-width: 1px;
      border-bottom-color: #cccccc;
      padding: 20px 20px;
    }
    .comment-content{
      color: #101010;
      font-size: 32px;
      line-height: 40px;
    }
    .comment-detail{
      padding-top: 20px;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
    }
    .comment-author{
      flex-direction: row;
      flex-wrap: nowrap;
      align-items: center;
    }
    .comment-author-img{
      width: 43px;
      height: 43px;
      border-radius: 43px;
      margin-right: 10px;
    }
    .comment-author-name{
      color: #666666;
      font-size: 32px;
    }

    .detail .star-bar{
      margin-top: 10px;
    }
    .star-bar {
      width: 160px;
      height: 32px;
      font-size: 0;
      line-height: 0;
      background-image: url('http://static.h-ui.net/h-ui/3.1/images/star/iconpic-star-S-default.png');
      background-repeat: repeat-x;
      background-position: 0 0;
      background-size: 32px;
    }

    .star-bar .star {
      display: inline-block;
      text-align: center;
      background-image: url('http://static.h-ui.net/h-ui/3.1/images/star/iconpic-star-S.png');
      background-repeat: repeat-x;
      background-position: 0 0;
      height: 32px;
      background-size: 32px;
      width: 160px;
    }   
    .star[data-star$='0.5']{
      width: 16px;
    }
    .star[data-star^='1']{
      width: 32px;
    }
    .star[data-star^='1.5']{
      width: 48px;
    }
    .star[data-star^='2']{
      width: 64px;
    }
    .star[data-star^='2.5']{
      width: 80px;
    }
    .star[data-star^='3']{
      width: 96px;
    }
    .star[data-star^='3.5']{
      width: 112px;
    }
    .star[data-star^='4']{
      width: 128px;
    }
    .star[data-star^='4.5']{
      width: 144px;
    }
    .star[data-star^='5']{
      width: 160px;
    }
     
</style>

<script>
    import util from '../util';
    import refresher from '../components/refresh.vue';
    import Header2 from '../components/Header2.vue';
    var navigator = weex.requireModule('navigator')
    export default {
        components: {
            'refresher': refresher,
            'header2': Header2
        },
        data () {
            return {
                detail: {},
                leftButton: {
                    name:"<"
                }
            }
        },
        created () {
            this.GET('api/class/bookDetail.json', res => {
                let result = res.data.result;
                this.detail = result['detail'];
            });
        },
        methods: {
        }
    }
</script>