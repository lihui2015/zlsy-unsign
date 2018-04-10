<template>
  <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">
      <Header2 title="阅读活动" :leftBtn="leftBtn" v-if="isShow"></Header2>
      
      <div :class="['main-list']" @click="toggleClass()">
          <div class="cell-button">
                <bookSlider :imageList="books" @pageTurn="onchange" :isInfinit="isInfinit"  @nextPage="next" @prevPage="prev" :lefthasMore="lefthasMore" :righthasMore="righthasMore"></bookSlider>
            </div>
      </div>
  </div>
</template>
<style scoped>
    .iconfont {
        font-family:iconfont;
    }
    .main-list{
      width: 750px;
      height: 1245px;
    }
    
    .show{
      opacity: 1;
    }
    .hide{
      opacity: 0;
    }
</style>
<script>
import Header2 from '../components/Header2.vue';
import bookSlider from '../components/bookSlider.vue';
var modal = weex.requireModule('modal')
    export default {
        name: 'bookImage',
        components:{
          "Header2":Header2,
          "bookSlider":bookSlider
        },
        data () {
            return {
              books:[],
              leftBtn:{
                name: '<'
              },
              isShow: false,
              holder:'http://www.imbawin.com/images/default.png',
              
              showIndex: 0,
              bookList:[],
              slideNumber: 5,
              startPage:1,
              totalPage:4,
              pageSize: 5,
              lefthasMore: true,
              righthasMore: false,
              isInfinit: "false",
              currentIndex:0
              
            }
        },
        created(){
          var _self = this;
          this.testGET('api/class/books', res => {
                let result = res.data.result;
                this.bookList = result['books'];
                this.books = result['books'].slice(0,_self.pageSize);
          })
          
          //this.getBooks('books');
        },
        methods: {
            getImage(index){
              var _self=this;
              //_self.books.push(_self.bookList.slice(index,index+5))
              for(var i = 0; i<_self.slideNumber; i++){
                _self.books.push(_self.bookList[index+i]);
              }
              console.log(_self.books)
              _self.currentPage = _self.currentPage + 1;
            },
            getBooks(url,flag){
              this.testGET('api/class/'+url, res => {
                let result = res.data.result;
                let bookList = result['books'];
                // if(flag){
                //   this.books = result['books'].reverse();
                // }else{
                //   this.books = result['books'];
                // }

                
                if(flag){
                  this.showIndex = 0;
                  for(let i=0; i<bookList.length; i++){
                    this.books.push(bookList[i]);
                  }
                }else{
                  this.books = bookList;
                }
                
                
              })
            },
            onchange (event) {
              this.currentIndex = event.index;
              let _self = this;
              console.log("index->"+this.currentIndex);
              console.log("dir->"+event.dir);
              // if(this.currentIndex == 4 && event.dir == "left"){
              //   if(this.lefthasMore){
              //     this.next()
              //   }
              // }
   
              // if(this.currentIndex == 0 && event.dir == "right"){
              //   if(this.righthasMore){
              //     this.prev();
              //   }
              // }
            },
            next(){
              if(this.startPage == this.totalPage){
                this.lefthasMore = false;
                return false;
              }
              
              this.righthasMore = true;

              var start = this.pageSize * this.startPage;
              var end = start + this.pageSize;
              this.books = this.bookList.slice(start,end)
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
              this.books = this.bookList.slice(start,end)

              if(this.startPage == 1){
                this.righthasMore = false;
              }
              //console.log("prev->"+this.startPage)
            },
            toggleClass(){
              this.isShow = this.isShow ? false : true;
            }
        }
    }
</script>

