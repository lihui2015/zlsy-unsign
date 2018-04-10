<template>
    <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">
        <Header2 title="阅读活动" :leftBtn="leftBtn" v-if="isShow"></Header2>

        <div class="main-list" @click="toggleClass()">
            <div  class="cell-button">
            <scrollImg :topics="topics" @nextPage="next" @prevPage="prev" :lefthasMore="lefthasMore" :righthasMore="righthasMore" :more="more" @toggleShow="toggleShow" :isShow="isShow"></scrollImg>
            </div>
        </div>
        <bookBar v-if="isShow" :collectTag="collectTag" @toggleOpen="catalogHandle" :bookID="bookID"></bookBar>
        <catalog :isOpen="isOpen" @open="openHandle" :catalog="catalog"></catalog>
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
        width: 750px;
      height: 1245px;
    }
    .cell-button{
       /* padding-bottom: 18px;*/
    }

</style>

<script>
    import util from '../util';
    import Header2 from '../components/Header2.vue';
    import scrollImg from '../components/scrollImg.vue';
    import opcityImg from '../components/opcityImg.vue';
    import bookBar from '../components/bookBar.vue';
    import catalog from '../components/catalog.vue';
    var navigator = weex.requireModule('navigator')
    export default {
        data () {
            return {
                leftBtn:{
                    name: '<'
                },
                isShow: false,
                topics:[],
                more:[],
                books:[],
                catalog:[],
                totalPage:1,
                startPage:1,
                pageSize: 5,
                lefthasMore: true,
                righthasMore: false,
                isOpen:false,
                collectTag:'',
                bookID:''
            }
        },
        components: {
            'Header2': Header2,
            'scrollImg': scrollImg,
            'opcityImg': opcityImg,
            'bookBar': bookBar,
            'catalog': catalog
        },
        created () {
            this.bookID = this.$route.params.index;
            this.collectTag = this.$route.params.isCollect;
          var _self = this;
            this.testGET('api/class/books', res => {
                let result = res.data.result;
                this.books = result['books'];
                this.topics = result['books'].slice(0,_self.pageSize);
                this.more = result['books'].slice(_self.pageSize,_self.pageSize*2);
                this.totalPage = Math.ceil(this.books.length / this.pageSize);
                //console.log(this.totalPage)
            });
            this.testGET('api/class/catalog', res => {
                let result = res.data.result;
                this.catalog = result['catalog'];
            })
        },
        methods: {
            onloadmore () {
                setTimeout(() => {
                    this.articles.push(...this.articles);
                }, 100)
            },
            next(){
              if(this.startPage == this.totalPage){
                this.lefthasMore = false;
                return false;
              }
              
              this.righthasMore = true;

              var start = this.pageSize * this.startPage;
              var end = start + this.pageSize;
              this.topics = this.books.slice(start,end)
              this.more = this.books.slice(start+this.pageSize,end+this.pageSize);
              this.startPage = this.startPage + 1;

              if(this.startPage == this.totalPage){
                this.lefthasMore = false;
              }
              //console.log("next->"+this.startPage)
            },
            prev(){
              if(this.startPage == 1){
                this.righthasMore = false;
                return false;
              }

              this.lefthasMore = true;

              this.startPage = this.startPage - 1;
              var end = this.pageSize * this.startPage;
              var start = end - this.pageSize;
              this.topics = this.books.slice(start,end)

              if(this.startPage == 1){
                this.righthasMore = false;
              }
              //console.log("prev->"+this.startPage)
            },
            toggleClass(){
              this.isShow = this.isShow ? false : true;
            },
            toggleShow(event){
                this.isShow = event.show;
            },
            catalogHandle(){
                this.isOpen = this.isOpen ? false : true;
            },
            openHandle(event){
                this.isOpen = event.open;
            }
        }
    }
</script>