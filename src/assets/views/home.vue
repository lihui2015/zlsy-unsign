<template>
    <div class="wrapper">
        <home-header title="书库"></home-header>
        <scroller :class="['main-list']" offset-accuracy="300" loadmoreoffset="300" @loadmore="onloadmore">
            <refresher @loadingDown="loadingDown"></refresher>
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
            <loading class="loading" @loading="onloading" :display="showLoading">
                <text class="indicator">...</text>
            </loading>
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
    import util from '../util';
    import Header from '../components/header.vue';
    import refresher from '../components/refresh.vue';
    import YXSlider from '../components/YXSlider.vue';
    import bookSearch from '../components/bookSearch.vue';
    import Block1 from '../components/Block1.vue';
    import Block2 from '../components/Block2.vue';
    export default {
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
                showLoading: 'hide'
            }
        },
        created () {
            this.GET('api/home/bannerList.json', res => {
                let result = res.data.result;
                this.YXBanners = result['banners'];
            });
            this.GET('api/home/borrowRecords.json', res => {
                let result = res.data.result;
                this.borrowRecords = result['borrowRecords'];
            });
            this.GET('api/home/bookList.json', res => {
                let result = res.data.result;
                this.bookList = result['bookList'];
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
                    this.goodsList.push(...this.recommend.goods1);
                    this.showLoading = 'hide'
                }, 300)
            },
            onloadmore () {
                setTimeout(() => {
                    this.goodsList.push(...this.recommend.goods1);
                }, 100)
            },
            loadingDown(){
                this.goodsList =[];
                this.goodsList.push(...this.recommend.goods2);
                this.goodsList.push(...this.recommend.goods1);
            }
        }
    }
</script>