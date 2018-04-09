<template>
  <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">
      <Header2 title="阅读活动" :leftBtn="leftBtn" v-if="isShow"></Header2>
      
      <div :class="['main-list']" @click="toggleClass()">
          <div class="cell-button">
                <bookSlider :imageList="books" @pageTurn="onchange" ></bookSlider>
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
              holder:'http://www.imbawin.com/images/default.png',
              isShow: false,
              showIndex: 0,
              bookList:[],
              slideNumber: 5,
              totalPage: 10,
              currentPage:0,
              
            }
        },
        created(){
          var _self = this;
          this.testGET('api/class/books', res => {
                let result = res.data.result;
                this.bookList = result['books'];
                _self.getImage(0);
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
              let currentIndex = event.index;
              let _self = this;
              console.log(currentIndex);
              if(currentIndex == _self.slideNumber -1){
                _self.getImage(_self.slideNumber*_self.currentPage)
              }
              if(currentIndex == _self.slideNumber+1){
                _self.books = _self.books.slice(0,5)
                //_self.books.splice(0,_self.slideNumber);
              }
            },
            toggleClass(){
              this.isShow = this.isShow ? false : true;
            }
        }
    }
</script>

