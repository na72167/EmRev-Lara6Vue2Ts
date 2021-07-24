<template>

  <div class="revRegistJr-content__bottom-wrap">
    <input type="submit" class="revRegistJr-content__bottom-cancel" name="cancel" value="会社選択画面に戻る">
    <input type="submit" class="revRegistJr-content__bottom-next revRegistJr-content__bottom-link" name="next" value="次の項目へ">
  </div>

</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class FormOperationButton extends Vue {}
</script>

<style lang="scss" scope>
  .revRegistJr-content{
    &__bottom-wrap{
      margin-top: 60px;
      height: 41px;
      width: 412px;
    }
    &__bottom-link{
      text-decoration: none;
    }
    &__bottom-cancel{
      padding: 10px 15px;
      background-color: #fff;
      color: #06D1EC;
      border: none;
      border: 1px solid #06D1EC;
    }
    &__bottom-next{
      padding: 10px 47px;
      margin-left: 50px;
      background-color: #06D1EC;
      color: #fff;
      border: none;
      border: 1px solid #fff;
    }
  }
</style>

