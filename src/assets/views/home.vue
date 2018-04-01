<template>
    <div class="wrapper">
        <home-header title="书库"></home-header>
        <scroller :class="['main-list']">
            <refresher></refresher>
            <div class="cell-button" @click="jumpWeb('https://m.you.163.com/act/pub/DxDpYNfbBd.html')">
                <yx-slider :imageList="YXBanners" ></yx-slider>
            </div>
            <div class="cell-button">
                <book-search></book-search>
                
            </div>
            <div class="cell-button">
                <block-1 :items="borrowRecords"></block-1>
            </div>
            <div class="cell-button">
                <block-2 :books="bookList"></block-2>
            </div>
            <!-- <loading class="loading" @loading="onloading" :display="showLoading">
                <text class="indicator">...</text>
            </loading> -->
        </scroller>
    </div>
</template>
<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .search {
        flex: 1;
        height: 60px;
        font-size: 26px;
        padding-top: 13px;
        background-color: #ededed;
        border-radius: 8px;
    }
    .wrapper{
    }
    .main-list{
        position: fixed;
        top: 86px;
        bottom: 90px;
        left: 0;
        right: 0;
        /*margin-top: 167px;*/
        /*margin-bottom: 90px;*/
    }
    .ml-ipx{
        top: 208px;
        bottom:140px;
    }

    .cell-button{
    }

</style>

<script>
    var modal = weex.requireModule('modal')
    var navigator = weex.requireModule('navigator')
    var storage = weex.requireModule('storage');
    import util from '../util';
    import Header from '../components/header.vue';
    import refresher from '../components/refresh.vue';
    import YXSlider from '../components/YXSlider.vue';
    import bookSearch from '../components/bookSearch.vue';
    import Block1 from '../components/Block1.vue';
    import Block2 from '../components/Block2.vue';
    export default {
        name:'home',
        components: {
            'home-header': Header,
            'refresher': refresher,
            'yx-slider': YXSlider,
            'book-search': bookSearch,
            'block-1': Block1,
            'block-2': Block2
        },
        data () {
            return {
                YXBanners: [],
                borrowRecords: [],
                bookList: [],
                showLoading: 'hide',
                token: ''
            }
        },
        created () {
            var _self = this;
            storage.getItem('token',event => {
                _self.token = event.data;

                //banner ajax
                this.GET('banners/list', _self.token, res => {
                    if(res.data.code == 200){
                        let result = res.data.result;
                        this.YXBanners = result;
                    }else{
                        modal.toast({
                            message: res.data.code + ":" + _self.token,
                            duration: 3
                        })
                    }
                });

                //借阅记录
                this.testGET('api/home/borrowRecords.json', res => {
                    let result = res.data.result;
                    this.borrowRecords = result['borrowRecords'];
                });

                //图书精选
                this.GET('books/chosen/6', _self.token, res => {
                    if(res.data.code == 200){
                        let result = res.data.result;
                        this.bookList = result;
                    }else{
                        //console.log(res.data.code);
                        modal.toast({
                            message: res.data.code + ":" + _self.token,
                            duration: 3
                        })
                    }
                })
            })
        },
        methods: {
            jumpWeb (_url) {
                const url = this.$getConfig().bundleUrl;
                console.log(util.setBundleUrl(url, 'page/webview.js?weburl='+_url));
                navigator.push({
                    url: util.setBundleUrl(url, 'page/webview.js?weburl='+_url) ,
                    animated: "true"
                });
            },
            onloading () {
                modal.toast({ message: 'loading', duration: 0.3 })
                this.showLoading = 'show';
                setTimeout(() => {
                    this.showLoading = 'hide'
                }, 300)
            }
        }
    }
</script>