<template>
  <div>
    <web ref="webview" :src="pdfUrl" class="book-view"></web>
  </div>
</template>

<script>
var storage = weex.requireModule('storage')
var modal = weex.requireModule('modal')
export default {
  name: 'book',
  data(){
    return {
      pdfUrl: '',
      // pdfUrl: 'http://172.18.22.119:8081/web/viewer/viewer.html?file=xiyou.pdf',
      bookID: '',
      token: ''
    }
  },
  created(){
    this.bookID = this.$route.params.index;
    storage.getItem('token',event => {
      this.token = event.data;
      this.GET('books/content/'+this.bookID, this.token, res => {
        if(res.data.code == 200){
          let result = res.data.result[0];
          this.pdfUrl = 'http://www.imbawin.com/pdfjs/viewer/viewer.html?file='+result.pdf_image;
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
    
  }
  }
</script>

<style scoped>
.book-view{
  width: 750px;
  height: 1245px;
}
</style>
