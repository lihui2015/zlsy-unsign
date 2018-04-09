<template>
    <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">
        <header2  title="专题"></header2>
        <div class="main-list">
            <div  class="cell-button">
            <block-4 :topics="topics" @nextPage="next" @prevPage="prev" :lefthasMore="lefthasMore" :righthasMore="righthasMore"></block-4>
            </div>
        </div>
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
        /*margin-top: 113px;
        margin-bottom: 90px;*/
    }
    .cell-button{
       /* padding-bottom: 18px;*/
    }

</style>

<script>
    import util from '../util';
    import Header2 from '../components/Header2.vue';
    import refresher from '../components/refresh.vue';
    import Block4 from '../components/scrollImg.vue';
    import Block6 from '../components/Block6.vue';
    var navigator = weex.requireModule('navigator')
    export default {
        data () {
            return {
                topics:[],
                books:[],
                startPage:1,
                totalPage:4,
                pageSize: 5,
                lefthasMore: true,
                righthasMore: false
            }
        },
        components: {
            'header2': Header2,
            'refresher': refresher,
            'block-4': Block4,
            'block-6': Block6,
        },
        created () {
          var _self = this;
            this.testGET('api/class/books', res => {
                let result = res.data.result;
                this.books = result['books'];
                this.topics = result['books'].slice(0,_self.pageSize);
                //console.log(this.topics)
            });
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
              this.startPage = this.startPage + 1;

              if(this.startPage == this.totalPage){
                this.lefthasMore = false;
              }
              console.log("next->"+this.startPage)
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
              console.log("prev->"+this.startPage)
            }
        }
    }
</script>