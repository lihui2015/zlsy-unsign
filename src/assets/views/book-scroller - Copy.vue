<template>
  <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">
      <Header2 title="阅读活动" :leftBtn="leftBtn" v-if="isShow"></Header2>
      <!--<div class="cell-button">
        <bookSlider :imageList="books" @pageTurn="onchange" :index="showIndex"></bookSlider>
      </div>-->
      <scroller class="main-list" offset-accuracy="300px" loadmoreoffset="300">
            <refresher></refresher>
            <div  class="cell-button">
              <scrollImg :books="books"></scrollImg>
            </div>
        </scroller>
      
     <!--<scroller :class="['main-list']" @click="toggleClass()" scroll-direction="horizontal" @scroll="scrollHandler" offset-accuracy="300">
          <div class="img-box">
              <image class="main-img" v-for="book in books" :src="book" resize="contain"></image>
            </div>
      </scroller>-->
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
        margin-top: 113px;
        margin-bottom: 90px;
    }
    .cell-button{
        padding-bottom: 18px;
    }
</style>
<script>
import Header2 from '../components/Header2.vue';
import scrollImg from '../components/scrollImg.vue';
    export default {
        name: 'bookImage',
        components:{
          "Header2":Header2,
          "scrollImg":scrollImg
        },
        data () {
            return {
              books:[],
              leftBtn:{
                name: '<'
              },
              isShow: false,
              showIndex: 0,
              bookList:[],
              slideNumber: 5,
              totalPage: 10,
              currentPage:0,
              eventCnt: 0
            }
        },
        created(){
          var _self = this;
          this.testGET('api/class/books', res => {
                let result = res.data.result;
                this.bookList = result['books'];
                _self.getImage(0);
          })
        },
        methods: {
          scrollHandler: function(e) {
            var nowCnt = this.eventCnt + 1;
            this.eventCnt = nowCnt;
            this.offsetX = e.contentOffset.x;
            this.offsetY = e.contentOffset.y;
            this.hint = "scroll event count:" + this.eventCnt + " offsetX:" + this.offsetX + " offsetY:" +this.offsetY;
          },
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
              let currentIndex = event.index;
              let _self = this;
              console.log(currentIndex);
              if(currentIndex == _self.slideNumber -1){
                _self.getBooks('books2',1);
              }
              if(currentIndex == _self.slideNumber){
                _self.books.splice(0,_self.slideNumber);
              }
            },
            toggleClass(){
              this.isShow = this.isShow ? false : true;
            }
        }
    }
</script>

