<template>
    <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">
        <header2 :title="name" :leftBtn='leftButton'></header2>
        <scroller class="main-list" >
            <refresher></refresher>
            <div class="book-list">
                <div class="sub-i" v-for="i in booklist">
                    <image class="i-img" resize="cover" :src="i.full_cover" @click="jump('/bookDetail/'+i.id+'/'+i.book_name)"></image>
                    <div class="text-box">
                        <text class="i-name" @click="jump('/bookDetail/'+i.id+'/'+i.book_name)">{{i.book_name}}</text>
                        <text class="i-author">作者：{{i.author}}</text>
                        <text class="i-dec" @click="jump('/bookDetail/'+i.id+'/'+i.book_name)">{{i.description}}</text>
                    </div>
                    
                </div>
            </div>
            <loading :class="['loading',loadinging ? 'show' : 'hide']" @loading="onloading">
              <loading-indicator class="indicator"></loading-indicator>
            </loading> 
            <!--<loading class="loading" display="hide">-->
                <!--<text class="indicator">Loading ...</text>-->
            <!--</loading>-->
        </scroller>
        <tab-bar @tabTo="onTabTo" router='list'></tab-bar>
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
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        margin-top: 86px;
        margin-bottom: 100px;
        /*margin-bottom: 220px;*/
        background-color: #fff;
        width: 750px;
    }
    .book-list{
        padding-left: 20px;
        padding-right: 20px;
        overflow: hidden;
    }
    .sub-i{
        border-top-width: 1px;
        border-top-color: #666666;
        padding-top: 30px;
        padding-bottom: 30px;        
        flex-direction: row;
        flex-wrap: nowrap;
        margin-top: -1px;
    }
    .text-box{
        width: 461px;
        text-align: left;
    }
    .i-img{
        width: 199px;
        height: 293px;
        margin-right: 20px;
        margin-left: 20px;
    }
    .i-name{
        font-size: 34px;
        color: #101010;
        text-align: left;
        margin-top: 10px;
    }
    .i-author{
        font-size: 32px;
        color: #787878;
        text-align: left;
        margin-top: 10px;
    }
    .i-dec{
        font-size: 32px;
        color: #787878;
        margin-top: 10px;
    }   
    .loading {
        width: 750;
        display: -ms-flex;
        display: -webkit-flex;
        display: flex;
        -ms-flex-align: center;
        -webkit-align-items: center;
        -webkit-box-align: center;
        align-items: center;
    }
    .indicator-text {
        color: #888888;
        font-size: 42px;
        text-align: center;
    }
    .indicator {
        margin-top: 16px;
        height: 40px;
        width: 40px;
        color: blue;
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
    import refresher from '../components/refresh.vue';
    import Header2 from '../components/Header2.vue';
    import tabBar from '../components/tabBar.vue';
    var navigator = weex.requireModule('navigator')
    var storage = weex.requireModule('storage')
    var modal = weex.requireModule('modal')
    export default {
        components: {
            'tab-bar': tabBar,
            'refresher': refresher,
            'header2': Header2
        },
        data () {
            return {
                booklist: [],
                name: '',
                token: '',
                listID: 1,
                current_page: 1,
                total: 1,
                loadinging: false,
                hasNomare: false,
                leftButton: {
                    name:"<"
                }
            }
        },
        created () {
            this.name = this.$route.params.name;
            storage.getItem('token',event => {
                this.token = event.data;
                this.listID = this.$route.params.index;
                this.getList()
            })
        },
        methods: {
            getList(){
                var _self = this;
                var url = '';
                if(this.listID == 0){
                    url = 'books/chosen/0?page='+this.current_page
                }else{
                    url = 'books/categories/child/'+this.listID+'?page='+this.current_page
                }
                this.GET(url, this.token, res => {
                    this.loadinging = false;
                    if(res.data.code == 200){
                        let result = res.data.result;
                        for(let i = 0; i<result.data.length; i++){
                          this.booklist.push(result.data[i])
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
            onloading (event) {
                var _self = this;
                if(_self.hasNomare){
                  modal.toast({ message: '没有更多书籍', duration: 1 })
                  return false;
                }
                modal.toast({ message: 'Loading', duration: 1 })
                this.loadinging = true;
                this.getList();
              },
              onTabTo(_result){
                  let _key = _result.data.key || '';
                  this.$router && this.$router.push('/'+_key)
              }
        }
    }
</script>