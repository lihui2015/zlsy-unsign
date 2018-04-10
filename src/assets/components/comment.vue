<template>
  <div class="container">
    <div class="demo">
      <wxc-popup popup-color="rgb(92, 184, 92)"
               :show="open"
               @wxcPopupOverlayClicked="popupOverlayBottomClick"
               pos="bottom"
               height="1245" class="catalog-box" ref="catalogPopup">
      <div class="catalog-content">
        <div class="wrapper">
          <div class="header">
              <div class="left" @click="goBack">
                  <text class="leftTxt iconfont">&#xe697;</text>
              </div>
              <text class="tlt">写评论</text>
              <div class="right">
                  <text class="rightTxt" @click="submit">发表</text>
              </div>
          </div>
          <div class="commentBox">
              <text class="starText">评分</text>
              <div class="starBox">
                  <text class="star" v-for="(i,item) in currentStar" @click="vote(item)">{{i}}</text>
              </div>
          </div>
          <div class="textBox">
            <textarea class="textarea" @input='oninput' placeholder="写下你的评论吧~" disabled='false' @click="focus" ref="textarea"></textarea>
          </div>
      </div>
      </div>
    </wxc-popup>
    <!-- <div class="catalog-box" ref="catalogPopup" :show="open">
      <div class="catalog-content" v-on:swipe="onSwipe($event)">
        <list class="list">
            <cell class="cell" v-for="ca in catalog">
            <div class="panel" @click="goto(ca.startPage,ca.endPage)">
                <text class="text">{{ca.name}}</text>
            </div>
            </cell>
        </list>
      </div>
    </div> -->
    </div>
  </div>
</template>

<style scoped>
    .catalog-box{
        background-color:#ffffff;
    }
    .catalog-content{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color:#ffffff;
    }
    .iconfont {
        font-family:iconfont;
    }
    .header{
        height: 86px;
        padding-top: 0px;
        background-color: #009FF0;
        opacity: .99;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        border-bottom-width: 1px;
        border-bottom-color: #009FF0;
    }
    .tlt{
        flex: 1;
        font-size: 36px;
        padding-top: 0px;
        color:#ffffff;
        text-align: center;
        line-height: 80px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .left,.right{
        height: 80px;
        width: 120px;
        padding-top:10px;
    }
    .left{
        padding-top: 0;
        justify-content: center;
    }
    .right{
        padding-top: 0;
        justify-content: center;
    }
    .leftTxt,.rightTxt{
        font-size: 30px;
        text-align: center;
        color: #ffffff;
    }
    .leftTxt{
        font-size: 46px;
        color: #ffffff;
    }
    .commentBox{
        margin-top: 0px;
        border-bottom-width: 1px;
        border-bottom-color: #009FF0;
        flex-direction: row;
        align-items: center;
        padding-top:20px;
        padding-bottom:20px;
        padding-left:20px;
        padding-right:20px;
    }
    .starText{
        margin-right: 40px;
        font-size: 32px;
        color: #333333;
    }
    .starBox{
        flex-direction: row;
        align-items: center;
    }
    .star{
        font-size: 60px;
        color: orange;
        margin-right: 30px;
        line-height: 60px;
    }
    .textarea{
        placeholder-color: #d8d8d8;
        font-size: 34px;
        width: 700px;
        margin-left: 20px;
        margin-right: 20px;
        padding-top: 20px;
        padding-bottom: 20px;
        color: #666666;
        height: 430px;
    }
    
</style>

<script>
  import { WxcPopup } from 'weex-ui';
import Header2 from './Header2.vue';

  const modal = weex.requireModule('modal');
var storage = weex.requireModule('storage');
  export default {
    props: ['isOpenComment','bookID'],
    data(){
      var _self = this;
    return {
      score: null,
      comment: '',
      token: '',
      startStar: ['☆','☆','☆','☆','☆'],
      currentStar: ['☆','☆','☆','☆','☆'],
      stars: [
          ['★','☆','☆','☆','☆'],
          ['★','★','☆','☆','☆'],
          ['★','★','★','☆','☆'],
          ['★','★','★','★','☆'],
          ['★','★','★','★','★']
      ]
    }
  },
  mounted(){
    // this.bookID = this.$route.params.index;
    storage.getItem('token',event => {
      this.token = event.data;
    })
  },
    computed:{
        open:{
            get:function(){
                return this.isOpenComment;
            },
            set:function(v){
                //this.isOpenComment = v;
            }
        }
    },
    components: { "WxcPopup":WxcPopup,'header2': Header2 },
    methods: {
      //非状态组件，需要在这里关闭
      popupOverlayBottomClick () {
        var _self = this;
        this.open = false;
        this.currentStar = this.startStar;
        this.score = '';
        this.comment = '';
        this.$refs.catalogPopup.hide();
        this.$emit("openComment",{open:false})
      },
      vote(index) {
        this.currentStar = this.stars[index];
        this.score = Number(index + 1);
      },
      oninput(event){
        this.comment = event.value;
      },
      focus(){
          this.$refs.textarea.focus();
      },
      goBack(){
        this.$refs.catalogPopup.hide();
      },
      submit(){
        var _self = this;
        if(!_self.score){
            modal.alert({
                message: '请评分',
                okTitle: '知道了'
            })
            return false;
        }
        if(!_self.comment.length){
            modal.alert({
                message: '请填写评论内容',
                okTitle: '知道了'
            })
            return false;
        }
        var data = JSON.stringify({"score":_self.score,"content":_self.comment});
        _self.POST('books/comment/'+_self.bookID, _self.token, data, res => {
          if (res.data.code == 200){
            modal.toast({
                message: res.data.message+",请等待审核",
                duration: 1
            })
            _self.$refs.catalogPopup.hide();
            //_self.$router.go(-1)
          }else{
            modal.toast({
                message: res.data.message,
                duration: 3
            })
          }
        });
      }
    }
  };
</script>