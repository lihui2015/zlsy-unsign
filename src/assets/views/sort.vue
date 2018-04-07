<template>
    <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">
        <header2 title="图书分类" :leftBtn='leftButton'></header2>
        <div class="class-list">
            <scroller>
                <text class="class-txt"  :class="[isActive(i.name)]" v-for="(i,item) in classes" @click="tabClass(i.name,i.id)">{{i.name}}</text>
            </scroller>
        </div>
        <scroller class="main-list" offset-accuracy="300px">
            <refresher></refresher>
            <image class="ad-img" resize="cover" src="http://yanxuan.nosdn.127.net/3ebd7addcc0d101d116052a57cec2f16.png"></image>
            <text class="sub-tlt">{{subTitle}}分类</text>
            <div class="sub-box">
                <div class="sub-i" v-for="i in subclasses">
                    <image class="i-img" resize="cover" :src="i.full_image_url" @click="jump('/list/'+i.id+'/'+i.name)"></image>
                    <text class="i-name">{{i.name}}</text>
                </div>
            </div>
            <!--<loading class="loading" display="hide">-->
                <!--<text class="indicator">Loading ...</text>-->
            <!--</loading>-->
        </scroller>
        <tab-bar @tabTo="onTabTo" router='sort'></tab-bar>
    </div>
</template>
<style scoped>

    .iconfont {
        font-family:iconfont;
    }
    .wrapper{
        background-color: #f4f4f4;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
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
    .class-list{
        width: 162px;
        margin-top: 86px;
        margin-bottom: 100px;
        /*margin-bottom: 220px;*/
        padding-top: 20px;
        border-right-width: 1px;
        border-right-color: #d9d9d9;
        background-color: #fff;
    }
    .class-txt{
        font-size: 32px;
        margin-top: 22px;
        margin-bottom: 26px;
        margin-left: 10px;
        margin-right: 10px;
        text-align: center;
        color:#333;
    }
    .active{
      color: #009FF0;
      border-left-width: 2px;
      border-left-color: #009FF0;
    }
    .main-list{
        flex: 1;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        margin-top: 86px;
        margin-bottom: 100px;
        /*margin-bottom: 220px;*/
        background-color: #fff;
        width: 588px;
    }
    .ad-img{
        width: 532px;
        height: 194px;
        border-radius: 6px;
        margin-top: 28px;
        margin-bottom: 28px;
        margin-left: 28px;
        margin-right: 28px;
    }
    .sub-tlt{
        text-align: center;
        font-size: 34px;
        color:#333;
        margin-top: 10px;
        margin-bottom: 30px;
    }
    .sub-box{
        padding-left: 26px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .sub-i{
        width: 178px;
        height: 200px;
        align-items: center;
    }
    .i-img{
        width: 108px;
        margin-left: 14px;
        margin-right: 14px;
        height: 108px;
        border-radius: 108px;
    }
    .i-name{
        font-size: 32px;
        margin-top: 10px;
        text-align: center;
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
                token: '',
                subID: 0,
                classes: [],
                subclasses:[],
                subTitle: '',
                leftButton: {
                  name: '<'
                }
            }
        },
        created () {
            
            storage.getItem('token',event => {
                this.token = event.data;
                this.GET('books/categories/list/0',this.token, res => {
                    if(res.data.code == 200){
                        let result = res.data.result;
                        this.classes = result;
                        this.subTitle = this.classes[0].name;
                        this.subID = this.classes[0].id;
                        this.getSubClass();
                    }else{
                        modal.toast({
                            message: res.data.code + ":" + _self.token,
                            duration: 3
                        })
                    }
                });
                
            })
        },
        methods: {
            isActive(_str){
                return _str == this.subTitle ? 'active' : '';
            },
            jumpWeb (_url) {
                const url = this.$getConfig().bundleUrl;
                navigator.push({
                    url: util.setBundleUrl(url, 'page/webview.js?weburl='+_url) ,
                    animated: "true"
                });
            },
            tabClass(str,index){
              this.subTitle = str;
              this.subID = index;
              this.getSubClass();
            },
            getSubClass(){
                this.GET('books/categories/list/'+this.subID, this.token, res => {
                    if(res.data.code == 200){
                        let result = res.data.result;
                        this.subclasses = result;
                    }else{
                        modal.toast({
                            message: res.data.code + ":" + _self.token,
                            duration: 3
                        })
                    }
                })
            },
            onTabTo(_result){
                  let _key = _result.data.key || '';
                  this.$router && this.$router.push('/'+_key)
              }
        }
    }
</script>