<template>
  <section class="mypeDmList">

    <div class="mypeDmList__title">DmNotificationList</div>
      <div class="mypeDmList__list">
        <!-- ======================================================= -->
        <div class="mypeDmList__detail">
          <div class="mypeDmList__postingTime">
            <div class="mypeDmList__postingTime-element">投稿日時</div>
            <div class="mypeDmList__postingTime-output">2100/01/01</div>
          </div>
          <div class="mypeDmList__postingDate">
            <div class="mypeDmList__postingDate-element">投稿日時・時刻</div>
            <div class="mypeDmList__postingDate-output">00 月00日 00:00:00</div>
          </div>
          <div class="mypeDmList__postings">
            <div class="mypeDmList__postings-element">投稿内容</div>
            <div class="mypeDmList__postings-output">サンプルサンプルサンプルサンプルサンプルサンプルサンプル...</div>
          </div>
        </div>
        <!-- ======================================================= -->
        <div class="mypeDmList__detail">
          <div class="mypeDmList__postingTime">
            <div class="mypeDmList__postingTime-element">投稿日時</div>
            <div class="mypeDmList__postingTime-output">2100/01/01</div>
          </div>
          <div class="mypeDmList__postingDate">
            <div class="mypeDmList__postingDate-element">投稿日時・時刻</div>
            <div class="mypeDmList__postingDate-output">00 月00日 00:00:00</div>
          </div>
          <div class="mypeDmList__postings">
            <div class="mypeDmList__postings-element">投稿内容</div>
            <div class="mypeDmList__postings-output">サンプルサンプルサンプルサンプルサンプルサンプルサンプル...</div>
          </div>
        </div>
        <!-- ======================================================= -->
        <div class="mypeDmList__detail">
          <div class="mypeDmList__postingTime">
            <div class="mypeDmList__postingTime-element">投稿日時</div>
            <div class="mypeDmList__postingTime-output">2100/01/01</div>
          </div>
          <div class="mypeDmList__postingDate">
            <div class="mypeDmList__postingDate-element">投稿日時・時刻</div>
            <div class="mypeDmList__postingDate-output">00 月00日 00:00:00</div>
          </div>
          <div class="mypeDmList__postings">
            <div class="mypeDmList__postings-element">投稿内容</div>
            <div class="mypeDmList__postings-output">サンプルサンプルサンプルサンプルサンプルサンプルサンプル...</div>
          </div>
        </div>
        <!-- ======================================================= -->
        <div class="mypeDmList__detail">
          <div class="mypeDmList__postingTime">
            <div class="mypeDmList__postingTime-element">投稿日時</div>
            <div class="mypeDmList__postingTime-output">2100/01/01</div>
          </div>
          <div class="mypeDmList__postingDate">
            <div class="mypeDmList__postingDate-element">投稿日時・時刻</div>
            <div class="mypeDmList__postingDate-output">00 月00日 00:00:00</div>
          </div>
          <div class="mypeDmList__postings">
            <div class="mypeDmList__postings-element">投稿内容</div>
            <div class="mypeDmList__postings-output">サンプルサンプルサンプルサンプルサンプルサンプルサンプル...</div>
          </div>
        </div>
        <!-- ======================================================= -->
        <div class="mypeDmList__detail">
          <div class="mypeDmList__postingTime">
            <div class="mypeDmList__postingTime-element">投稿日時</div>
            <div class="mypeDmList__postingTime-output">2100/01/01</div>
          </div>
          <div class="mypeDmList__postingDate">
            <div class="mypeDmList__postingDate-element">投稿日時・時刻</div>
            <div class="mypeDmList__postingDate-output">00 月00日 00:00:00</div>
          </div>
          <div class="mypeDmList__postings">
            <div class="mypeDmList__postings-element">投稿内容</div>
            <div class="mypeDmList__postings-output">サンプルサンプルサンプルサンプルサンプルサンプルサンプル...</div>
          </div>
        </div>
        <!-- ======================================================= -->
      </div>
    <div class="mypeDmList__dmList-link">もっと見る</div>
  </section>
</template>
<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MypeDmList extends Vue {

}
</script>
<style lang="scss" scope>
.mypeDmList{
  height: 380px;
  width: 1600px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin: 150px auto 0;
  &__title{
    position: relative;
    top:20px;
    margin-bottom: 40px;
    text-align: center;
    font-size: 2rem;
  }

  &__detail{
    width: 1150px;
    margin: 0 auto;
    padding: 0 30px;
    margin-bottom: 20px;
    border-bottom: 1px solid #b4becb;
    overflow: hidden;
  }

  &__postingTime{
    overflow: hidden;
    width: 180px;
    float: left;
    &-element{
      width: 80px;
      float: left;
    }
    &-output{
      width: 50px;
      float: left;
    }
  }

  &__postingDate{
    overflow: hidden;
    width: 300px;
    float: left;
    &-element{
      width: 120px;
      float: left;
    }
    &-output{
      width: 150px;
      float: left;
    }
  }

  &__postings{
    overflow: hidden;
    width: 600px;
    float: left;
    &-element{
      width: 100px;
      float: left;
    }
    &-output{
      width: 500px;
      float: left;
    }
  }

  &__dmList-link{
    text-align: center;
  }
}
</style>
