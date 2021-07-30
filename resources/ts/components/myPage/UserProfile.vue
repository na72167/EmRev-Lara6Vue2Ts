<template>

  <section class="mypeUserProfile">
    <div class="mypeUserProfile__img-wrap">
      <img class="mypeUserProfile__img">
    </div>
    <div class="mypeUserProfile__detail">
      <div class="mypeUserProfile__name">
        <h1 class="mypeUserProfile__name-element">name</h1>
        <div class="mypeUserProfile__name-output">山田太郎</div>
      </div>
      <div class="mypeUserProfile__ageTel-Wrap">
        <div class="mypeUserProfile__age">
          <div class="mypeUserProfile__age-element">age</div>
          <div class="mypeUserProfile__age-output">00</div>
        </div>
        <div class="mypeUserProfile__tel">
          <div class="mypeUserProfile__tel-element">tel</div>
          <div class="mypeUserProfile__tel-output">000-0000-0000</div>
        </div>
      </div>
      <div class="mypeUserProfile__address">
        <div class="mypeUserProfile__address-element">adless</div>
        <div class="mypeUserProfile__address-output">東京都板橋区〇〇-0000-0</div>
      </div>
      <div class="mypeUserProfile__state">
        <div class="mypeUserProfile__state-element">state</div>
        <div class="mypeUserProfile__state-output">一般会員</div>
      </div>
    </div>
  </section>

</template>

<script lang="ts" scoped>
import { Component,Vue } from 'vue-property-decorator';

@Component
export default class UserProfile extends Vue {}
</script>

<style lang="scss" scope>
  .mypeUserProfile{
  height: 320px;
  width: 850px;
  background-color: #fff;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin: 0 auto;
  padding: 50px 100px;
  position: relative;
  top: -50px;
  overflow: hidden;
  &__img-wrap{
    height: 230px;
    width: 230px;
    border: 1px solid #b4becb;
    border-radius: 10px;
    float: left;
  }
  &__detail{
    float: left;
    margin: 30px 0 30px 130px;
  }
  &__name{
    overflow: hidden;
    border-bottom: 1px solid #b4becb;
    margin-bottom: 20px;
    &-element{
      margin-right: 5px;
      float: left;
    }
    &-output{
      float: left;
    }
  }

  &__ageTel-Wrap{
    overflow: hidden;
  }
  &__age{
    float: left;
    overflow: hidden;
    border-bottom: 1px solid #b4becb;
    margin-bottom: 20px;
    &-element{
      margin-right: 5px;
      float: left;
    }
    &-output{
      float: left;
    }
  }
  &__tel{
    float: left;
    margin-left: 30px;
    overflow: hidden;
    border-bottom: 1px solid #b4becb;
    margin-bottom: 20px;
    &-element{
      margin-right: 5px;
      float: left;
    }
    &-output{
      float: left;
    }
  }
  &__address{
    overflow: hidden;
    border-bottom: 1px solid #b4becb;
    margin-bottom: 20px;
    &-element{
      margin-right: 5px;
      float: left;
    }
    &-output{
      float: left;
    }
  }
  &__state{
    overflow: hidden;
    border-bottom: 1px solid #b4becb;
    margin-bottom: 20px;
    &-element{
      margin-right: 5px;
      float: left;
    }
    &-output{
      float: left;
    }
  }
}
</style>
