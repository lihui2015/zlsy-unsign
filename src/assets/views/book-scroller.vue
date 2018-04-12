<template>
    <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']" bubble="true">
        <Header2 :title="bookName" :leftBtn="leftBtn" v-if="isShow"></Header2>
        <!-- <text class="test" @click="toggleFuninner('innertext')">
          test
        </text> -->
        <div class="main-list" @click="toggleFun('test')">
            <div  class="cell-button">
            <scrollImg :topics="topics" @nextPage="next" @prevPage="prev" :lefthasMore="lefthasMore" :righthasMore="righthasMore" :more="more" @toggleShow="toggleShow" :isShow="isShow" :isCom="isCompleted"></scrollImg>
            </div>
        </div>
        <bookBar v-if="isShow" :collectTag="collectTag" @toggleOpen="catalogHandle" :bookID="bookID" @toggleComment="toggleComment"></bookBar>
        <catalogBar :isOpen="isOpen" @open="openHandle" :catalog="catalog"></catalogBar>
        <commentC :isOpenComment="isOpenComment" @openComment="openCommentHandle" :bookID="bookID"></commentC>
    </div>
</template>
<style scoped>
    .test{
      width: 750px;
      height: 1245px;
    }

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
    import catalogBar from '../components/catalog.vue';
    import commentC from '../components/comment.vue';
    var navigator = weex.requireModule('navigator')
    var storage = weex.requireModule('storage')
    var modal = weex.requireModule('modal')
    export default {
        data () {
            return {
                leftBtn:{
                    name: '&#xe697;'
                },
                isShow: false,
                topics:[],
                more:[],
                books:[],
                catalog:[],
                totalPage:1,
                startPage:1,
                pageSize: 10,
                lefthasMore: true,
                righthasMore: false,
                isOpen:false,
                collectTag:'',
                bookID:'',
                bookName:'',
                isOpenComment:false,
                mod:0,
                isCompleted:''
            }
        },
        components: {
            'Header2': Header2,
            'scrollImg': scrollImg,
            'opcityImg': opcityImg,
            'bookBar': bookBar,
            'commentC': commentC,
            'catalogBar': catalogBar
        },
        created () {
            this.bookID = this.$route.params.index;
            this.collectTag = this.$route.params.isCollect;
            this.bookName = this.$route.params.name;
            var _self = this;
            storage.getItem('token',event => {
              this.token = event.data;
              this.GET('books/content/'+this.bookID, this.token, res => {
                if(res.data.code == 200){
                  let result = res.data.result;
                  //console.log(result);
                  this.catalog = result.directory;
                  let temp = result.initial_url.split('/');
                  var str = temp[temp.length - 1];
                  var tempIndex = result.initial_url.indexOf(str);
                  var url = result.initial_url.substring(0,tempIndex);
                  //console.log(url);
                  for(var i=0; i<result.count; i++){
                    var imgUrl = url + i + '.png';
                    this.books.push(imgUrl);
                  }
                  this.topics = this.books.slice(0,_self.pageSize);
                  this.more = this.books.slice(_self.pageSize,_self.pageSize*2);
                  this.totalPage = Math.ceil(result.count / this.pageSize);
                  this.mod = result.count % this.pageSize;
                }else{
                  modal.toast({
                    message: res.data.code + ":" + this.token,
                    duration: 3
                  })
                }  
              });
              //增加阅读次数
              this.POST('books/count/'+this.bookID, this.token, '', res => {
                if(res.data.code == 200){
                }else{
                }  
              });
          })
            // this.testGET('api/class/books', res => {
            //     let result = res.data.result;
            //     this.books = result['books'];
            //     this.topics = result['books'].slice(0,_self.pageSize);
            //     this.more = result['books'].slice(_self.pageSize,_self.pageSize*2);
            //     this.totalPage = Math.ceil(this.books.length / this.pageSize);
            //     //console.log(this.totalPage)
            // });
            // this.testGET('api/class/catalog', res => {
            //     let result = res.data.result;
            //     this.catalog = result['catalog'];
            // })
        },
        methods: {
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
              this.isCompleted = true;
              //console.log("next->"+this.startPage)
            },
            prev(){
              if(this.startPage == 1){
                this.righthasMore = false;
                return false;
              }

              this.lefthasMore = true;

              this.startPage = this.startPage - 1;
              var end,start;
              end = this.pageSize * this.startPage;
              start = end - this.pageSize;
              this.topics = this.books.slice(start,end)

              if(this.startPage == 1){
                this.righthasMore = false;
              }
              this.isCompleted = true;              
              //console.log("prev->"+this.startPage)
            },
            getPage(start,end){

            },
            toggleFun(str){
              this.isShow = this.isShow ? false : true;
              // modal.toast({
              //   message: str,
              //   duration: 1
              // })
            },
            // toggleFuninner(str){
            //   //this.isShow = this.isShow ? false : true;
            //   modal.toast({
            //     message: str,
            //     duration: 1
            //   })
            // },
            toggleShow(event){
                this.isShow = event.show;
            },
            catalogHandle(){
                this.isOpen = this.isOpen ? false : true;
            },
            openHandle(event){
                this.isOpen = event.open;
            },
            toggleComment(){
                this.isOpenComment = this.isOpenComment ? false : true;
                //console.log(this.isOpenComment);
            },
            openCommentHandle(event){
                this.isOpenComment = event.open;

            }
        }
    }
</script>