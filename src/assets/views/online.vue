<template>
    <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">
        <header2  :title="name" :leftBtn='leftBtn' :rightBtn="rightBtn"></header2>
        <scroller class="main-list" offset-accuracy="300px">
            <refresher></refresher>
            <div class="selected">
              <div v-for="se in selected" class="selected-item">   
                <block-4 :selecte="se"></block-4>
              </div>
            </div>
            <div class="commen">
              <div v-for="co in commens" class="commen-item cell-button">
                  <block-5 :commen="co"></block-5>
              </div>
            </div>
            <loading @loading="onloading" :class="['loading',loadinging ? 'show' : 'hide']">
               <loading-indicator class="indicator"></loading-indicator>
             </loading> !
        </scroller>
    </div>
</template>
<style scoped>

    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        background-color: #f4f4f4;
        position: absolute;
        top:0px;
        bottom:0px;
        left:0px;
        right:0px;
    }
    .w-ipx{
        margin-top: 40px;
        margin-bottom: 50px;
    }
    .main-list{
        margin-top: 86px;
        background-color: #f4f4f4;
        margin-bottom: 0px;
        /*margin-bottom: 120px;*/
    }
    .cell-button{
        padding-bottom: 18px;
    }
    .commen-item{
      background-color: #f4f4f4;
    }
    .selected{
      background-color: #f4f4f4;
      padding-bottom: 18px;
    }
    .show{
        opacity: 1;
    }
    .hide{
        opacity: 0;
    }
</style>

<script>
    import util from '../util';
    import Header2 from '../components/Header2.vue';
    import refresher from '../components/refresh.vue';
    import Block5 from '../components/Block5.vue';
    import Block4 from '../components/Block4.vue';
    import { WxcTag } from 'weex-ui';
    var navigator = weex.requireModule('navigator')
    var storage = weex.requireModule('storage')
    var modal = weex.requireModule('modal')
    export default {
        data () {
          var _self = this;
            return {
                name:'',
                leftBtn:{
                  name: '<'
                },
                rightBtn:{
                  name: '发帖',
                  fun: function(){
                    _self.$router.push('/postCreate/'+_self.listID);
                  }
                },
                articles:[],
                selected:[],
                commens:[],
                token: '',
                listID: 1,
                current_page: 1,
                total: 1,
                loadinging: false,
                hasNomare: false
            }
        },
        components: {
            'header2': Header2,
            'refresher': refresher,
            'block-5': Block5,
            'block-4': Block4,
            'WxcTag':WxcTag
        },
        created () {
            this.name = this.$route.params.name;
            this.listID = this.$route.params.index;
            storage.getItem('token',event => {
                this.token = event.data;
                this.getSelectedList();
                this.getCommenList()
                // this.getCommen()
            })
        },
        methods: {
          getSelectedList(){
              var _self = this;
              this.GET('posts/chosen/'+_self.listID+'/2', _self.token, res => {
                if(res.data.code == 200){
                  let result = res.data.result;
                  _self.selected = result;
                }else{
                  modal.toast({
                      message: res.data.code + ":" + _self.token,
                      duration: 3
                  })
                }
              })
            },
            getCommen(){
              var _self = this;
              this.testGET('api/activity/commen',res =>{
                if(res.data.code == 200){
                        let result = res.data.result;
                        for(let i = 0; i<result.data.length; i++){
                          this.commens.push(result.data[i])
                        }
                        this.total = this.last_page;
                        if(result.last_page = result.current_page){
                          //最后一页
                          _self.hasNomare = true;
                        }else if(result.last_page > result.current_page){
                          //非最后一页
                          this.current_page = result.current_page + 1;
                        }
                        
                    }else{
                        modal.toast({
                            message: res.data.code + ":" + _self.token,
                            duration: 3
                        })
                    }
              })
            },
            getCommenList(){
                var _self = this;
                this.GET('posts/list/'+_self.listID+'/?page='+this.current_page, this.token, res => {
                    this.loadinging = false;
                    if(res.data.code == 200){
                        let result = res.data.result;
                        for(let i = 0; i<result.data.length; i++){
                          this.commens.push(result.data[i])
                        }
                        this.total = this.last_page;
                        if(result.last_page == result.current_page){
                          //最后一页
                          _self.hasNomare = true;
                        }else if(result.last_page > result.current_page){
                          //非最后一页
                          this.current_page = result.current_page + 1;
                        }
                        
                    }else{
                        modal.toast({
                            message: res.data.code + ":" + _self.token,
                            duration: 3
                        })
                    }
                })
            },
            onloading () {
                var _self = this;
                if(_self.hasNomare){
                  modal.toast({ message: '没有更多帖子', duration: 1 })
                  return false;
                }
                modal.toast({ message: 'Loading', duration: 1 })
                this.loadinging = true;
                this.getCommenList();
            },
        }
    }
</script>