<template>
    <!-- お問い合わせフォーム -->
  <section class="contact" id="index-contact">
    <div class="contact__content-wrap">
      <div class="contact__content-title">
        CONTACT
      </div>
      <div class="contact__content-body">
        <from action="" class="">
          <input class="contact__content-form" type="text" placeholder="お名前">
          <input class="contact__content-form" type="email" placeholder="E-Mail">
          <input class="contact__content-form" placeholder="お問い合わせの種類">
          <textarea class="contact__content-areaForm" placeholder="お問い合わせ内容"></textarea>
          <button class="contact__content-buttom">送信する</button>
        </from>
      </div>
    </div>
  </section>
</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';

@Component
// ({
//   components: {
//     Hero,
//     NewReview,
//     About,
//     Contact
//   },
// })
export default class Contact extends Vue {}
</script>
<style lang="scss" scope>
.contact{
  height: 550px;
  width: 100%;
  background-color: #fff;
  &__content-title{
    text-align: center;
    width: 700px;
    font-size: 2em;
  }
  &__content-wrap{
    max-width: 700px;
    margin: 0 auto;
    position: relative;
    top:50px;
  }
  &__content-body{
    width: 100%;
  }
  &__content-form{
    width: 100%;
    border: 0;
    border-bottom: 1px solid #b4becb;
    margin-bottom: 15px;
    &:focus{
      outline: none;
      border-bottom: 1px solid #047aed;
    }
  }
  &__content-areaForm{
    margin:20px 0 20px;
    height: 200px;
    width: 100%;
    border: 0;
    border-bottom: 1px solid #b4becb;
    resize: none;
    &:focus{
      outline: none;
      border-bottom: 1px solid #047aed;
    }
  }
  &__content-buttom{
    display: block;
    padding: 10px 30px;
    background-color: #047aed;
    border: none;
    border-radius: 5px;
    color: #fff;
    margin: 0 auto;
  }
}
</style>
