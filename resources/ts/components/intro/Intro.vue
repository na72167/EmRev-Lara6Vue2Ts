<template>
  <section class="intro">
    <div class="intro__wrap">
      <div class="intro__text">
        <div class="intro__text-title">
            {{ introTextTitle }}<br>
          <span class="intro__text-sub">
            {{ introTextSub }}
          </span>
        </div>
      </div>
      <!-- <img class="intro__icon" :src="introImg"> -->
    </div>
  </section>
</template>

<script lang="ts" scoped>
import { Component,Prop,Vue } from 'vue-property-decorator';

@Component

export default class Intro extends Vue {
  // Vue + TypeScriptでpropsのObjectやArrayに型をつける
  // https://qiita.com/iMasanari/items/31d8a26c7ee22793585c
  @Prop() public introTextTitle!: string;
  @Prop() public introTextSub!: string;
  // @Prop() public introImg?: string;
}

</script>

<style lang="scss" scoped>
  .intro{
    height: 265px;
    background-color: #047aed;
    &__wrap{
      height: 250px;
      width: 970px;
      margin: 0 auto;
      overflow: hidden;
    }
    &__text{
      float: left;
      width: 340px;
      margin-right: 430px;
      position: relative;
      top: calc(265px / 2 - 76px / 2);
    }
    &__text-title{
      font-size: 3rem;
      font-weight: 350px;
      width: 100%;
      line-height: 0.8;
      color: #fff;
    }
    &__text-sub{
      font-size: 1rem;
      color: #fff;
    }
    &__icon{
      float: left;
      width: 200px;
      position: relative;
      top: calc(265px / 2 - 200px / 2);
    }
  }
</style>
