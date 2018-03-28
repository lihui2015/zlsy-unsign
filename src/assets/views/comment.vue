<template>
  
  <div :class="['wrapper', isIpx&&isIpx()?'w-ipx':'']">
    <header2 title="写评论" :leftBtn='leftButton'></header2>
    <div class="star_evaluate">

        <div class="score score_1"></div>
        <div class="score score_2"></div>
        <div class="score score_3"></div>
        <div class="score score_4"></div>
        <div class="score score_5"></div>

    </div>
    <div class="textBox">
      <textarea class="textarea"></textarea>
    </div>
</div>
</template>

<script>
import util from '../util';
import Header2 from '../components/Header2.vue';
export default {
  name: 'comment',
  components: {
    'header2': Header2
  },
  data(){
    return {
      leftButton: {
          name:"X"
      },
      starbar: 'http://172.18.22.119:8081/web/assets/images/iconpic-star-S-default.png',
      star: 'http://172.18.22.119:8081/web/assets/images/iconpic-star-S.png'
    }
  },
  methods: {
    saveComment: function(){
      this.GET('api/comment/saveComment.json', res => {
          let result = res.data.result;
      });
    }
  }
  }
</script>

<style scoped>
    /*初始化样式*/
    .star_evaluate {
        position: relative;
        width: 100px;
        height: 20px;
        background: url("http://172.18.22.119:8081/web/assets/images/iconpic-star-S-default.png") repeat-x;
        background-size: 20px 20px;
        overflow: hidden;
    }

    .star,.score{
        display: block;
        height: 20px;
        width: 20px;
        position: absolute;
    }
    .star{
        z-index: 2;
    }
    .score{
        opacity: 0;
    }

    .star_1, .score_1 {
        left: 0;
    }

    .star_2, .score_2 {
        left: 20px;
    }

    .star_3, .score_3 {
        left: 40px;
    }

    .star_4, .score_4 {
        left: 60px;
    }

    .star_5, .score_5 {
        left: 80px;
    }

    /*选中之后*/
    .score.checked + .star {
        background: url("http://172.18.22.119:8081/web/assets/images/iconpic-star-S.png") repeat-x;
        background-size: 20px 20px;
        left: 0;
    }

    .score_1.checked + .star_1 {
        width: 20px;
    }

    .score_2.checked + .star_2 {
        width: 40px;
    }

    .score_3.checked + .star_3 {
        width: 60px;
    }

    .score_4.checked + .star_4 {
        width: 80px;
    }

    .score_5.checked + .star_5 {
        width: 100px;
    }
</style>
