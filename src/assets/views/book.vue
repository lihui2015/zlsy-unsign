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
      pdfUrl: 'http://192.168.16.92:8082/web/pdf/index.html',
      bookID: '',
      token: ''
    }
  },
  created(){
    this.bookID = this.$route.params.index;
    storage.getItem('token',event => {
      this.token = event.data;
      // this.token = '8755a2c81a83b12e45691e87b2ac8540';
      this.GET('books/content/2', this.token, res => {
        if(res.data.code == 200){
          let result = res.data.result;
          this.pdfUrl = result[0].pdf_image
        }else{
          modal.toast({
            message: res.data.code + ":" + this.token,
            duration: 3
          })
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
