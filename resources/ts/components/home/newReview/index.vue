<template>
  <section class="review">
    <div class="review__content-block">
      <h3 class="review__content-title">New reviews</h3>
      <!-- 新着レビューコンテンツ(今は仮レイアウトの都合上複数同じ要素を作っているがphpを書き始めた際にはfor文で回す) -->
      <div class="review__content-wrap">
        <div class="review__content-individual">

          <!-- イメージ画像 -->
          <img class="review__image" rel="#">

          <!-- ユーザー名 -->
          <div href="#" class="review__userName-style">
            <span class="review__userName">
              ユーザー名
            </span>
          </div>

          <!-- 会社名 -->
          <div href="#" class="review__companyName-style">
            <span class="review__companyName">会社名</span>
          </div>

          <!-- 会社の業界 -->
          <div href="#" class="review__industry-style">
            <span class="review__industry">会社の業界</span>
          </div>

          <!-- レビュー内容(総評) -->
          <div class="review__generalComment-style">
            <div class="review__generalComment">
              サンプルサンプルサンプル<br>
              サンプルサンプルサンプル<br>
              サンプルサンプルサンプル<br>
              サンプルサンプルサンプル<br>
              サンプルサンプルサンプル...
            </div>
          </div>

          <!-- 詳細を見る -->
          <div href="#" class="review__detail-style">
            <span class="review__detail">
            詳細を見る
            </span>
          </div>
        </div>

        <!-- レビューコンテンツ(今は仮レイアウトの都合上複数同じ要素を作っているがphpを書き始めた際にはfor文で回す) -->
        <div class="review__content-individual">

          <!-- イメージ画像 -->
          <img class="review__image" rel="#">

          <!-- ユーザー名 -->
          <div href="#" class="review__username-style">
            <span class="review__userName">
              ユーザー名
            </span>
          </div>

          <!-- 会社名 -->
          <div href="#" class="review__companyName-style">
            <span class="review__companyName">会社名</span>
          </div>

          <!-- 会社の業界 -->
          <div href="#" class="review__industry-style">
            <span class="review__industry">会社の業界</span>
          </div>

          <!-- レビュー内容(総評) -->
          <div class="review__generalComment-style">
            <div class="review__generalComment">
              サンプルサンプルサンプル<br>
              サンプルサンプルサンプル<br>
              サンプルサンプルサンプル<br>
              サンプルサンプルサンプル<br>
              サンプルサンプルサンプル...
            </div>
          </div>

          <!-- 詳細を見る -->
          <div href="#" class="review__detail-style">
            <span class="review__detail">
            詳細を見る
            </span>
          </div>
        </div>

        <!-- レビューコンテンツ(今は仮レイアウトの都合上複数同じ要素を作っているがphpを書き始めた際にはfor文で回す) -->
        <div class="review__content-individual">

          <!-- イメージ画像 -->
          <img class="review__image" rel="#">

          <!-- ユーザー名 -->
          <div href="#" class="review__userName-style">
            <span class="review__userName">
              ユーザー名
            </span>
          </div>

          <!-- 会社名 -->
          <div href="#" class="review__companyName-style">
            <span class="review__companyName">会社名</span>
          </div>

          <!-- 会社の業界 -->
          <div href="#" class="review__industry-style">
            <span class="review__industry">会社の業界</span>
          </div>

          <!-- レビュー内容(総評) -->
          <div class="review__generalComment-style">
            <div class="review__generalComment">
              サンプルサンプルサンプル<br>
              サンプルサンプルサンプル<br>
              サンプルサンプルサンプル<br>
              サンプルサンプルサンプル<br>
              サンプルサンプルサンプル...
            </div>
          </div>

          <!-- 詳細を見る -->
          <div href="#" class="review__detail-style">
            <span class="review__detail">
            詳細を見る
            </span>
          </div>
        </div>
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
export default class NewReview extends Vue {}
</script>
<style lang="scss" scope>
  .review{
    height: 670px;
    background-color: #fff;
    position: relative;
    &__content-block{
      height:550px;
      max-width: 1600px;
      border-radius: 10px;
      overflow: hidden;
      margin: 0 auto;
      position: relative;
      top: 80px;
    }
    &__content-title{
      text-align: center;
      font-size: 2em;
      font-weight: bold;
    }
    &__content-wrap{
      height: 450px;
      width: 1296px;
      margin: 0 auto;
      position: relative;
      top:25px;
    }
    &__content-individual{
      height: 450px;
      width: 30%;
      background-color: #f4f4f4;
      float: left;
      border-radius: 10px;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
      padding: 20px 50px;
      margin-right: 60px;
      &:last-child{
        margin-right: 0px;
      }
    }
  }
</style>

