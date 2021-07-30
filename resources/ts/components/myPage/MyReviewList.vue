<template>
  <section class="mypeMyReviewList">
    <h1 class="mypeMyReviewList__title">Latest Post Review List</h1>
    <div class="mypeMyReviewList__wrap">
      <div class="mypeMyReviewList__listWrap">
        <span class="mypeMyReviewList__scrollLeft">◁</span>
        <!-- =================================== -->

        <div class="mypeMyReviewList__detailElement">
          <div class="mypeMyReviewList__img-wrap">
            <img class="mypeMyReviewList__img">
          </div>
          <div class="mypeMyReviewList__detail">
            <div class="mypeMyReviewList__nameGood-Wrap">
              <div class="mypeMyReviewList__name">
                <div class="mypeMyReviewList__name-element">投稿者名</div>
                <div class="mypeMyReviewList__name-output">山田太郎</div>
              </div>
              <div class="mypeMyReviewList__good">
                <div class="mypeMyReviewList__good-element">♡</div>
                <div class="mypeMyReviewList__good-output">00</div>
              </div>
            </div>
            <div class="mypeMyReviewList__occupation">
              <div class="mypeMyReviewList__occupation-element">在籍時の職種</div>
              <div class="mypeMyReviewList__occupation-output">サンプルサンプル</div>
            </div>
            <div class="mypeMyReviewList__PostingTime">
              <div class="mypeMyReviewList__PostingTime-element">投稿日時・時刻</div>
              <div class="mypeMyReviewList__PostingTime-Output">00 月</div>
            </div>
            <div class="mypeMyReviewList__ReviewDetail">
              <span class="mypeMyReviewList__ReviewDetail-link">このレビューを詳しく見る</span>
            </div>
          </div>
        </div>

        <!-- =================================== -->
        <div class="mypeMyReviewList__detailElement">
          <div class="mypeMyReviewList__img-wrap">
            <img class="mypeMyReviewList__img">
          </div>
          <div class="mypeMyReviewList__detail">
            <div class="mypeMyReviewList__nameGood-Wrap">
              <div class="mypeMyReviewList__name">
                <div class="mypeMyReviewList__name-element">投稿者名</div>
                <div class="mypeMyReviewList__name-output">山田太郎</div>
              </div>
              <div class="mypeMyReviewList__good">
                <div class="mypeMyReviewList__good-element">♡</div>
                <div class="mypeMyReviewList__good-output">00</div>
              </div>
            </div>
            <div class="mypeMyReviewList__occupation">
              <div class="mypeMyReviewList__occupation-element">在籍時の職種</div>
              <div class="mypeMyReviewList__occupation-output">サンプルサンプル</div>
            </div>
            <div class="mypeMyReviewList__PostingTime">
              <div class="mypeMyReviewList__PostingTime-element">投稿日時・時刻</div>
              <div class="mypeMyReviewList__PostingTime-Output">00 月00日</div>
            </div>
            <div class="mypeMyReviewList__ReviewDetail">
              <span class="mypeMyReviewList__ReviewDetail-link">このレビューを詳しく見る</span>
            </div>
          </div>
        </div>

        <!-- =================================== -->
        <div class="mypeMyReviewList__detailElement">
          <div class="mypeMyReviewList__img-wrap">
            <img class="mypeMyReviewList__img">
          </div>
          <div class="mypeMyReviewList__detail">
            <div class="mypeMyReviewList__nameGood-Wrap">
              <div class="mypeMyReviewList__name">
                <div class="mypeMyReviewList__name-element">投稿者名</div>
                <div class="mypeMyReviewList__name-output">山田太郎</div>
              </div>
              <div class="mypeMyReviewList__good">
                <div class="mypeMyReviewList__good-element">♡</div>
                <div class="mypeMyReviewList__good-output">00</div>
              </div>
            </div>
            <div class="mypeMyReviewList__occupation">
              <div class="mypeMyReviewList__occupation-element">在籍時の職種</div>
              <div class="mypeMyReviewList__occupation-output">サンプルサンプル</div>
            </div>
            <div class="mypeMyReviewList__PostingTime">
              <div class="mypeMyReviewList__PostingTime-element">投稿日時・時刻</div>
              <div class="mypeMyReviewList__PostingTime-Output">00 月00日 00:00</div>
            </div>
            <div class="mypeMyReviewList__ReviewDetail">
              このレビューを詳しく見る
            </div>
          </div>
        </div>

        <!-- =================================== -->
        <div class="mypeMyReviewList__detailElement">
          <div class="mypeMyReviewList__img-wrap">
            <img class="mypeMyReviewList__img">
          </div>
          <div class="mypeMyReviewList__detail">
            <div class="mypeMyReviewList__nameGood-Wrap">
              <div class="mypeMyReviewList__name">
                <div class="mypeMyReviewList__name-element">投稿者名</div>
                <div class="mypeMyReviewList__name-output">山田太郎</div>
              </div>
              <div class="mypeMyReviewList__good">
                <div class="mypeMyReviewList__good-element">♡</div>
                <div class="mypeMyReviewList__good-output">00</div>
              </div>
            </div>
            <div class="mypeMyReviewList__occupation">
              <div class="mypeMyReviewList__occupation-element">在籍時の職種</div>
              <div class="mypeMyReviewList__occupation-output">サンプルサンプル</div>
            </div>
            <div class="mypeMyReviewList__PostingTime">
              <div class="mypeMyReviewList__PostingTime-element">投稿日時・時刻</div>
              <div class="mypeMyReviewList__PostingTime-Output">00 月00日 00:00</div>
            </div>
            <div class="mypeMyReviewList__ReviewDetail">
              <span class="mypeMyReviewList__ReviewDetail-link">このレビューを詳しく見る</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>
