<template>
    <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">
        <header2 title="文学" :leftBtn='leftButton'></header2>
        <scroller class="main-list" offset-accuracy="300px">
            <refresher></refresher>
            <div class="book-list">
                <div class="sub-i" v-for="i in booklist" @click="jump('/bookDetail/2')">
                    <image class="i-img" resize="cover" :src="i.img"></image>
                    <div class="text-box">
                        <text class="i-name">{{i.tlt}}</text>
                        <text class="i-dec">{{i.descripe}}</text>
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
    .main-list{
        flex: 1;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        margin-top: 86px;
        margin-bottom: 90px;
        background-color: #fff;
    }
    .book-list{
        padding: 0 20px;
        overflow: hidden;
    }
    .sub-i{
        border-top-width: 1px;
        border-top-color: #666666;
        padding: 30px 0;
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
    .i-dec{
        font-size: 32px;
        color: #787878;
        lines: 1.4;
        margin-top: 10px;
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
                booklist: [],
                leftButton: {
                    name:"<"
                }
            }
        },
        created () {
            this.testGET('api/class/bookList.json', res => {
                let result = res.data.result;
                this.booklist = result['bookList'];
            });
        },
        methods: {
        }
    }
</script>