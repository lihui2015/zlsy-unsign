<template>
  <div>
    <web ref="webview" src="http://www.imbawin.com/storage/pdf/xiyou.pdf" class="book-view"></web>
    <image :src="pdfUrl" class="testPdf"></image>
  </div>
</template>

<script>
export default {
  name: 'book',
  data(){
    return {
      pdfUrl: 'http://www.imbawin.com/storage/pdf/xiyou.pdf'
    }
  }
  }
</script>

<style scoped>
.book-view{
  width: 750px;
  height: 1245px;
}
  .testPdf{
    width: 750px;
    height: 1000px;
  }
</style>
