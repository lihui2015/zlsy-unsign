<template>
  <div>
    <web ref="webview" :src="pdfUrl" class="book-view"></web>
  </div>
</template>

<script>
var storage = weex.requireModule('storage')
export default {
  name: 'book',
  data(){
    return {
      pdfUrl: '',
      bookID: '',
      token: ''
    }
  },
  created(){
    this.bookID = this.$route.params.index;
    storage.getItem('token',event => {
      this.token = event.data;
      // this.token = '8755a2c81a83b12e45691e87b2ac8540';
    })
    this.GET('books/content/'+this.bookID, this.token, res => {
        let result = res.data.result;
        this.pdfUrl = result[0].pdf_image
    });
  }
  }
</script>

<style scoped>
.book-view{
  width: 750px;
  height: 1245px;
}
</style>