<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class MyReviewList extends Vue {}
</script>

<style lang="scss" scope>
.mypeMyReviewList{
  height: 600px;
  width: 1600px;
  margin: 0 auto;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  position: relative;
  &__title{
    position: relative;
    top:20px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 2rem;
  }
  &__listWrap{
    height: 430px;
    width: 1450px;
    margin: 40px auto 0px;
  }
  &__scrollLeft{
    font-size: 50px;
    float:left;
    position: absolute;
    top:260px;
    left:25px;
  }
  &__detailElement{
    height: 430px;
    width: 340px;
    float: left;
    border: 1px solid #b4becb;
    border-radius: 5px;
    margin-left: 20px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
  &__img-wrap{
    height: 215px;
    width: 340px;
    border-bottom: 1px solid #b4becb;
  }
  &__scrollRight{
    font-size: 50px;
    float:right;
    position: absolute;
    top:260px;
    right:20px;
  }
  &__detail{
    padding: 30px 40px;
  }
  &__nameGood-Wrap{
    width: 320px;
    overflow: hidden;
  }
  &__name{
    width: 150px;
    border-bottom: 1px solid #b4becb;
    overflow: hidden;
    float: left;
    margin-right: 40px;
    margin-bottom: 10px;
    &-element{
      float: left;
      margin-right: 10px;
    }
    &-output{
      float: left;
    }
  }
  &__good{
    width: 50px;
    border-bottom: 1px solid #b4becb;
    overflow: hidden;
    float: left;
    &-element{
      float: left;
    }
    &-output{
      float: left;
    }
  }
  &__occupation{
    overflow: hidden;
    width: 250px;
    border-bottom: 1px solid #b4becb;
    margin-bottom: 10px;
    &-element{
      float: left;
      margin-right: 10px;
    }
    &-output{
      float: left;
    }
  }
  &__PostingTime{
    overflow: hidden;
    width: 250px;
    border-bottom: 1px solid #b4becb;
    &-element{
      float: left;
      margin-right: 10px;
    }
    &-output{
      float: left;
    }
  }
  &__ReviewDetail{
    height: 40px;
    width: 339px;
    padding: 6px;
    position: relative;
    top:45px;
    left: -41px;
    background-color: #2A3A50;
    color: #fff;
    border-radius: 0 0 5px 5px;
    text-align: center;
    &:link{
      color:#fff;
    }
    &:visited{
      color:#fff;
    }
    &:hover{
      transition: all .5s;
      background-color: #b4becb;
      color: #2A3A50;
    }
  }

  &__ReviewListLink{
    position: absolute;
    left:700px;
    top:550px;
    text-align: center;
  }
}
</style>
