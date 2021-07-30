<template>
  <section id="index-about" class="about">
    <div class="about__content-wrap">
      <h3 class="about__content-title">
      About app
      </h3>
      <div class="about__content-text">
        サンプルサンプルサンプルサンプルサンプルサンプルサンプル
        サンプルサンプルサンプルサンプルサンプルサンプルサンプル
        サンプルサンプルサンプルサンプルサンプルサンプルサンプル
        サンプルサンプルサンプルサンプルサンプルサンプルサンプル
        サンプルサンプルサンプルサンプルサンプルサンプルサンプル
        サンプルサンプルサンプルサンプルサンプルサンプルサンプル
        サンプルサンプルサンプルサンプルサンプルサンプルサンプル
        サンプルサンプルサンプルサンプルサンプルサンプルサンプル
        サンプルサンプルサンプルサンプルサンプルサンプルサンプル
        サンプルサンプルサンプルサンプルサンプルサンプルサンプル
        サンプルサンプルサンプルサンプルサンプルサンプルサンプル
        サンプルサンプルサンプルサンプルサンプルサンプルサンプル
        サンプルサンプルサンプルサンプルサンプルサンプルサンプル
        サンプルサンプルサンプルサンプルサンプルサンプルサンプル
        サンプルサンプルサンプルサンプルサンプルサンプルサンプル
        サンプルサンプルサンプルサンプルサンプルサンプルサンプル
        サンプルサンプルサンプルサンプルサンプルサンプルサンプル
        サンプルサンプルサンプルサンプルサンプルサンプルサンプル
        サンプルサンプルサンプルサンプルサンプルサンプルサンプル
        サンプルサンプルサンプルサンプルサンプルサンプルサンプル
        サンプルサンプルサンプルサンプルサンプルサンプルサンプル
        サンプルサンプルサンプルサンプルサンプルサンプルサンプル
        サンプルサンプルサンプルサンプルサンプルサンプルサンプル
        サンプルサンプルサンプルサンプルサンプルサンプルサンプル
      </div>
      <!-- リンク先はセッション内のログイン情報に沿ってif文で変更する。ログインしている場合はマイページへ。していない場合はサインアップ画面へ移動する。-->
      <!-- TODO:href="#index-top"を使ってid属性を設定した所へ移動したのちリロードすると上手くいかない   -->
      <a href="#index-top" class="about__content-link active-signup-menu">
        このサービスを使ってみる
      </a>
    </div>
  </section>
</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class About extends Vue {}
</script>
<style lang="scss" scope>
.about{
  height: 500px;
  background-color: #047aed;
  text-align: center;
  position: relative;
  &__content-wrap{
    //position: absolute;を中央寄せにする場合は
    //left: 0;right: 0;を指定後,margin: 0 auto;で効く様になる。
    height: 400px;
    max-width: 1600px;
    margin: 0 auto;
    position: absolute;
    top:60px;
    left: 0;
    right: 0;
    color: #fff;
  }
  &__content-title{
    font-size: 2em;
    padding: 20px 0px;
  }
  &__content-text{
    width: 80%;
    margin: 0 auto;
  }
  &__content-link{
    border: 1px #fff solid;
    border-radius: 5px;
    padding: 10px 30px;
    position: relative;
    top:30px;
    border-radius: 5px;
    text-decoration: none;
    &:link{
      color:#fff;
    }
    &:visited{
      color:#fff;
    }
    &:hover{
      transition: all .5s;
      background-color: #fff;
      color: #047aed;
    }
  }
}
</style>
