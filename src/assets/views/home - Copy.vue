<template>
  <div class="content">
    <slider class="slider" interval="3000" auto-play="true">
      <div class="frame" v-for="img in imageList">
        <image class="image" resize="cover" :src="img.src"></image>
        <text class="image-title">{{img.title}}</text>
      </div>
    </slider>
  </div>
</template>

<script>
export default {
  name: 'home',
    data () {
      return {
        imageList: [{
          title: '学生会组织的手工课1',
          src: 'https://modao.cc/uploads3/images/970/9709900/raw_1495461822.jpeg'
        },{
          title: '学生会组织的手工课2',
          src: 'https://modao.cc/uploads3/images/970/9709899/raw_1495461822.jpeg'
        },{
          title: '学生会组织的手工课3',
          src: 'https://modao.cc/uploads3/images/965/9653358/raw_1495190679.jpeg'
        },{
          title: '学生会组织的手工课4',
          src: 'https://modao.cc/uploads3/images/938/9384743/raw_1494391312.jpeg'
        }]
      }
    },
    mounted() {

    }
  }
</script>

<style scoped>
  .image {
    width: 750px;
    height: 422px;
  }
  .slider {
    margin-top: 0px;
    margin-left: 0px;
    width: 750px;
    height: 422px;
    border-width: 0px;
    border-style: solid;
    border-color: #41B883;
  }
  .frame {
    width: 750px;
    height: 422px;
    position: relative;
  }
  .image-title{
    position: absolute;
    width: 750px;
    padding: 0 20px;
    text-align: center;
    top: 200px;
    left: 0;
    color: #101010;
    font-size: 38px;
    font-weight: bold;
  }
</style>
