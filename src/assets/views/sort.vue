<template>
    <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">
        <header2 title="图书分类" :leftBtn='leftButton'></header2>
        <div class="class-list">
            <scroller>
                <text class="class-txt"  :class="[isActive(i)]" v-for="(i,item) in classes" @click="tabClass(i)">{{i}}</text>
            </scroller>
        </div>
        <scroller class="main-list" offset-accuracy="300px">
            <refresher></refresher>
            <image class="ad-img" resize="cover" src="http://yanxuan.nosdn.127.net/3ebd7addcc0d101d116052a57cec2f16.png"></image>
            <text class="sub-tlt">{{subTitle}}分类</text>
            <div class="sub-box">
                <div class="sub-i" v-for="i in subclasses" @click="jump('/list')">
                    <image class="i-img" resize="contain" :src="i.img"></image>
                    <text class="i-name">{{i.name}}</text>
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
        display: flex;
        flex-wrap: nowrap;
        flex-direction: row;
    }
    .w-ipx{
        margin-top: 40px;
        margin-bottom: 50px;
    }
    .class-list{
        width: 162px;
        margin-top: 86px;
        margin-bottom: 90px;
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
    .class-txt.active{
      color: #A2313E;
      border-left-width: 2px;
      border-left-color: #A2313E;
    }
    .main-list{
        flex: 1;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        margin-top: 86px;
        margin-bottom: 90px;
        background-color: #fff;
    }
    .ad-img{
        width: 532px;
        height: 194px;
        border-radius: 6px;
        margin: 28px;
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
    var navigator = weex.requireModule('navigator')
    export default {
        components: {
            'refresher': refresher,
            'header2': Header2
        },
        data () {
            return {
                classes: [],
                subclasses:[],
                subTitle: '',
                leftButton: {
                  name: '<'
                }
            }
        },
        created () {
            this.GET('api/class/index', res => {
                let result = res.data.result;
                this.classes = result['classes'];
                this.subTitle = this.classes[0]
            });
            this.GET('api/class/subclasses', res => {
                let result = res.data.result;
                this.subclasses = result['subclasses'];
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
            tabClass(str){
              this.subTitle = str;
              this.GET('api/class/subclasses', res => {
                  let result = res.data.result;
                  this.subclasses = result['subclasses'];
              })
            }
        }
    }
</script>